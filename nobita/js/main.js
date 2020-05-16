function moveleft(){
    let mv = document.getElementById("nobita").style;
    mv.left = parseInt(mv.left) - 10 + 'px';
}
function moveright(){
    let mv = document.getElementById("nobita").style;
    mv.left = parseInt(mv.left) + 10 + 'px';
}
function moveup(){
    let mv = document.getElementById("nobita").style;
    mv.top = parseInt(mv.top) - 10 + 'px';
}
function movedown(){
    let mv = document.getElementById("nobita").style;
    mv.top = parseInt(mv.top) + 10 + 'px';
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            moveleft();
            break;
        case 39:
            moveright();
            break;
        case 38:
            moveup();
            break;
        case 40:
            movedown();
            break;
    }    
}
function myfcs() {
    window.addEventListener('keydown', moveSelection)
}
