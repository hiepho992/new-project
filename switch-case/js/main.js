function myfcs1(){
    let mon1 = parseInt(document.getElementById("inp1").value);

    switch (mon1) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("demo1").innerHTML = ("Tháng" + " " + mon1 + " " + "có 31 ngày");
            break;
        case 2:
            document.getElementById("demo1").innerHTML = ("Tháng" + " " + mon1 + " " + "có 28 hoặc 29 ngày");
            break
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("demo1").innerHTML = ("Tháng" + " " + mon1 + " " + "có 30 ngày");  
            break; 
        default:
        document.getElementById("demo1").innerHTML = ('không có tháng này');
    }
}