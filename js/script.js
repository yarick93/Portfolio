new Accordion(".accordion-container")
let ballMove = false
let ballLeft = "55%"
setInterval(() => {
    ballLeft = ballMove ? "55%" : "54.5%"
    ballMove = !ballMove
    Ball.style.left = ballLeft
}, 2000);