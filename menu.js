class StartFrog{
  constructor(){
	this.reset();
	this.sprite = new Sprite(SPRITES.frog,COLOR_SETS.frog);
	
	this.floatMax = 1;
	this.speed = 1;
	this.time = 0;
	this.w = this.h = GRID_SIZE;
  }
  draw(){
	this.sprite.draw(this.x,this.y+this.float)
  }
  update(){
	if (this.y > C_HEIGHT) this.dead = 1;
	if (this.start_pressed){
		this.y++;
		return;
	}
	if(collidePointCheck(swipeControl.endTouch,this)){
		this.start_pressed = 1 ;
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
	this.start_pressed = 0;
	this.dead = 0;
	this.dir = 1;
	this.float = 0;
	this.x = Math.floor(C_WIDTH/2-GRID_SIZE/2);
	this.y = Math.floor(C_HEIGHT/2-GRID_SIZE/2);
  }
}
