let array = [];

function addproduct() {
    let str = document.getElementById("product").value;
    if (str === "") {
        return;
    }
    array.push(str);
    table();
    document.getElementById("product").value = '';

}
function table() {
    let count = 0;
    let tbl = "<table>";
    for (i = 0; i < array.length; i++) {
        tbl += "<tr>" + "<td id=letter>" + array[i] + "</td>"
            + "<td class=td1>" + "<button class=btn onclick=edit(" + i + ")>" + "Edit" + "</button>" + "</td>"
            + "<td class=td1>" + "<button class=btn onclick=Delete(" + i + ")>" + "Delete" + "</button>" + "</td>"
            + "</tr>";
        count += 1;
    }
    tbl += "</table>";

    console.log(tbl);
    console.log(count);
    document.getElementById("table").innerHTML = tbl;
    document.getElementById("nbproduct").innerHTML = count + " product";
}
function edit(i) {
    let a = prompt('Nhập từ muốn sửa');
    if (a === "" || a === null) {
        return;
    } else {
        array[i] = a;
    }
    table();
}
function Delete(i) {
    let y = confirm('Are you sure to delete!');
    if (y === true) {
        array.splice(i, 1);
        table();
    } else {
        return "You pressed Cancel!";
    }
}

