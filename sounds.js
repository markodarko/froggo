var activated_soundFX = true;

class SoundFX{
  constructor(src,loop = 0){
	this.sound = document.createElement('audio');
	this.sound.src = src;
	this.sound.preload = "auto";
 	this.sound.controls =  "none";
 	this.sound.style.display = "none";
	this.sound.loop = loop;
  }
  play(){
	if(!activated_soundFX)return
	this.sound.currentTime = 0;
	this.sound.play();
  }
}

var SOUNDS = (function(){

var s = {

//jump0	:'jump1',
//jump1	:'jump2',
bounce	:'bounce',
explode	:'explode',
teleport:'Randomize',
tile0	:'j3',
tile1	:'j4'
}

for (let n in s){
s[n] = new SoundFX('sounds/' + s[n] + '.wav')	
}
s.music = new SoundFX('sounds/music.mp3',1)

return s
})()

 