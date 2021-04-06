// ******** String **********
// Examples 1

// var a = "string text"
// console.log(a)


// // ******************

// // Examples 2

// var longText = "Lorem ipsum dolor sit amet \t consectetur adipisicing elit." +
// "Quas assumenda laboriosam accusamus. Dolorem nemo error, dicta corrupti sit \t repellendus, iste blanditiis assumenda maiores dolorum, voluptatem quibusdam" 
// +"modi     \n    consequatur \t\t\t illo \n vitae!"
// console.log(longText)


// Examples 3

// var firstName = "Areej"
// var designation = "DevOps Engineer"
// var description = "My Name is " + firstName+", i am " + designation + " at Panacloud"
// console.log(description)

// ******************

//-----------------------------------------------------------------

// ********Template Literals**********


// Examples 1

// var a = `Template Literals`
// console.log(a)


// ******************
// Examples 2

// var longText = `Lorem ipsum dolor sit amet 
//  consectetur adipisicing elit.


// Quas assumenda laboriosam accusamus.
//  Dolorem nemo error, dicta corrupti sit   
//    repellendus, iste blanditiis assumenda  maiores
//     dolorum, voluptatem quibusdam
// modi         consequatur    illo
// vitae!`
// console.log(longText)


// ******************
// Examples 3

// var firstName = "Areej"
// var designation = "Engineer" 
// var description = `My Name is ${firstName}, i am ${designation} at Panacloud`
// console.log(description)



//---------------------------------------

// --------------SCOPE--------------

//  example : 1


// let Name = "Harry";

// function modifyUserName() {

//       let userName = "John";

//     };

// function showUserName() {
//         alert(userName);
//     };

// alert(userName); // display Harry

// modifyUserName();
// showUserName();// display John



// --------------------------

//  example : 2


// function createUserName() {
//     userName = "Harry";
// }

// function modifyUserName() {
//     if(userName)
//         userName = "John";
// };

// function showUserName() {
//     alert(userName);  
// }

// createUserName();
// showUserName(); // Harry 

// modifyUserName();
// showUserName(); // John 

//practice

// var userName = "";
// function ahm() {
//     if(userName){
//         userName = "John";
//         console.log(userName)
//     } 
//     else{
//         console.log('error')
//     }
// }

// ahm()
    
// --------------------------
//  example : 3


// function createUserName() {
//     var userName = "Harry";
    

// function showUserName() {
//     alert(userName);
// }

// createUserName();
// showUserName(); // throws error: userName is not defined



// --------------------------
//  example : 4


// var userName = "Harry";

// function ShowUserName()
// {
//     var userName = "John";

//     alert(userName); // "John"
// }

// ShowUserName();

// alert(userName); // Harry


// --------------------------
//  example : 5


// function NoBlockLevelScope(){
    
//     if (1 > 0)
//     {
//         var myVar = 22;

//     }

//     alert(myVar);
// }

// NoBlockLevelScope();


// --------------------------
//  example : 6


// var num = 100;

// function go(){

//  let age = 200;
//  var hair =  'black';

//  console.log(hair);

// }

// go();
// console.log(age);

// OUTPUT  200 
// OUTPUT  black 
// OUTPUT  100 
 

// --------------------------
//  example : 7


// if (true) {
//    // userName is in the global scope because of the 'var' keyword
//    var userName = 'Harry';
//    console.log(userName); // output 'Harry'
//    // age is in the local scope because of the 'let' keyword
//    var age = 20;
//    console.log(age); // output 20
//    // skills is in the local scope because of the 'const' keyword
//    var skills = 'HTML';
//    console.log(skills); // output 'JavaScript'
// }
// console.log(userName); // output 'Harry'
// console.log(age); // Uncaught ReferenceError: age is not defined
// console.log(skills); // Uncaught ReferenceError: skills is not defined


// --------------------------
