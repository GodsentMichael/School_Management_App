const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const QuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true,
    },
    optionA:{
        type:String,
        required:true,

    },
    optionB:{
        type:String,
        required:true,
      
    },
    ooptionC:{
        type:String,
        required:true,
    },
    optionD:{
        type:String,
        required:true,
    },
    correctAnswer:{
        type:String,
        required:true,
    },
    isCorrect:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type: Schema.Types.ObjectId, //So I'd be able to reference the Teacher Model.
        ref: 'Teacher',
        required: true,
    },

},
{timestamps:true},
);

//Export the model
module.exports = mongoose.model('Question', QuestionSchema);