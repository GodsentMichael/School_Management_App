const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const academicYearSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    fromYear:{
        type:Date,
        required:true,
    },
    toYear:{
        type:Date,
        required:true,
    },
    isCurrent:{
        type:Boolean,
       default: false,
    },
     //== My Database relationships ===\\
    createdBy:{
        type: Schema.Types.ObjectId, //So I'd be able to reference the Admin Model.
        ref: 'Admin',
        required: true,
    },
    //To know how many students are in a particular academic year.
    students: [ 
        { 
        type: Schema.Types.ObjectId, //So I'd be able to reference the Student Model.
        ref: 'Student',
        },
    ],
    //To know how many teachers are in a particular academic year.
    teachers: [
        { 
        type: Schema.Types.ObjectId, //So I'd be able to reference the Teacher Model.
        ref: 'Teacher',
        },
    ],
   

});

//Export the model
module.exports = mongoose.model('AcademicYear', academicYearSchema);