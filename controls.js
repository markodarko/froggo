var controller_keys = {
  ArrowLeft	:0,
  ArrowRight:0,
  ArrowUp 	:0,
  ArrowDown	:0
}

document.addEventListener('keydown',(e)=>{
  if(controller_keys[e.code] == undefined) return;
  controller_keys[e.code] = 1;
})

document.addEventListener('keyup',(e)=>{
  if(controller_keys[e.code] == undefined) return;
  controller_keys[e.code] = 0; 
})

var swipeControl = {
  swipeDir:	[0,0],
  coord:	{x0:null,y0:null},
  tapped: 0,
  endTouch:	{x:0,y:0},
  time:		null,
  press: 	function(e){
		  let c = swipeControl;
		  c.coord.x0 = e.touches[0].clientX;
		  c.coord.y0 = e.touches[0].clientY;
		  c.time = e.timeStamp;
		},
  release:	function(e){
		  let dist = 20;
		  let c = swipeControl; 
		  let x = e.changedTouches[0].clientX,
		      y = e.changedTouches[0].clientY,
		      t = e.timeStamp-c.time;
		  let dx = x-c.coord.x0;
		  let dy = y-c.coord.y0;
		  if (t<400){
			if (Math.abs(dx) < dist && Math.abs(dy) < dist) c.tapped = 1
		  	else if (dx >  dist) c.swipeDir = [1, 0];
			else if (dx < -dist) c.swipeDir = [-1, 0];
			else if (dy >  dist) c.swipeDir = [0, 1];
			else if (dy < -dist) c.swipeDir = [0,-1];
		  }  
		  c.endTouch.x = x/SCALE-C_OFFSET_X;
		  c.endTouch.y = y/SCALE-C_OFFSET_Y;
		}
}


window.addEventListener('touchstart', swipeControl.press)
window.addEventListener('touchend', swipeControl.release)
