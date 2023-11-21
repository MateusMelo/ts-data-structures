import { IQueue } from "./queue.interface";

export class Queue<T> implements IQueue<T> {
    private data: Array<T> = [];

    constructor() {}
    
    public push(value: T): void {
        this.data.push(value);
    }

    public pop(): T | null {
        if (this.isEmpty())
            return null;
        const frame = this.data.shift();
        if (!frame)
            return null;
        return frame
    }

    public peek(): T | null {
        if (this.isEmpty())
            return null;
        return this.data[0];
    }

    public isEmpty(): boolean {
        return this.data.length === 0;
    }
}

const q = new Queue<number>();
// q.push(1);
// q.push(2);
// q.push(3);
// console.log(q.pop());
// console.log(q.pop());
// console.log(q.pop());
// console.log(q.peek());
