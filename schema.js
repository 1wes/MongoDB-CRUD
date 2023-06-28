const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const StudentSchema=new Schema({
    id:Number,
    name:{
        type:String,
        unique:true
    },
    age:Number,
    course:String,
    enrolled:Boolean
})

const CourseSchema=new Schema({
    id:Number,
    name:{
        type:String,
        unique:true
    },
    enrollees:Number,
    enrolledBy:{
        type:Schema.Types.ObjectId,
        ref:'Student'
    }
})

module.exports={
    StudentSchema, 
    CourseSchema
};