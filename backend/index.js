const {MongoClient} = require('mongodb');

async function main() {
	const uri ='mongodb+srv://swamphacks2023:brEE0112@hackmate.kllqfu4.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(uri);
    await client.connect();     //returns a promise

    try {
        await client.connect();
    
        await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    }

    finally {
        await client.close();   //to close the connection
    }
}

main().catch(console.error);

async function listDatabases(client){   //prints lists of databases in cluster
    databasesList = await client.db().admin().listDatabases();
  
    var curr = databasesList.databases[0].name;

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    databasesList.databases.adminCommn
    
    console.log({curr});

    const db = client.db('HackMates');
    const collections = await db.listCollections().toArray();
    console.log(collections);

};