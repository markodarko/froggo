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

jump1	:'jump6',
jump2	:'jump7',
bounce	:'bounce',
explode	:'explode',
teleport:'Randomize'

}

for (let n in s){
s[n] = new SoundFX('sounds/' + s[n] + '.wav')	
}

return s
})()

 