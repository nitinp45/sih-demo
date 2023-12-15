const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    id:{
        type : String,
        require: true
    },
    sname:{
        type : String,
        require: true
    },
    semail:{
        type : String,
        require: true
    },
    sphone:{
        type : Number,
        require: true
    },
    stype:{
        type : String,
        require: true
    },
    password:{
        type : String,
        require: true
    },

});

const User = mongoose.model('USER',userSchema);
module.exports = User;