//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('59dfeac5a3d278332353e0ee')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a8927d979dfd449125079c1')
    }, {
        $set: {
            name: 'Jimbo'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    //db.close();
});