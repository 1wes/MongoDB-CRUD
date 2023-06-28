const {Student, Course}=require('./models');

const readStudent=async()=>{

    const courses=await Course.find({}, {__v:0}).populate("enrolledBy").exec(); 
    const students=await Student.find({}, {__v:0}).limit(2).exec();

    console.log(courses); 
    // console.log(students._id); 
}

readStudent()

module.exports={
    readStudent
}