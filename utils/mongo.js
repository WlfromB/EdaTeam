    const MDBClient = require('mongodb').MongoClient;

    const routeConnection = require('../.serverrc');

    const URL = `mongodb://${routeConnection.mongoAddress}:${routeConnection.mongoPort}/`;
    
    const dbInstance = { };

    const mongoDBConnect = async () =>
    {
        try
        {
            const MongoClient = new MDBClient(URL, 
            {
                useUnifiedTopology: true
            });            
            MongoClient.on('commandStarted', started => console.log(started));
            return await MongoClient.connect();
        }
        catch(error)
        {
            console.error(error);
        }
    }

    const client = mongoDBConnect();

    const getDb = async(dbName)=>
    {
        try
        {
            
            const cl = await client;
            dbInstance[dbName] = await cl.db(dbName);
            return dbInstance[dbName];
        }
        catch(error)
        {
            console.error(error);
        }
    }

    module.exports = {
        getDb,
    }