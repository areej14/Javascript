var course = [];
for(var i=0; i<5; i++)
{
   
 var courses = Number(prompt("Enter 5 courses marks"));
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
if(per <= 29)
alert("Your grade is F" );
else if(per <= 44)
alert("Your grade is D" );
else if(per <= 60)
alert("Your grade is C" );
else if(per <= 74)
alert("Your grade is B" );
else if(per <= 89)
alert("Your grade is A" );
else if(per<=100)
alert("Your grade is A+" );
else
alert("Invalid");