var button = document.getElementById("btn")
button.addEventListener('click', calculate);
function calculate(){
    var input= document.getElementById("child").value;
    var count = input.length;
    var deduct= input.split(' ').length-1;
    total= count - deduct;
    var output = document.getElementById("target")
    output.innerHTML= `<h3>LENGTH IS ${total}</h3>`;


 }
 