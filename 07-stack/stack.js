var Stack = /** @class */ (function () {
    function Stack() {
        this.length = 0;
        this.head = undefined;
    }
    Stack.prototype.push = function (item) {
        var newNode = { value: item };
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    };
    Stack.prototype.pop = function () {
        if (!this.head)
            return undefined;
        this.length--;
        var retrieved = this.head;
        this.head = retrieved.next;
        return retrieved.value;
    };
    Stack.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    Stack.prototype.toString = function () {
        var out = "n: ".concat(this.length, " [");
        var notEmpty = false;
        var curr = this.head;
        while (curr) {
            notEmpty = true;
            out += "".concat(curr.value, ", ");
            curr = curr.next;
        }
        if (notEmpty)
            out = out.slice(0, -2);
        out += ']';
        return out;
    };
    return Stack;
}());
var stack = new Stack();
console.log(stack.toString());
stack.push(16);
console.log(stack.toString());
stack.push(69);
console.log(stack.toString());
stack.push(420);
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
stack.push(69420);
console.log(stack.toString());
stack.push(42069);
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
