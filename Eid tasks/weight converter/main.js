var btn1=document.getElementById('btn1');
btn1.addEventListener('click',function(){
    var val=document.getElementById('no').value;
    var output=document.getElementById('output')
    var cal=val*2.205 + " pounds";
    output.value=cal;
  
   
})
var btn2=document.getElementById('btn2');
btn2.addEventListener('click',function(){
    var val=document.getElementById('no').value;
    var output=document.getElementById('output')
    var cal=val/2.205 + " kg";
    output.value=cal;
  
   
})