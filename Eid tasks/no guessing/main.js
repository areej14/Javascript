var btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    var val=document.getElementById('no').value;
    var output=document.getElementById('output')
    if (val<=0 || val>100)
    output.innerHTML="Please enter a no between 1-100"
    else if(val>0 && val<14)
    output.innerHTML="You Guessed too low"
    else if(val>14 && val<100)
    output.innerHTML="You Guessed too High"
    else if( val == 14) 
    output.innerHTML="You Guessed right, your Mumber was 14"
   else
   output.innerHTML="---Incorrect---"
   
})