let getUser = (id, callback) => {
    let user = {
        id: id,
        name: "Pero"
    };

    setTimeout( () => {
        callback(user);
    },3000);

}

getUser(1, (userObj) => {
    console.log(userObj);
});