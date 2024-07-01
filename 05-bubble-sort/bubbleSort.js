function bubbleSort(a) {
    // start with the whole array and shrink the unordered slice every 
    // iteration
    // break condition "n == 1" because 1 element slice is always ordered 
    for (var n = a.length; n > 1; n--) {
        // iterating over the unordered slice of the array (0..n-1)
        var arrayOrdered = true;
        for (var i = 0; i < n - 1; i++) {
            if (a[i] > a[i + 1]) {
                swap(a, i, i + 1);
                arrayOrdered = false;
            }
        }
        // if no swap in the remaining part it is ordered
        if (arrayOrdered)
            break;
    }
}
function swap(a, i0, i1) {
    var temp = a[i0];
    a[i0] = a[i1];
    a[i1] = temp;
}
var b = [];
console.log(b);
bubbleSort(b);
console.log(b);
var c = [777];
console.log(c);
bubbleSort(c);
console.log(c);
var a = [777, 9, 7, 32, 12, 13, 799, 49, 23, 78, 8, 8];
console.log(a);
bubbleSort(a);
console.log(a);
var d = [7, 6, 5, 4, 3, 2, 1, 0];
console.log(d);
bubbleSort(d);
console.log(d);
