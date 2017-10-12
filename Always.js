var promise = new Promise (function(fulfill){
    fulfill('PROMISE VALUE');
});

promise
    .then(function(fulfill){
        console.log(fulfill);
    })
    console.log("MAIN PROGRAM")promise-it-wont-hurt
    