console.log("Starting up");

setTimeout(() => {
    console.log("Inside of callback");
}, 2000);

setTimeout(() => {
    console.log("Do it immedetly");
}, 0);

console.log("Finishing up");