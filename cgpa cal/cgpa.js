export function CGPA() {
    var container2 = document.getElementById('container2');
    container2.innerHTML = `<label  >Enter no of semesters:</label>
    <input id="semNo" type="number" min= 1 max=8><br>
    <button class="btn btn-outline-primary" id="btn1">Submit</button><br/>`
    var no = document.getElementById('semNo');
    var btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', function () {
        if (no.value > 0 && no.value <= 8) {
            for (let i = 1; i <= no.value; i++) {
                var subConatiner = document.createElement('div')
                var container2 = document.getElementById('container2');
                subConatiner.innerHTML = `<br/><input placeholder="Enter semester ${i} GPA " class="semGpa" type="number" /><br/>`;
                container2.append(subConatiner)
            }
        }

        else
            alert("Enter a valid semester no");
        var subContainer2 = document.createElement('div')
        subContainer2.innerHTML = `<br/><button class="btn btn-outline-primary" id ="submit">Result </button>`
        container2.append(subContainer2)
        no.value = "";
        var Result = document.getElementById('submit')
        Result.addEventListener('click', function () {

            var semGpa = document.getElementsByClassName('semGpa');
            var total = 0;
            for (let j = 0; j < semGpa.length; j++) {
                total = total + parseFloat(semGpa[j].value);


            }

            var final = total / semGpa.length;
            var cgpaValue = document.createElement('h4')
            cgpaValue.innerHTML = `Your CGPA is  ${final.toFixed(4)}`;
            container2.innerHTML = "";
            container2.append(cgpaValue)


        })

    });
}