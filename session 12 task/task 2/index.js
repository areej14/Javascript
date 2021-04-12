var images =["img/im3.jpg" , "img/images (1).jpg", "img/images.jpg", "img/1.jpg", "img/2.jpg"];
var divs = document.getElementById('imgs')
var btn = document.getElementById('btn')
btn.addEventListener('click', change)
function change() {
    divs.style.height = "200px";
    divs.style.width = "200px";
 divs.src = images[Math.floor(Math.random() * images.length)]
};
