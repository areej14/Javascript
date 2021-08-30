var quotes =['"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
'"The way to get started is to quit talking and begin doing." -Walt Disney',
'"Life is what happens when you are busy making other plans." -John Lennon',
'"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin',
'"Whoever is happy will make others happy too." -Anne Frank'];
var divs = document.getElementById('parent')
var btn = document.getElementById('btn')
btn.addEventListener('click', change)
function change() {

 divs.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
};
