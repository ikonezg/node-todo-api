const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

var id = '5aa128f5f7af51481152afe911';

// if(!ObjectId.isValid(id)){
//     console.log('ID not valid!!!');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos findOne', todos);
// });

// Todo.findById(id).then((todos)=>{
//     if(!todos){
//         return console.log('ID not found!!!');
//     }
//     console.log('Todo Find By ID: ', todos);
// }).catch((e)=> console.log(e));

var idUser = '5a9fcbc2e168483c04926eb7';

User.findById(idUser).then((user)=>{
    if(!user){
        return console.log('No User by that ID'); 
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) =>{
    console.log('Dinamo----------->', e);
});
