class StartFrog{
  constructor(){
	this.reset();
	this.w = this.h = GRID_SIZE*2;
	this.offsetX = Math.floor(this.w/4)
	this.offsetY = Math.floor(this.h/4)
	this.sprite = new Sprite(SPRITES.frogR,COLOR_SETS.frog);
	this.floatMax = 1;
	
  }
  draw(){
	//drawBox(this.x,this.y,this.w,this.h,'red')
	this.sprite.draw(this.x+this.offsetX,this.y+this.offsetY + this.float)
  }
  update(){
	if (this.y > C_HEIGHT) this.dead = 1;
	if (this.start_pressed){
		this.y += Math.floor(this.speed);
		this.speed = Math.min(this.speed+.2, 3)
		return;
	}
	else if(collidePointCheck(swipeControl.endTouch,this)){
		this.start_pressed = 1 ;
		this.speed = -1.5;
		GAME.BG.warp();
	}
	
	this.time++;
	if (this.time < 15) return;
	this.time = 0;
	this.float += this.dir * this.speed;
	if (Math.abs(this.float) > this.floatMax){
		this.dir *=-1;
	}
  }
  reset(){
	this.speed = 1;
	this.time = 0;
	this.start_pressed = 0;
	this.dead = 0;
	this.dir = 1;
	this.float = 0;
	this.x = Math.floor(C_WIDTH/2-GRID_SIZE);
	this.y = Math.floor(C_HEIGHT/2-GRID_SIZE);
  }
}
