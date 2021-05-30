var images =["img/1.jpg" , "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
var divs = document.getElementById('imgs')
var btn = document.getElementById('btn')
btn.addEventListener('click', change)
function change() {
   
 divs.src = images[Math.floor(Math.random() * images.length)]
};
