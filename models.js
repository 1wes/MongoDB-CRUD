const mongoose=require('mongoose');
const {StudentSchema, CourseSchema}=require('./schema');

const Student=mongoose.model("Student", StudentSchema);
const Course=mongoose.model("Course", CourseSchema);

module.exports={
    Student, Course
}