var course = [];
var k=0;
for(var i=0; i<5; i++)
{
   
 var courses = Number(prompt("Enter course " + ++k + " marks"));
 if(courses<=100 && courses>0)
 course.push(courses); 
 else
 {
 alert("Invalid");
 break
 }
}
console.log(course)
var obtainedMarks= course[0]+course[1]+course[2]+course[3]+course[4]; 
var totalMarks = 500;
var per = obtainedMarks * 100 / totalMarks;
alert("Percentage is " + per);
