const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const ClassLevelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    description:{
        type:String,
    },
    //== My Database relationships ===\\
    createdBy: {
        type: Schema.Types.ObjectId, //So I'd be able to reference the Admin Model.
        ref: 'Admin',
        required: true,
    },
    //These students will be added to the class level when they are registered.
    students: [
        {
            type: Schema.Types.ObjectId, //So I'd be able to reference the Student Model.
            ref: 'Student',

        },
    ],
    //These teachers will be added to the class level when they are registered.
    teachers: [
        {
            type: Schema.Types.ObjectId, //So I'd be able to reference the Teacher Model.
            ref: 'Teacher',
        },
    ],


});

//Export the model
module.exports = mongoose.model('ClassLevel', ClassLevelSchema);