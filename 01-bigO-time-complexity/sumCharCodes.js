function sumCharCodes(n) {
    var sum = 0;
    // loops makes it O(N)
    // one iteration per char
    for (var i = 0; i < n.length; i++) {
        sum += n.charCodeAt(i);
    }
    return sum;
}
function sumCharCodesTwice(n) {
    var sum = 0;
    // first loops makes it O(N)
    // one iteration per char
    for (var i = 0; i < n.length; i++) {
        sum += n.charCodeAt(i);
    }
    // second loop should make it 2N, two iteration per char 
    // but constants are dropped, so it's still O(N) 
    // this is because with bigger inputs constants are neglectable
    //
    // the question is "How fast does time grow relative to input?" 
    // not "How much time does it need for execution?"
    //
    // so O(100N) is still faster than O(2N), 
    // even if, practically, with a small input size it will be slower 
    for (var i = 0; i < n.length; i++) {
        sum += n.charCodeAt(i);
    }
    return sum;
}
function sumCharCodesEarlyExit(n) {
    var sum = 0;
    // loops makes it O(N)
    // one iteration per char
    for (var i = 0; i < n.length; i++) {
        var charcode = n.charCodeAt(i);
        // exit early if char == 'E'
        // on average it should take less than sumCharCodes
        // but this is still O(N) 
        //
        // because often it is only considered the worst case 
        // (not the best or average case)
        if (charcode == 69) {
            return sum;
        }
        sum += charcode;
    }
    return sum;
}
function sumCharCodesQuadratic(n) {
    var sum = 0;
    // the inner loop makes it O(N^2)
    // because for each char we have to iterate every char
    for (var i = 0; i < n.length; i++) {
        for (var j = 0; j < n.length; j++) {
            sum += n.charCodeAt(j);
        }
    }
    return sum;
}
function sumCharCodesCubic(n) {
    var sum = 0;
    // the triple inner loop makes it O(N^3)
    // because for each char we have to iterate every char
    // and for each of those we iterate every char again
    for (var i = 0; i < n.length; i++) {
        for (var j = 0; j < n.length; j++) {
            for (var k = 0; k < n.length; k++) {
                sum += n.charCodeAt(k);
            }
        }
    }
    return sum;
}
console.log(sumCharCodes('Geremia'));
console.log(sumCharCodesTwice('Geremia'));
console.log(sumCharCodesEarlyExit('GerEmia'));
console.log(sumCharCodesQuadratic('Geremia'));
console.log(sumCharCodesCubic('Geremia'));
