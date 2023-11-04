export class LinkedListNode<T> {
    public next: LinkedListNode<T> | null = null;
    constructor(public data: T) {}
}

interface ILinkedList<T> {
    addFirst(node: LinkedListNode<T>): LinkedListNode<T>;
    addLast(node: LinkedListNode<T>): LinkedListNode<T>;
    clear(): void;
    contains(node: LinkedListNode<T>): boolean;
    peek(): LinkedListNode<T> | null;
    pop(): LinkedListNode<T> | null;
    shift(): LinkedListNode<T> | null;
    unshift(node: LinkedListNode<T> | null): void;
    push(node: LinkedListNode<T> | null): void;
    set(index: number, node: LinkedListNode<T>): LinkedListNode<T>;
    get(index: number): LinkedListNode<T>;
    remove(index: number): LinkedListNode<T>;
    size(): number;
}

export class SinglyLinkedList<T> implements ILinkedList<T> {
    private head: LinkedListNode<T> | null = null;
    constructor() {}

    public addFirst(n: LinkedListNode<T>): LinkedListNode<T> {
        if (!this.head) {
            this.head = n;
        } else {
            n.next = this.head;
            this.head = n;
        }

        return n;
    }

    public addLast(n: LinkedListNode<T>): LinkedListNode<T> {
        if (!this.head) {
            this.head = n;
        } else {
            const last = this.getLast(this.head);
            last.next = n;
        }
        return n;
    }

    public clear() {
        this.head = null;
    }

    public contains(n: LinkedListNode<T>): boolean {
        if (!this.head) return false;
        let curr: LinkedListNode<T> | null = this.head;
        while (curr !== null) {
            if (curr.data === n.data) 
                return true

            curr = curr.next;
        }

        return false;
    }

    public peek(): LinkedListNode<T> | null {
        return this.head;
    }

    public pop(): LinkedListNode<T> | null {
        if (!this.head) return null;

        let curr: LinkedListNode<T> | null = this.head;
        let prev: LinkedListNode<T> | null = null;
        while (curr.next !== null) {
            prev = curr;
            curr = curr.next;
        }

        if (prev) {
            prev.next = null;
        }

        return prev;
    }

    public shift(): LinkedListNode<T> | null {
        if (!this.head) return null;
        const head = this.head;
        this.head = head.next;

        return head;
    }

    public search(value: T): LinkedListNode<T> | null {
        let curr: LinkedListNode<T> | null = this.head;
        let n: LinkedListNode<T> | null = null;
        while (curr !== null) {
            if (curr.data === value) {
                n = curr;
            }
            curr = curr.next;
        }
        return n;
    }

    public *getIterator(): Generator<T, void, unknown> {
        let curr = this.head;
        while (curr !== null) {
            yield curr.data;
            curr = curr.next;
        }
    }

    private getLast(n: LinkedListNode<T>): LinkedListNode<T> {
        return n.next ? this.getLast(n.next) : n;
    }
}
