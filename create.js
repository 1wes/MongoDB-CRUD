const mongoose=require('mongoose');
const {Student, Course}=require('./models');

const studentsList=[{
    id:1,
    name:"Okemwa Welsy",
    age:26,
    enrolled:true,
    course:"Computer Science"
},{
    id:2,
    name:"Hope Nduta",
    age:22,
    enrolled:true,
    course:"Econ Math"
}];

const courseList=[{ 
    id:1,
    name:"Computer Science ",
    enrollees:1,
    enrolledBy:'649b2e0c439f2a268d194ebf'
},{
    id:2,
    name:"Econ Math",
    enrollees:1,
    enrolledBy:'649b2e0c439f2a268d194ec0'
}]

const createStudent=async()=>{

    // await Course.create(courseList);

    console.log("created")
}
 
createStudent();

module.exports={
    createStudent 
}