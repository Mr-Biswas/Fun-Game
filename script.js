
// document.onkeydown = function (e) {
//     console.log("Key code is: ", e.keyCode)
//     if (e.keyCode == 38) {
//         dino = document.querySelector(' .dino');
//         dino.classList.add('animateDino');
//         setTimeout(() => {
//             dino.classList.remove('animateDino')
//         }, 700);
//     }
// };

score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("Key pressed is: ", e.key);

    // Check for Right Arrow or Up Arrow
    if (e.key === "ArrowUp") {
        const dino = document.querySelector('.dino');
        
        // Add the animation class
        dino.classList.add('animateDino');

        // Remove the animation class after 700ms
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if (e.key === "ArrowRight") {
        const dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX + 111) + "px";
    }
    if (e.key === "ArrowLeft") {
        const dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 111) + "px";
    }
};

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 50 && offsetY < 52) {
        gameOver.innerHTML= "Game Over !!Reload to Play Again";
        obstacle.classList.remove('obstacleAni');
    }
    else if (offsetX<50 && cross) {
        
        score += 10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
        // aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        // newDur = aniDur - 0.1;
        // obstacle.style.animationDuration = newDur + 's';
    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score:" + score;
}