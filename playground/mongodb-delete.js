//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    // deleteMany
    /*
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });
    */

    // deleteOne
    /*
    db.collection('Todos').deleteOne({text: 'eat rice'}).then((result) => {
        console.log(result);
    });
    */

    // findOneAndDelete
    /*
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    })
    */

    // Delete all Thomas Hoang
    /*
    db.collection('Users').deleteMany({name: 'Thomas Hoang'}).then((result) => {
        console.log(result);
    });
    */
    
    // Delete by id
    db.collection('Users').findOneAndDelete({_id: new ObjectID('59dfec9ba3d278332353e230')}).then((result) => {
        console.log(result);
    });
    //db.close();
});