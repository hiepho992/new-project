function myfcs(){
    let Weight = document.getElementById("Weight").value;
    let Height = document.getElementById("Height").value;
    let bmi = Weight / Height**2;
    if (bmi < 18.5){
        alert("Underweight");
    }else if (bmi < 25 ) { 
            alert("Normal")
        }
        else if (bmi < 30) {
            alert("Overweight")
        }
            else {
                alert("Obese")
            }    
}