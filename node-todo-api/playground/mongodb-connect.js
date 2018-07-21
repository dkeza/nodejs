const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log("Connected to MongoDB server");

    db.collection('Todos').insertOne({
        text: 'Another to do',
        completed: false
    }, (err, result) => {
        if (err) {
            console.log('Unable to insert');
            return;
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});