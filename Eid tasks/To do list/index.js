var btn=document.getElementById('btn')
btn.addEventListener('click',function(){
    var text=document.getElementById('type');
    var list=document.getElementById('list')
    var lis = document.createElement('li');
    if(text.value==" ")
    alert("please write some task")
    else{
    lis.innerText = text.value;
    list.appendChild(lis)
    text.value=" ";
    }
    lis.addEventListener('click', function(){
        lis.style.textDecoration= "line-through"
    })
    lis.addEventListener('dblclick', function(){
        list.removeChild(lis)
    })


})