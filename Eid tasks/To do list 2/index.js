var btn=document.getElementById('btn')
var btn2=document.getElementById('btn2')
btn2.addEventListener('click',function(){
    list.innerText=" ";
})
btn.addEventListener('click',function(){
    var text=document.getElementById('type');
    var list=document.getElementById('list')
    var lis = document.createElement('li');
    var b1=document.createElement('button')
    var b2=document.createElement('button')
    var word = text.value;

    if(text.value == "" || word.trim().length==0)
    alert("please write some task")
    else
    {
    lis.innerText = text.value + " "  ;
    
    b1.innerText="Edit"
    b2.innerText="Delete"
    list.appendChild(lis)
    lis.appendChild(b1)
    lis.appendChild(b2)
    text.value=" ";
    b1.addEventListener('click',function(){
    
     var e= prompt("Edit your task");
     if(  e.length == " " || e.trim().length==0)
     alert("please add your task")
     else{
     lis.innerText = e + " ";
     lis.appendChild(b1)
    lis.appendChild(b2)
     }
    })
    b2.addEventListener('click',function(){
        list.removeChild(lis)
    })
    }
    

})