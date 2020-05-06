function myfunction(){
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Kết quả:" + " " + (x + y);
}