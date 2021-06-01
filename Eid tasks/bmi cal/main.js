var btn1=document.getElementById('btn1');
btn1.addEventListener('click',function(){
    var height=document.getElementById('height').value;
    var weight=document.getElementById('weight').value;
    var bmi = (weight / (height * height) * 10000);
    document.getElementById('BMI').value= bmi;
  
   
})