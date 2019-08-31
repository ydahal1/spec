const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    camp : {
        type: String,
        require: true
    },
    sector : {
        type: String,
        require: true
    },
    unit : {
        type: Number,
        require: true
    },
    hutNumber1 : {
        type: Number,
        require : true
    },
    hutNumber2 : {
        type: Number
    },

    faceBookID :{
        type:String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    hutsRegistered : {
        type: Number,
        default: 0
    }
})


//This is where you specify which collection you want the data to be saved. 
module.exports = Users = mongoose.model('Users', UsersSchema);

    
    
    
    
    
    
   