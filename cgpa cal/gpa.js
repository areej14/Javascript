import { calculateGPA, qPoints, ch } from "./calculate.js";

export function GPA() {
    var container2 = document.getElementById('container2');
    container2.innerHTML = `<label  >Enter no of subjects:</label>
    <input id="subjectNo" type="number" ><br/><br/>
    <button class="btn btn-outline-primary" id="btn1">Submit</button><br/><br/>`
    var no = document.getElementById('subjectNo');
    var btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', function () {

        for (let i = 1; i <= no.value; i++) {
            var subConatiner = document.createElement('div')
            var container2 = document.getElementById('container2');
            subConatiner.innerHTML = `<label>Enter Subject ${i} : <label/>
                <input placeholder="Credit Hours" class="cHours" type="number" />
                <input placeholder="Marks" class="Marks" type="number" />`;

            container2.append(subConatiner)


        }
        var subContainer2 = document.createElement('div')
        subContainer2.innerHTML = `<br/><button class="btn btn-outline-primary" id ="submit">Result </button>`
        container2.append(subContainer2)
        no.value = "";
        var Result = document.getElementById('submit')


        Result.addEventListener('click', function () {
            var cHours = document.getElementsByClassName('cHours');
            var Marks = document.getElementsByClassName('Marks');



            for (let j = 0; j < cHours.length; j++) {
                //calling calculateGPA Function by passing array(CHours,Marks) index one by one
                calculateGPA(parseInt(cHours[j].value), parseInt(Marks[j].value))

            }
            // console.log("qpoints  " + qPoints + ' credit hour ' + ch)
            var final = qPoints / ch;
            var gpaValue = document.createElement('h4')
            gpaValue.innerHTML = `Your GPA is  ${final.toFixed(4)}`;
            container2.innerHTML = "";
            container2.append(gpaValue)
            cHours.value = "";
            Marks.value = "";


        })
    })
}
