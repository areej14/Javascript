var num1 = Number( prompt("Num1 is:"));
var num2 = Number (prompt("Num2 is:"));
var sign = prompt("Enter either + , - , * , / , %  Sign is:");
switch(sign)
{
    case "+":
    var res = num1 + num2;
    alert(num1 + sign + num2 + "=" + res )
    break
    case "-":
    var res = num1 - num2;
    alert(num1 + sign + num2 + "=" + res )
    break
    case "*":
    var res = num1 * num2;
    alert(num1 + sign + num2 + "=" + res )
    break
    case "/":
    var res = num1 / num2;
    alert(num1 + sign + num2 + "=" + res )
    break
    case "%":
    var res = num1 % num2;
    alert(num1 + sign + num2 + "=" + res )
    break
    default:
    alert("Invalid Sign");

}