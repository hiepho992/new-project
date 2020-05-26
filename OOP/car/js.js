let ctx = document.getElementById("mycanvas").getContext('2d');
let img = document.getElementById("car");
function Mycar(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
}
let car = new Mycar(50, 50, 30, 30, 2);
let car1 = new Mycar(50, 50, 30, 30, 2);
function drawcar() {
    ctx.drawImage(img, car.x, car.y, car.width, car.height);
}
drawcar();


function update() {
    ctx.clearRect(0, 0, 400, 400);
    drawcar();
    requestAnimationFrame(update);
    if ((car.x + car.width) >= mycanvas.width ||  car.x < 0){
        alert('Game Over');  
        window.onload();        
    }else if ((car.y + car.height >= mycanvas.height || car.y < 0)){
        alert('Game Over!');
        window.onload();
    }   
    
}



function moveRight() {
    car.x += car.speed;
    document.getElementById("car").src = "tank.png";

}
function moveLeft() {
    car.x -= car.speed;
    document.getElementById("car").src = "tank1.png";
}
function moveDown() {
    car.y += car.speed;
    document.getElementById("car").src = "tank3.png";
}
function moveUp() {
    car.y -= car.speed;
    document.getElementById("car").src = "tank2.png";
}

function speedX(){
    car.speed = car.speed*2;
}

  
function keyDown(e) {
    console.log("keyDown -> e", e)
    switch (e.key) {
        case "ArrowRight":
            moveRight();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowDown":
            moveDown();
            break;
        case "ArrowUp":
            moveUp();
            break;
        case "Control":
            speedX();
            break;

    }
}
document.addEventListener("keydown", keyDown);
update();
