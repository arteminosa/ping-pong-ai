let player1AI;
let player2AI;
let ball;
let player1ScoreAI;
let player2ScoreAI;

function setup() {
  createCanvas(1920, 960);
  player1AI = new Paddle(26);
  player2AI = new Paddle(width - 56);
  ball = new Ball();
  player1ScoreAI = new Score(width / 2 - 80);
  player2ScoreAI = new Score(width / 2 + 80);
}

function draw() {
  background(40, 0, 13);
  player1AI.display();
  player2AI.display();

  player1AI.update();
  player2AI.update();
  processPlayer1AI();
  processPlayer2AI();

function processPlayer1AI() {
  let middleOfPaddle1 = player1AI.y + player1AI.height/2;

//player1
  if(middleOfPaddle1 > ball.y) {
    player1AI.isUp = true;
    player1AI.isDown = false;
  }else{
    player1AI.isDown = true;
    player1AI.isUp = false;
  }
}

function processPlayer2AI() {
  let middleOfPaddle2 = player2AI.y + player2AI.height/2;

//player2
  if(middleOfPaddle2 > ball.y) {
    player2AI.isUp = true;
    player2AI.isDown = false;
  }else{
    player2AI.isDown = true;
    player2AI.isUp = false;
  }
}

  if (player1AI.isUp) {
    player1AI.up();
  } else if (player1AI.isDown) {
    player1AI.down();
  }

  if (player2AI.isUp) {
    player2AI.up();
  } else if (player2AI.isDown) {
    player2AI.down();
  }

  ball.update(player1ScoreAI, player2ScoreAI);
	ball.display();

  ball.hasHitPlayer1(player1AI); 
  ball.hasHitPlayer2(player2AI);

  stroke(166, 75, 199);
  line(width/2, 0, width/2, height);

  player1ScoreAI.display();
  player2ScoreAI.display();
}


function keyPressed() {
	if (keyCode == UP_ARROW) {
		player2AI.isUp = true;
	} else if (keyCode == DOWN_ARROW) {
		player2AI.isDown = true;
	}
  if (keyCode == 87) {
		player1AI.isUp = true;
	} else if (keyCode == 83) {
		player1AI.isDown = true;
	}
}

function keyReleased() {
	if (keyCode == UP_ARROW) {
		player2AI.isUp = false;
	} else if (keyCode == DOWN_ARROW) {
		player2AI.isDown = false;
	}
  if (keyCode == 87) {
		player1AI.isUp = false;
	} else if (keyCode == 83) {
		player1AI.isDown = false;
	}
}