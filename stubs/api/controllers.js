//const ObjectId = require('mongodb').ObjectId;
const getHash = require('pbkdf2-password')();
const { getDb } = require('../../utils/mongo');

const USERS_COLLECTION = 'users';
const RECIPES_COLLECTION = 'recipes_collection';

let db = null;

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
    if (db === null) {
        throw new Error('no db connection :((');
    }
    try {
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
                const { insertedCount } = await userCollection.insertOne({ email, login, password: hash, salt });
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
    if (db === null) {
        throw new Error('no db connection :((');
    }

    try {
        const recipesCollection = db.collection(RECIPES_COLLECTION);
        const result = await recipesCollection.insertOne(recipe);

        if (result.insertedCount > 0) {
            return {
                success: true,
                id: result.insertedId
            };
        }
        throw new Error('Recipe insertion failed');
    } catch (error) {
        throw new Error(error);
    }
}
const requiredFields = (fields) => (req, res, next) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const fieldName of fields) {
        if (!req.body[fieldName]) {
            throw new Error(`Параметр ${fieldName} не установлен`)
        }
    }

    next()
}

module.exports = {
    getUser,
    signUp,
    getResponse,
    _idToId,
    _idToArray,
    getListRecipes,
    getRecipe,
    addRecipe,
    requiredFields
};
