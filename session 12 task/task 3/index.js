var i= 0;
var divs = document.getElementById('imgs')
var pic =["img/1.jpg" , "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
var btn = document.getElementById('btn1')
btn.addEventListener('click', prev)
var btn = document.getElementById('btn2')
btn.addEventListener('click', next)
function prev() {
  if (i==0)
      {
        alert('Already on 1st Image');
      }
   if( i > 0 && i <= pic.length-1)

      {
          i--;
         return change();
      }
     
    // else
    //     {
    //     i=0;
    //     return change();
    //     }
};
function next() {
     if(i == pic.length-1)
     {
       alert('Already on last image')
     }
     if(  i >= 0 && i < pic.length-1)
     {
        i++;
        return change();
     }
    
      //  else
      //  {
      //  i=0;
      //  return change();
      //  }
};
    function change(){
       
        divs.src = pic[i];
    };

