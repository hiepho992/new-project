
function myfs(){
    let Amount = document.getElementById("Amount").value;
    let FromCurrency = document.getElementById("FromCurrency").value;
    let ToCurrency = document.getElementById("ToCurrency").value;
    const RATING = 23000;
    let t 
    if(FromCurrency == "VND"){
        if (ToCurrency == "USD"){
            t = Amount * RATING;
        }else{ t = Amount;}
    }
    else{ if(ToCurrency == "VND"){
        t = Amount / RATING;
        }else{t = Amount;}
    }
    if(FromCurrency == "USD"){
        if (ToCurrency == "VND"){
            t = Amount * RATING;
        }else{ t = Amount;}
    }    
    document.getElementById("demo").innerHTML = "Số tiền chuyển đổi là" +" " + t;    
}
