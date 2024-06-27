function sumCharCodes(n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += n.charCodeAt(i);
    }
    return sum;
}
console.log(sumCharCodes('Geremia'));
