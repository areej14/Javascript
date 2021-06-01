var btn1=document.getElementById('btn1');
btn1.addEventListener('click',function(){
    var bilAm=document.getElementById('bilAm').value;
    var tipPer=document.getElementById('tipPer').value;
    var tipAm=bilAm/tipPer
    console.log(tipAm)
    document.getElementById('tipAmm').value= tipAm  ;
    var total= Number(tipAm)+Number(bilAm)
    document.getElementById('total').value= total;
  
   
})