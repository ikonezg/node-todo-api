const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });


//findOneAndRemove 
Todo.findOneAndRemove({_id: '5aa2a2567d2e6231c671d5f8'}).then((todo)=>{
    console.log(todo);
})

//findByIdAndRemove
Todo.findByIdAndRemove('5aa2a2567d2e6231c671d5f8').then((todo)=>{
    console.log(todo);
})
