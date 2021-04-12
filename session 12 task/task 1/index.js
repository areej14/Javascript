var colors =['red' , "blue", "aqua", "pink", "green"];
var divs = document.getElementById('parent')
var btn = document.getElementById('btn')
btn.addEventListener('click', change)
function change() {
    divs.style.height = "200px";
    divs.style.width = "200px";
    divs.style.border ="3px solid black "
 divs.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
};
