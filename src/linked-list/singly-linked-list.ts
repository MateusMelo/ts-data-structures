export class LinkedListNode<T> {
    public next: LinkedListNode<T> | null = null;
    constructor(public data: T) {}
}

interface ILinkedList<T> {
    contains(node: LinkedListNode<T>): boolean;
    peek(): LinkedListNode<T> | null;
    last(): LinkedListNode<T> | null;
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

    /**
     * Returns true if the list contains the specified node
     * @param node {LinkedListNode<T>} The node whose presence in this list is to be tested
     * @returns {boolean}
     */
    public contains(node: LinkedListNode<T>): boolean {
        if (!this.head) return false;
        let curr: LinkedListNode<T> | null = this.head;
        while (curr !== null) {
            if (curr.data === node.data) 
                return true

            curr = curr.next;
        }

        return false;
    }

    /**
     * Retrieves the head of the list
     * @returns {LinkedListNode<T> | null} The head of the list
     */
    public peek(): LinkedListNode<T> | null {
        return this.head;
    }

    /**
     * Retrieves the tail of the list
     * @returns {LinkedListNode<T> | null} The tail of the list
     */
    public last(): LinkedListNode<T> | null {
        return this.get(this.len() - 1);
    }

    /**
     * Removes and returns the last element of the list
     * @returns {LinkedListNode<T> | null} The node at the end of the list
     */
    public pop(): LinkedListNode<T> | null {
        if (!this.head) return null;

        let curr: LinkedListNode<T> | null = this.head;
        let prev: LinkedListNode<T> | null = null;
        while (curr !== null) {
            prev = curr;
            curr = curr.next;
        }

        if (prev) {
            prev.next = null;
        }

        this.length--;

        return prev;
    }

     /**
     * Removes and returns the first element of the list
     * @returns {LinkedListNode<T> | null} The node at the front of the list
     */
    public shift(): LinkedListNode<T> | null {
        if (!this.head) return null;
        const head = this.head;
        this.head = head.next;

        this.length--;

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

    /**
     * Adds the specified node at the end of the list
     * @param {LinkedListNode<T>} node The node instance to be added
     */
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
        if (index === 0) {
            node.next = this.head.next;
            this.head = node;
            return node;
        }

        let curr: LinkedListNode<T> | null = this.head;
        let prev = null;
        let i = 0;
        while (curr !== null) {
            if (i === index && prev) {
                node.next = curr.next;
                prev.next = node;
                return node;
            }
            prev = curr;
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
     * Removes the node at the specified index
     * @param {number} index The index of node to be removed
     */
    public remove(index: number): LinkedListNode<T> | null {
        if (!this.head) return null;
        if (index < 0 || index > this.length) return null;
        if (index === 0) {
            const tmp = this.head;
            this.head = this.head.next;
            this.length--;
            return tmp;
        }

        let curr: LinkedListNode<T> | null = this.head;
        let prev = null;
        let i = 0;
        while (curr !== null) {
            if (i === index && prev) {
                prev.next = curr.next;
                this.length--;
                return curr;
            }
            prev = curr;
            curr = curr.next;
            i++;
        }
        return null;
    }

    /**
     * Clear all nodes from the list
     */
    public clear(): void {
        this.head = null;
        this.length = 0;
    }

    /**
     * Retrieves the current list length
     */
    public len(): number {
        return this.length;
    }

    /**
     * Returns an iterator over the nodes of the list
     */
    public *getIterator(): Generator<T, void, unknown> {
        let curr = this.head;
        while (curr !== null) {
            yield curr.data;
            curr = curr.next;
        }
    }

    /**
     * Retrieves the last node of the list
     */
    private getLast(node: LinkedListNode<T>): LinkedListNode<T> {
        return node.next ? this.getLast(node.next) : node;
    }
}
