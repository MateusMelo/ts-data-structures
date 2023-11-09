interface IStack<T> {
    push(value: T): void;
    pop(value: T): T;
    peek(value: T): T;
}

type Data<T> = Record<string, T>;

class Stack<T> implements IStack<T> {
    private data: Data<T> = {}
    private index: number = -1;
    private readonly capacity: number = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    public push(value: T): void {
        if (this.isFull()) throw new Error("Stack Overflow");
        this.data[++this.index] = value;
    }

    public pop(): T {
        if (this.index < 0) throw new Error("Stack Underflow");
        const last = this.data[this.index];
        delete this.data[this.index];
        this.index--;
        return last;
    }
    
    public peek(): T {
        return this.data[this.index];
    }

    private isFull(): boolean {
        return this.index >= (this.capacity - 1);
    }
}