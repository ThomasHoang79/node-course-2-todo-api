const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {ObjectID} = require("mongodb");

var id = '59e11992d81122c1503fe52411';

if(!ObjectID.isValid(id)) {
    console.log("ID not valid");
}
/*
Todo.find({
    _id: id
}).then((todos) => {
    console.log("Todos", todos);
});

Todo.findOne({
    _id: id
}).then((todos) => {
    console.log("Todos", todos);
});
*/
Todo.findById(id).then((todos) => {
    if(!todos) {
        return console.log("Id not found");
    }
    console.log("Todos by id", todos);
}).catch((e) => console.log(e));