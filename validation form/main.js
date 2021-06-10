var btn=document.getElementById('btn')
btn.addEventListener('click',function(){
    //getting values
    var n=document.getElementById('name')
    var name=n.value;
    var m=document.getElementById('mail')
    mail = m.value;
    var pass=document.getElementById('password')
    password=pass.value;
    var confirm=document.getElementById('ConPas')
    ConPas=confirm.value;
    var table=document.getElementById('table')
    // not getting empty fields
    if( name.trim().length==0 || mail.trim().length==0 || password.trim().length==0 || ConPas.trim().length==0)
    alert("Please fill all the fileds")
    
    else{ 
        // valdating email
        var mailformat = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
        if(!(m.value.match(mailformat)))
        {
        alert(`  Enter a valid email address!
         e.g: abc@gmail.com`);   
         
        }
        else
        // validating passwords
{
    if(password == ConPas){
    // creating table
    var row2=document.createElement('tr')
    table.append(row2);
    var td1=document.createElement('td')
    td1.innerText=name;
    row2.append(td1);
    var td2=document.createElement('td')
    td2.innerText=mail;
    row2.append(td2);
    var td3=document.createElement('td');
    row2.append(td3);
    var btn1=document.createElement('button');
    btn1.innerText="Edit";
    td3.append(btn1);
    var btn2=document.createElement('button');
    btn2.innerText="Delete";
    td3.append(btn2);
    //seting fileds empty
    m.value =" ";
    n.value="";
    pass.value =null ;
    confirm.value =null ;
    //delete
    btn2.addEventListener('click',function(){
        row2.innerHTML=" ";
    })
    //edit
    btn1.addEventListener('click',function(){
        var newn=prompt("Enter name",td1.innerHTML);
        if(newn.trim().length==0)
        {
            alert("This field can't be empty")
        }
        else
        td1.innerText=newn;
        var newmail=prompt("Enter ",td2.innerHTML);
        if(!(newmail.match(mailformat)))
        {
        alert(`  Enter a valid email address!
         e.g: abc@gmail.com`); 
        }
        else
        td2.innerText=newmail;
        var newPass=prompt("Enter Password");
        if(newPass.trim().length==0)
        {
            alert("This field can't be empty")
        }
        else{
        var newcon=prompt("Confirm Password");
        if(newcon.trim().length==0)
        {
            alert("This field can't be empty")
        }
        else{
            if(newPass==newcon){
                pass.value=newPass;
                confirm.value=newcon;
                pass.value=null;
                confirm.value=null;
           }
            else
            alert("Your Password and Confirm Password's fields should be same ")
        } }})
    }
    else{
        alert("Your Password and Confirm Password's fields should be same")
    }
}
}})

    