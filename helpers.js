function randomINT(num){
	return Math.floor(Math.random()*(num+1))
}
function cycleArray(array){
	array.push(array.shift())
}

function toZero(number, decay) {
    const sign = Math.sign(number);
    number = Math.abs(number);
    number = Math.max(number - decay, 0);
    return number * sign;
  }