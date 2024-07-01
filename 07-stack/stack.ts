type SNode<T> = {
    value: T,
    next?: SNode<T>,
}

class Stack<T> {
    private length: number;
    private head?: SNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const newNode = {value: item} as SNode<T>;

        this.length++;

        if(!this.head) {
            this.head = newNode;
            return
        }

        newNode.next = this.head; 
        this.head = newNode;
    }

    pop(): T | undefined {
        if(!this.head)
            return undefined;

        this.length--;    

        const retrieved = this.head;
        this.head = retrieved.next;

        return retrieved.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    toString(): string {
        let out = `n: ${this.length} [`;

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

let stack = new Stack<number>();
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
