var express = require('express');
var bodyParser = require('body-parser');

const {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    }, (err)=>{
        res.status(400).send(err);
    });
});

//GET /todos/123545
app.get('/todos/:id', (req, res)=>{
    var id = req.params.id;

    if(!ObjectId.isValid(id)){
        console.log('ID not valid!!!');
        return res.status(404).send();
    }

    Todo.findById(id).then((todos)=>{
        if(!todos){
            return res.status(404).send();
        }

        res.status(200).send({todos});
    }).catch((e)=>{
        res.status(400).send();
    })

})


app.listen(3000, ()=>{
    console.log('Server started on localhost port: 3000');
});

module.exports = {app};