const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    db.collection('Users').find({name: 'Marko'}).toArray().then((docs)=>{
        console.log('Todos :' + docs.length);
        console.log(JSON.stringify(docs, undefined, 2));
        
    }, (err)=>{
        console.log('Unable to fetch todos ', err);
    });

    //db.close();
});