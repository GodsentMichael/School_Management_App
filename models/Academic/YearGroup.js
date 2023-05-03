const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const yearGroupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
      //== My Database relationships ===\\
    createdBy: {
        type: Schema.Types.ObjectId, //So I'd be able to reference the Admin Model.
        ref: 'Admin',
        required: true,
    },
    academicYear: {
        type: Schema.Types.ObjectId, //So I'd be able to reference the AcademicYear Model.
        ref: 'AcademicYear',
        required: true,
    },
},
    {
        timestamps: true,
    },
);

//Export the model
module.exports = mongoose.model('User', userSchema);