import { IQueue } from "./queue.interface";

class Queue<T> implements IQueue<T> {
    private head: number = -1;
    private rear: number = -1;
    private data: Array<T> = [];
    private capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }
    
    public push(value: T): void {
        if (this.isEmpty()) this.head++;
        this.data[++this.rear] = value;
    }

    public pop(): T {
        const poped = this.data[this.head];
        this.head++;
        return poped;
    }

    public peek(): T {
        return this.data[this.head];
    }

    public isEmpty(): boolean {
        return this.head === -1 && this.rear === -1;
    }
}

const q = new Queue<number>(10);
q.push(1);
q.push(2);
q.push(3);
console.log(q);
