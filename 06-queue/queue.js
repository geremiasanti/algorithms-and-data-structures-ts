var Queue = /** @class */ (function () {
    function Queue() {
        this.length = 0;
        this.head = this.tail = undefined;
    }
    Queue.prototype.enqueue = function (item) {
        var newNode = { value: item };
        this.length++;
        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    };
    Queue.prototype.deque = function () {
        if (!this.head)
            return undefined;
        this.length--;
        var retrieved = this.head;
        this.head = retrieved.next;
        if (this.length == 0) {
            this.tail = undefined;
        }
        return retrieved.value;
    };
    Queue.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    Queue.prototype.toString = function () {
        var out = '[';
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
    return Queue;
}());
var queue = new Queue();
console.log(queue.toString());
queue.enqueue(16);
queue.enqueue(69);
queue.enqueue(420);
console.log(queue.toString());
console.log(queue.deque());
console.log(queue.toString());
console.log(queue.deque());
console.log(queue.toString());
console.log(queue.deque());
console.log(queue.toString());
console.log(queue.deque());
console.log(queue.toString());
queue.enqueue(69420);
console.log(queue.toString());
queue.enqueue(42069);
console.log(queue.toString());
console.log(queue.deque());
console.log(queue.toString());
