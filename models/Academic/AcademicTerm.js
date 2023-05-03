const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var academicTermSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    isCurrent:{
        type:Boolean,
       default: false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
   
   
});

//Export the model
module.exports = mongoose.model('AcademicTerm', academicTermSchema);