//Exercise 3
//Create local Module in NodeJs
//arrow function with no name, this function does not take argument vrbname = () => {
          
const dateofBirth = "16/09/2004"
const getStudentName = () => 
{
          return "write your name here"
}

const getCampusName = () => 
{
          return ("UEL Campus")
}

//exporting functions & variable outside the module
exports.getName=getStudentName;
exports.Location=getCampusName;
exports.doB = dateofBirth
//How to export function with parameters
exports.Studentgrade = (marks) => 
{
       if (marks>50 && marks<70) 
         return ("B grade")   
       else
          return ("A grade")
}