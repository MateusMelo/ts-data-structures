export class LinkedListNode<T> {
    public next: LinkedListNode<T> | null = null;
    constructor(public data: T) {}
}

interface ILinkedList<T> {
    contains(node: LinkedListNode<T>): boolean;
    peek(): LinkedListNode<T> | null;
    pop(): LinkedListNode<T> | null;
    shift(): LinkedListNode<T> | null;
    unshift(node: LinkedListNode<T> | null): void;
    push(node: LinkedListNode<T> | null): void;
    set(index: number, node: LinkedListNode<T>): LinkedListNode<T> | null;
    get(index: number): LinkedListNode<T> | null;
    remove(index: number): LinkedListNode<T> | null;
    clear(): void;
    len(): number;
}

export class SinglyLinkedList<T> implements ILinkedList<T> {
    private head: LinkedListNode<T> | null = null;
    private length: number = 0;
    constructor() {}

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

    /**
     * Adds the specified node to the beginning of the list
     * @param {LinkedListNode<T>} node The node instance to be added
     */
    public unshift(node: LinkedListNode<T>): void {
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    public push(node: LinkedListNode<T>): LinkedListNode<T> {
        if (!this.head) {
            this.head = node;
        } else {
            const last = this.getLast(this.head);
            last.next = node;
        }
        this.length++;
        return node;
    }

    /**
     * Replaces the node at the specified index with the specified node
     * @param {number} index The index of node to be replaced
     * @param {LinkedListNode<T>} node The node instance to be added
     */
    public set(index: number, node: LinkedListNode<T>): LinkedListNode<T> | null {
        if (!this.head) return null;
        if (index < 0 || index > this.length) return null;

        let curr: LinkedListNode<T> | null = this.head;
        let i = 0;
        while (curr !== null) {
            if (i === index) {
                node.next = curr.next;
                curr = node;
                return node;
            }
            curr = curr.next;
            i++;
        }
        return null;
    }

    /**
     * Get the node at the specified index
     * @param {number} index The index of node to be returned
     */
    public get(index: number): LinkedListNode<T> | null {
        if (!this.head) return null;
        if (index < 0 || index > this.length) return null;

        let curr: LinkedListNode<T> | null = this.head;
        let i = 0;
        while (curr !== null) {
            if (i === index) return curr;
            curr = curr.next;
            i++;
        }
        return null;
    }

    /**
     * Get the node at the specified index
     * @param {number} index The index of node to be returned
     */
    public remove(index: number): LinkedListNode<T> | null {
        if (!this.head) return null;
        if (index < 0 || index > this.length) return null;

        let curr: LinkedListNode<T> | null = this.head;
        let prev = null;
        let i = 0;
        while (curr !== null) {
            if (i === index) {
                curr = curr.next;
                return curr;
            }
            curr = curr.next;
            i++;
        }
        return null;
    }

    public clear() {
        this.head = null;
    }

    public len(): number {
        return this.length;
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
