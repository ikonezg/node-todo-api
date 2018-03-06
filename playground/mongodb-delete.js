const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany 
    // db.collection('Todos').deleteMany({ text: 'Rucak'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne 
    // db.collection('Todos').deleteOne({ text: 'dinamo'}).then((result)=>{
    //     console.log(result);
    // })

    //find one and delete
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result)=>{
        console.log(result);
    });

    //db.close();
});