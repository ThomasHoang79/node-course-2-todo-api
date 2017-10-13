var express = require("express");
var bodyParser = require("body-parser");
const {ObjectID} = require("mongodb");

var {mongoose} = require('./db/mongoose');
var {Todo} = require("./models/todo");
var {user} = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get("/todos/:id", (req, res) => {
    var id = req.params.id;
    
    // is id valid
      // 404
    if(!ObjectID.isValid(id)) {
        return res.status(404).send("Invalid Id");
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send("ID not found");
        }
        res.send("ID found");
    }).catch((e) => {
        res.status(404).send("error search");
    });
    // findById
    //success - send it back
    //          - if no todo, then send back 404 and enty array
    //error - send back 404 and empty array


})

app.listen(3000,() => {
    console.log("Started on Port 3000");
});

module.exports = {app};