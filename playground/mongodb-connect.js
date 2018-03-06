// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) =>{
    //     if(err) return console.log('Unable to insert todo', err);

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name: 'Marko',
        age: 37,
        location: 'croatia'
    }, (err, resault) =>{
        if(err) return console.log('Cant add a user');
        console.log(JSON.stringify(resault.ops, undefined, 2));
    })

    db.close();
});