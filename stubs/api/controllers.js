//const ObjectId = require('mongodb').ObjectId;
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
    // if (db === null) {
    //     throw new Error('no db connection :((');
    // }
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
            console.log(insertedCount)
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

const getListRecipes = async ({ userId = fakeId }) => {
    if (db === null) {
        throw new Error('no db connection :((');
    }

    try {
        const recipesCollection = db.collection(RECIPES_COLLECTION);
        const recipesData = await recipesCollection.find({ userId }).toArray();

        if (recipesData) {
            return _idToArray(recipesData);
        }

        throw new Error('No one recipe in db!');
    } catch (error) {
        throw new Error(error);
    }
}

const getRecipe = async ({ dishId }) => {
    if (db === null) {
        throw new Error('no db connection :((');
    }

    try {
        const recipesCollection = db.collection(RECIPES_COLLECTION);
        const recipeData = await recipesCollection.findOne({ dishId });

        if (recipeData) {
            return _idToId(recipeData);
        }

        throw new Error('Not found recipe');
    } catch (error) {
        throw new Error(error);
    }
}

const addRecipe = async (recipe) => {
    try {
        if (!db) {
            db = await connectToDB('your-mongodb-uri-here');
        }
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

const addFavorite = async ({userId, recipeId})=>{
    if(db === null){
        throw new Error("No db connection :((")
    }
    try{
        const favorites = db.collection(FAVORITES_USER)
        const result = await favorites.updateOne(
        { userId: "userId" }, 
        { $addToSet: { recipeIds: "recipeId" } }, 
        { upsert: true } 
      );
    }
    catch(error){
        console.error(error);
    }
}

const getFavorites= async (userId) => {
    if (!db) {
        throw new Error("No db connection :((");
    }

    try {
        const favoritesCollection = db.collection(FAVORITES_USER);
        const userFavorites = await favoritesCollection.findOne({ userId });

        if (!userFavorites || !userFavorites.recipeIds || userFavorites.recipeIds.length === 0) {
            return [];
        }

        const recipesCollection = db.collection(RECIPES_COLLECTION);
        const favoriteRecipes = await recipesCollection.find({ _id: { $in: userFavorites.recipeIds } }).toArray();

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
    getFavorites
};
