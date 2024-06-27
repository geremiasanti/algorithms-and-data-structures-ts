function binarySearch(haystack, needle) {
    var lowerBound = 0;
    var upperBound = haystack.length;
    do {
        var mid = Math.floor(lowerBound + (upperBound - lowerBound) / 2);
        var midValue = haystack[mid];
        if (needle == midValue) {
            return mid;
        }
        if (needle > midValue) {
            lowerBound = mid + 1;
        }
        else {
            upperBound = mid;
        }
    } while (lowerBound < upperBound);
    return -1;
}
var a = [3, 7, 10, 12, 13, 31, 49, 55, 69, 84, 99];
console.log(binarySearch(a, 12));
console.log(binarySearch(a, 31));
console.log(binarySearch(a, 44));
console.log(binarySearch(a, 99));
console.log(binarySearch(a, 3));
