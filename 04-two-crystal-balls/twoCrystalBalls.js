function twoCrystalBalls(breaks) {
    var inc = Math.floor(Math.sqrt(breaks.length));
    // at first big steps
    var i = inc;
    for (; i < breaks.length; i += inc) {
        // till it breaks
        if (breaks[i])
            break;
    }
    // go back to last safe floor
    i -= inc;
    // then single steps
    for (; i < breaks.length; i++) {
        // return first floor that breaks the ball
        if (breaks[i])
            return i;
    }
    // no floor high enough
    return -1;
}
var breaks8 = [
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
var breaks0 = [
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
var breaksNo = [
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
