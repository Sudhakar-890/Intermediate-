import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
        isLength : {min : 3, max : 12},
        unique : true
    },
    description : {
        type : String
    },
    date : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    },
    priority : {
        type : String,
        required : true
    }
});

export const Task = mongoose.model('Task',TaskSchema);
export const DeletedTask = mongoose.model("DeletedTask",TaskSchema);
export const CompletedTask = mongoose.model("CompletedTask",TaskSchema);