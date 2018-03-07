const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
         _id: new ObjectID('5a9e95608e7951a75bc3888a')
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((res)=>{
        console.log(res);
    });

    //db.close();
});