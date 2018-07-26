const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log("Connected to MongoDB server");

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b58d36008ff3614d41b5e01')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});