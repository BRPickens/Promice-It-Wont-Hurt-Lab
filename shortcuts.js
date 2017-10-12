var promise = Promise.resolve('SECRET SAUCE');
var promise = Promise.reject('SECRET SAUCE');

promise.catch(function(err){
    console.error('THERE IS NO HOPE!!');
    console.error(err.message);
});
