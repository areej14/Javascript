 var courses = [];
 var k=0;
 var l=0;
for(var i=0; i<5; i++)
{
 
 var course = prompt("Enter " + ++k +" course name");
 courses.push(course); 
 }
 alert(courses);
 for(var j=0;j<5;j++)
 {
     
     prompt("Course" + ++l, courses[j] )
 }
