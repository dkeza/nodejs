const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').deleteMany({text : 'Eat something'}).then((result) => {
    //     console.log(result);
    // });
    
    // db.collection('Todos').deleteOne({text : 'Eat something'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
        console.log(result);
    });

    //db.close();
});