//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    /*
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    */

    // Insert into Users collection (name, age, location)
    /*
    db.collection('Users').insertOne({
        name: 'Thomas Hoang',
        age: 38,
        location: 'San Jose, CA'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    });
    */

    db.close();
});