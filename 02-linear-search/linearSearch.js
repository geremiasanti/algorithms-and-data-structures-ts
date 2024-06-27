function linearSearch(haystack, needle) {
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle) {
            return true;
        }
    }
    return false;
}
var a = [10, 12, 13, 7, 99];
console.log(linearSearch(a, 12));
console.log(linearSearch(a, 55));
