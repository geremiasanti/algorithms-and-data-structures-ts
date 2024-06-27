function sumCharCodes(n: String) {
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

console.log(sumCharCodes('Geremia'));
