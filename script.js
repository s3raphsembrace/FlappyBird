let birdY, fallVelocity, gravity
let pipeX, pipeWidth, pipeVelocity
let score

function setup() {
  score = 0
  createCanvas(800, 600)
  birdY = 300
  fallVelocity = -5
  gravity = 0.3
  pipeX = width
  pipeWidth = 75
  pipeVelocity = -5
}

function draw() {
  background(220)
  birdY += fallVelocity
  fallVelocity += gravity
  text(score, 300,10,1000)
  pipeX += pipeVelocity

  if (pipeX <= -pipeWidth) {
    pipeX = width
    score++
  }

  if (collideRectCircle(pipeX, 0, pipeWidth, 200, 200, birdY, 50) || collideRectCircle(pipeX, 400, pipeWidth, 400, 200, birdY, 50)) {
    console.log("collision")
    restart()
  }
  
  ellipse(200, birdY, 50)
  rect(pipeX, 0, pipeWidth, 200)
  rect(pipeX, 400, pipeWidth, 300)
}

function keyPressed() {
  fallVelocity = -6
}

function restart() {
  score = 0
  createCanvas(800, 600)
  birdY = 300
  fallVelocity = -5
  gravity = 0.3
  pipeX = width
  pipeWidth = 75
  pipeVelocity = -5
}
