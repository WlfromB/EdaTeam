const ObjectId = require('mongodb').ObjectId;
const getHash = require('pbkdf2-password')();
const { getDb } = require('../../utils/mongo');

const USERS_COLLECTION = 'users';
const RECIPES_COLLECTION = 'recipes_collection';
const FAVORITES_USER = 'favorites_user'
let db =null;

const connect = async () => {
    db = await getDb('edateam');
};

const init = async () => {
    await connect();
};

init();

const _idToId = (data) => {
    const { _id, ...rest } = data;
    return {
        id: _id,
        ...rest
    };
}

const _idToArray = (data) => {
    const _idToMap = data.map((item) => _idToId(item));
    return _idToMap;
}

const getResponse = (error, data, success = true) => {
    if (error) {
        return {
            success: false,
            error,
        }
    }

    return {
        success,
        data,
    }
}

const signUp = async ({ email, login, password }) => {
    try {
    db = await getDb('edateam');
    const userCollection = db.collection(USERS_COLLECTION);

    const userData = await userCollection.findOne({
        $or: [
            { login },
            { email }
        ]
    })

    if (userData?.login === login) {
        throw new Error('This login already in db!\nPlease come up with another login!');
    }

    if (userData?.email === email) {
        throw new Error('This email already in db!\nPlease come up with another email!');
    }
    
    return new Promise((resolve, reject) => {
        getHash({ password }, async (err, pass, salt, hash) => {
            if (err) {
                return reject(err);
            }
            const insertedCount  = await userCollection.insertOne({ email, login, password: hash, salt });
            
            if (!insertedCount) {
                return reject(new Error('Insert error!'));
            }
            resolve({});
        });
    });
   
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const getUser = async ({ email }) => {
    if (db === null) {
        throw new Error('no db connection :((');
    }

    try {
        const userCollection = db.collection(USERS_COLLECTION);
        const userData = await userCollection.findOne({ email });
        if (userData) {
            return userData;
        }
        throw new Error('Wrong email or password!');
    } catch (error) {
        throw new Error(error);
    }
}

const getListRecipes = async () => {
    try {
        db = await getDb('edateam');
        const recipesCollection = db.collection(RECIPES_COLLECTION);
        const recipesData = await recipesCollection.find().toArray();

        if (recipesData.length > 0) {
            return _idToArray(recipesData);
        } else {
            throw new Error('No recipes found in the database!');
        }
    } catch (error) {
        console.error('Error in getListRecipes:', error.message);
        throw new Error(error.message);
    }
};

const getRecipe = async (dishId ) => {
    try {
        db = await getDb('edateam');
        const recipesCollection = db.collection(RECIPES_COLLECTION);
        const id = dishId.id;
        const recipeData = await recipesCollection.findOne({ _id :new ObjectId(id) } );
        if (recipeData!=null) {
            return _idToId(recipeData);
        }

        throw new Error('Not found recipe');
    } catch (error) {
        throw new Error(error);
    }
}

const addRecipe = async (recipe) => {
    try {
        db = await getDb('edateam');
        const recipesCollection = db.collection(RECIPES_COLLECTION);
        const result = await recipesCollection.insertOne(recipe);
        
        if (!result.insertedId) {
            throw new Error('Recipe insertion failed');
        }
        
        return {
            success: true,
            id: result.insertedId
        };
    } catch (error) {
        console.error('Error in addRecipe:', error.message);
        throw new Error(error.message);
    }
};


const requiredFields = (fields) => (req, res, next) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const fieldName of fields) {
        if (!req.body[fieldName]) {
            throw new Error(`Параметр ${fieldName} не установлен`)
        }
    }

    next()
}

const addFavorite = async (userId, recipeId) => {
    
    try {
        db = await getDb('edateam');
        const favoritesCollection = db.collection(FAVORITES_USER);
        const result = await favoritesCollection.updateOne(
            { userId: new ObjectId(userId) },
            { $addToSet: { favorites: new ObjectId(recipeId) } },
            { upsert: true }
        );
        return result;
    } catch (error) {
        throw new Error('Error adding favorite: ' + error.message);
    }
};

const getFavorites = async (userId) => {
    try {
        db = await getDb('edateam');
        const favoritesCollection = db.collection(FAVORITES_USER);
        const userFavorites = await favoritesCollection.findOne({ userId: new ObjectId(userId) });

        if (!userFavorites || !userFavorites.favorites || userFavorites.favorites.length === 0) {
            return [];
        }

        const recipesCollection = db.collection(RECIPES_COLLECTION);
        const favoriteRecipes = await recipesCollection.find({ _id: { $in: userFavorites.favorites } }).toArray();

        return favoriteRecipes;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get user favorites with recipes");
    }
};

module.exports = {
    getUser,
    signUp,
    getResponse,
    _idToId,
    _idToArray,
    getListRecipes,
    getRecipe,
    addRecipe,
    requiredFields, 
    getFavorites,
    addFavorite
};
