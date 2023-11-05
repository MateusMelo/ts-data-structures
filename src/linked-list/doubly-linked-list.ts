import { LinkedList } from "./interfaces/linked-list.interface";
import { Node } from "./types/node.type";

export class DoublyLinkedListNode<T> {
    public next: DoublyLinkedListNode<T> | null = null;
    public prev: DoublyLinkedListNode<T> | null = null;
    constructor(public data: T) {}
}

export class DoublyLinkedList<T> implements LinkedList<T> {
    public head: DoublyLinkedListNode<T> | null = null;
    public tail: DoublyLinkedListNode<T> | null = null;
    private length: number = 0;
    constructor() {}

    /**
     * Returns true if the list contains the specified node
     * @param node {LinkedListNode<T>} The node whose presence in this list is to be tested
     * @returns {boolean}
     */
    public contains(node: Node<T>): boolean {
        if (!this.head) return false;
        let curr: DoublyLinkedListNode<T> | null = this.head;
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
    public peek(): DoublyLinkedListNode<T> | null {
        return this.head;
    }

    /**
     * Retrieves the tail of the list
     * @returns {LinkedListNode<T> | null} The tail of the list
     */
    public last(): DoublyLinkedListNode<T> | null {
        return this.tail;
    }

    /**
     * Removes and returns the last element of the list
     * @returns {LinkedListNode<T> | null} The node at the end of the list
     */
    public pop(): DoublyLinkedListNode<T> | null {
        if (!this.tail) return null;
        const tmp = this.tail;
        this.tail = tmp.prev;
        this.length--;
        return tmp;
    }
}