function twoCrystalBalls(breaks: boolean[]): number {
    let inc = Math.floor(Math.sqrt(breaks.length));

    // at first big steps
    let i = inc;
    for(; i < breaks.length; i += inc) {
	// till it breaks
	if(breaks[i])
	    break;
    }

    // go back to last safe floor
    i -= inc

    // then single steps
    for(; i < breaks.length; i++) {
	// return first floor that breaks the ball
	if(breaks[i])
	    return i;
    }

    // no floor high enough
    return -1
}


let breaks8 = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
];
console.log(twoCrystalBalls(breaks8));

let breaks0 = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
];
console.log(twoCrystalBalls(breaks0));

let breaksNo = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
];
console.log(twoCrystalBalls(breaksNo));
