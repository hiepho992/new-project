function Addition(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let t = num1 + num2;
    document.getElementById("demo").innerHTML = t;
}
function Subtraction(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let t = num1 - num2;
    document.getElementById("demo").innerHTML = t;
}
function Multiplication(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let t = num1 * num2;
    document.getElementById("demo").innerHTML = t;
}
function Division(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let t = num1 / num2;
    document.getElementById("demo").innerHTML = t;
}s