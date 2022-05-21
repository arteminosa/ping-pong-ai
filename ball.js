class Ball{


	constructor() {
		this.r = 17;
		this.reset();
	}
	
	
	update(player1ScoreAI, player2ScoreAI) {
		if (this.y < this.r || this.y > height - this.r) {
			this.ySpeed = -this.ySpeed;
		} 
	
        if (this.x < this.r ) {
            player2ScoreAI.increment();
              this.reset();
          } else if (this.x > width + this.r) {
            player1ScoreAI.increment();
            this.reset();
          }
		
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	
	}
	
	reset() {
		this.x = width/2;
		this.y = height/2;
		
		this.xSpeed = random(8, 16);
		
		let isLeft = random(1) > .5;
		if (isLeft) {
			this.xSpeed = -this.xSpeed;
		} 
		
		this.ySpeed = random(10, 14);
	}
	
	display() {
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}
	
	hasHitPlayer1(player1) {
        if (this.x - this.r <= player1.x + player1.width && this.x > player1.x) {
          if (this.isSameHeight(player1)) {
            this.xSpeed = -this.xSpeed;
          }
        }
      }
          
      hasHitPlayer2(player2) {
        if (this.x + this.r >= player2.x && this.x <= player2.x + player2.width) {
          if (this.isSameHeight(player2)) {
            this.xSpeed = -this.xSpeed;
          }
        }
      }
              
      isSameHeight(player) {
        return this.y >= player.y && this.y <= player.y + player.height
      }
}