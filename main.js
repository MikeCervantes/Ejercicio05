var mongoose=require('mongoose');
var schema=require('./schema');
var User=mongoose.model('User2', schema, 'users2');
var user=new User({
    name:'John Smith',
    email:'john@smith.io'
});

mongoose.connect('mongodb://localhost:27017/test');

user.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!!");
    process.exit(0);
});