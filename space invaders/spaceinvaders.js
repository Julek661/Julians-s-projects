import EnemyController from "./EnemyController.js";
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "images/galaxy.png";

const enemyController = new EnemyController(canvas)


function game(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    enemyController.draw(ctx);


}
setInterval(game, 1000 / 60);




// let circle = document.querySelector('.circle');
// let moveShip = 10;

// window.addEventListener('load', () => {
//     circle.style.position = 'relative';
//     circle.style.left = 100;
//     circle.style.top = 100;
// })
// window.addEventListener('keyup', (e) => {
//     switch (e.key) {
//         case 'ArrowLeft':
//             circle.style.left = parseInt(circle.style.left) - moveShip + 'px';
//             break;
//         case 'ArrowRight':
//             circle.style.left = parseInt(circle.style.left) + moveShip + 'px';
//             break;



//     }

// })