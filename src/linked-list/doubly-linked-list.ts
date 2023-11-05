export class DoublyLinkedListNode<T> {
    public next: DoublyLinkedListNode<T> | null = null;
    constructor(public data: T) {}
}