//Exercise 1
//define the function
function EmployeeInfo(name, Salary)
{
          console.log("Welcome," + name + " your salary is " + Salary);
}
console.log("This is my first programe");
var EmpName=" Zest Chukwu ";
var EmpSalary=50000;
//call the function
EmployeeInfo(EmpName,EmpSalary)

//Exercise 2
//create arrow function
const EmpSkills = (skills) => {
          console.log("Expert in " + skills)
}
EmpSkills("Javascript")
EmpSkills("Python")
EmpSkills("HTML")
EmpSkills("Java")

//Exercise 3
// Import the studentInfo and Person modules
const studentInfo = require('./StudentInfo')
const Person = require('./Person')

// Uisng functions from StudentInfo module
console.log("Student Name: " + studentInfo.getName());
console.log("Campus Location: " + studentInfo.Location());
console.log("Date of Birth: " + studentInfo.doB);
console.log("Grade: " + studentInfo.Studentgrade(80));

//create an instance of the student class from person.js
const student = new Person("Zest", 20, "zest@uel");
console.log(student.getPersonInfo());

//Exercise 4
//Import  the OS and util module
const os = require('os');
const util = require('util');

//Using functions from OS module
console.log("Temporary Directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + ", Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600).toFixed(2) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Total Memory: " + (os.totalmem() / 1e9).toFixed(2) + " GB");
console.log("Free Memory: " + (os.freemem() / 1e9).toFixed(2) + " GB");
console.log("CPU Info: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));
console.log("Program ended");