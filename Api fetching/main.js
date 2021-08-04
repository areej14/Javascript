var b = document.getElementById('btn')
b.addEventListener('click', async function () {
  
    var show=document.getElementById('wait')
    show.innerHTML = `<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>`
    var info = await fetch('https://api.github.com/users')
    if (info.status == 200)
    {
      show.innerHTML = `<div class="input-group mb-3" style="width:50%; margin:auto; ">
    <input id="in" type="text" class="form-control" placeholder="Enter username" aria-label="Enter username" aria-describedby="button-addon2">
    <button id="btn2" class="btn btn-outline-primary" type="button" id="button-addon2">Submit</button>
  </div>`;
}
  
    else{
      show.innerHTML="";
      let pic = `<img src="./images/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" height="300" width="300" ></img>`
      var table = document.getElementById('table');  
      table.innerHTML = pic;
     
    }
  
  let chType = await info.json()
  var r = `<tr><td>Id</td><td>Login</td><td>Type</td><td>Avatar</td></tr>`;
  chType.map(data => {
    r += `<tr><td>${data.id}</td><td>${data.login}</td><td>${data.type}</td><td><img src="${data.avatar_url}" height="100" width=" 100"></td></tr>`
  })
  var table = document.getElementById('table');
  table.innerHTML = r;
  var b2 = document.getElementById('btn2');
  b2.addEventListener('click', async function () {
    var i = document.getElementById('in');
    var no = i.value;
    if (no != "") {

      var data = await fetch(`https://api.github.com/users/${no}`)


      let result = await data.json()

      if (result.message == "Not Found") {
        let pic = `<img src="./images/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" height="300" width="300" ></img>`
        table.innerHTML = pic;
        i.value = "";

      }
      else {
        var r = `<tr><td>Id</td><td>Login</td><td>Type</td><td>Avatar</td></tr>`;
        r += `<tr><td>${result.id}</td><td>${result.login}</td><td>${result.type}</td><td><img src="${result.avatar_url}" height="100" width=" 100"></td></tr>`
        table.innerHTML = r;
        i.value = "";
      }
    }
    else {
      let pic = `<img src="./images/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" height="300" width="300" ></img>`

      table.innerHTML = pic;
    }
})
})




