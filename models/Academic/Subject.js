const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const subjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
     //== My Database relationships ===\\
    teacher: {
        type: Schema.Types.ObjectId, //So I'd be able to reference the Teacher Model.
        ref: 'Teacher',
    },
    academicTerm: {
        type: Schema.Types.ObjectId, //So I'd be able to reference the AcademicTerm Model.
        ref: 'AcademicTerm',
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId, //So I'd be able to reference the Admin Model.
        ref: 'Admin',
        required: true,
    },
  
   duration:{
        type:String,
        required:true,
        default: '3 months', //This is the default duration for a subject.
    },
});

//Export the model
module.exports = mongoose.model('Subject', subjectSchema);