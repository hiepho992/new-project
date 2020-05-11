let y = +prompt('Nhập year');
    if (y % 4 ==0){
        if (y % 100 == 0){
            if (y % 400 == 0){
            alert('year là năm nhuận');
            }else{
                alert('year không là năm nhuận');
            }
        }else{
            alert('year là năm nhuận');
        }
    }else{
        alert('year không là năm nhuận');
    }
        
    




 
