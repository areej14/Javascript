var para=document.getElementById('day')
var para2=document.getElementById('date')
var d = new Date();
var e= d.getDay();
string=e.toLocaleString()
if(string=="0")
para.innerHTML="Sunday"
else if (string=="1")
para.innerHTML="Monday"
else if (string=="2")
para.innerHTML="Tuesday"
else if(string=="3")
para.innerHTML="Wednesday"
else if(string=="4")
para.innerHTML="Thursday"
else if(string=="5")
para.innerHTML="Friday"
else if(string=="6")
para.innerHTML="Saturday"
else
para.innerHTML="error"
para2.innerHTML= d.toLocaleString()

