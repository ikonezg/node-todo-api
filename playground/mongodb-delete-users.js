const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Cant connect to DB ');
    }
    console.log('Success connection to DB ');

    console.log('DELETE MANY');
    db.collection('Users').deleteMany({ name: 'Marko' }).then((res)=>{
        console.log(res);
    });

    console.log('DELETE by ID');
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5a9e7d9e8e7951a75bc380d8')})
    .then((res)=>{
        console.log(res);
    });
    //db.close();
})