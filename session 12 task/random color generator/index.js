var colors =['rgb(28, 226, 160)' , "rgb(123, 216, 80)", "rgb(13, 63, 46)", "rgb(38, 202, 120)", "rgb(70, 151, 83)"];
var divs = document.getElementById('parent')
var btn = document.getElementById('btn')
btn.addEventListener('click', change)
function change() {

 divs.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
};
