var promise = new Promise (function(resolve, reject) {
    setTimeout(function() {
        resolve('TIMED OUT!');
}, 300);
});
promise
    .then(console.log)