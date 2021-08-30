var a=0;
var sub=document.getElementById('btn1');
sub.addEventListener('click',function(){
    if(a==0){
       alert("Invalid choice");
    }
    else
    {
    a--;
    var output =document.getElementById('parent');
    output.innerHTML=`<h3>${a}</h3>`;
    }

})
var add=document.getElementById('btn2');
add.addEventListener('click',function(){
    
    a++;
   var output= document.getElementById('parent');
    output.innerHTML=`<h3>${a}</h3>`;

})
var reset=document.getElementById('btn3');
reset.addEventListener('click',function(){
    a=0;
    var output= document.getElementById('parent');
    output.innerHTML=`<h3>${a}</h3>`;})