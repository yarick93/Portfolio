let ballMove = false
let ballLeft = "55%"
setInterval(() => {
    ballLeft = ballMove ? "55%" : "54.5%"
    ballMove = !ballMove
    console.log(ballLeft, ballMove)
    Ball.style.left = ballLeft
}, 2000);