class SoundFX{
  constructor(src){
	this.sound = document.createElement('audio');
	this.sound.src = src;
	this.sound.preload = "auto";
 	this.sound.controls =  "none";
 	this.sound.style.display = "none";
  }
  play(){
	this.sound.currentTime = 0;
	this.sound.play();
  }
}

var SOUNDS = (function(){

var s = {

jump0	:'jump1',
jump1	:'jump2',
bounce	:'bounce',
explode	:'explode',
teleport:'Randomize',
tile0	:'jump8',
tile1	:'jump9'	
}

for (let n in s){
s[n] = new SoundFX('sounds/' + s[n] + '.wav')	
}

return s
})()

 