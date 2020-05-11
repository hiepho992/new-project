function myfs(){
    let user = document.getElementById("User").value;
    let pass = document.getElementById("pass").value;
    if (user == "Admin"){
        if(pass == "TheMaster"){
            alert("Welcome");
        }else{
            if (pass == ""){
                alert("Cancel");
            }else{
                alert("Wrong password");
            }
        }
    }else{
        if(user == ""){
            alert("Cancel");
        }else{
            alert("I don't know you");
        }
    }
}