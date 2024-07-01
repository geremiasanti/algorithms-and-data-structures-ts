type QNode<T> = {
    value: T,
    next?: QNode<T>,
}

class Queue<T> {
    public length: number;
    public head?: QNode<T>;
    public tail?: QNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const newNode = {value: item} as QNode<T>;

        this.length++;

        if(!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    deque(): T | undefined {
        if(!this.head)
            return undefined;

        this.length--;

        const retrieved = this.head
        this.head = retrieved.next;
        if(this.length == 0) {
            this.tail = undefined;
        }

        return retrieved.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    toString(): string {
        let out = '[';

        let notEmpty = false;
        let curr = this.head
        while(curr) {
            notEmpty = true;
            out += `${curr.value}, `;
            curr = curr.next;
        }

        if(notEmpty)
            out = out.slice(0, -2);

        out += ']';

        return out;
    }
}

let queue = new Queue<number>();
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

