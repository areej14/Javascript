var para=document.getElementById('para')
//font family
var family=document.getElementById('family');
family.addEventListener('click',function(){
var check=family.value;
if(check == "verdana")
{
    para.style.fontFamily="verdana "
}

else if(check=="monospace"){
    para.style.fontFamily="monospace"
}
else if(check=="cambria"){
    para.style.fontFamily="cambria"
}
else if(check=="georgia"){
    para.style.fontFamily="georgia"
}
else {
    para.style.fontFamily="arial"
}})
//font size
var size=document.getElementById('size');

size.addEventListener('click', function(){
   para.style.fontSize= size.value + "px";
   var show=document.getElementById('show').innerHTML=`Font Size: ${size.value}px`;

   })
   //font color

var orange=document.getElementById('orange')
orange.addEventListener('click',function(){
    para.style.color="orange";
})
var blue=document.getElementById('blue')
blue.addEventListener('click',function(){
    para.style.color="blue";
})
var red=document.getElementById('red')
red.addEventListener('click',function(){
    para.style.color="red";
})
var green=document.getElementById('green')
green.addEventListener('click',function(){
    para.style.color="green";
})
//font style
var normal = document.getElementById('normal');
normal.addEventListener('click', function(){
    para.style.fontStyle = "normal";
})
var cursive = document.getElementById('cursive');

cursive.addEventListener('click', function() {
    para.style.fontStyle = "italic";
})
//font weight
var light=document.getElementById('light');
light.addEventListener('click', function() {
    para.style.fontWeight = "lighter";
})

var bold=document.getElementById('bold');
bold.addEventListener('click', function() {
    para.style.fontWeight = "bold";
})