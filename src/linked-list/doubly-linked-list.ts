import assert from "node:assert";
import { LinkedList } from "./interfaces/linked-list.interface";

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
   * @param node {DoublyLinkedListNode<T>} The node whose presence in this list is to be tested
   * @returns {boolean}
   */
  public contains(node: DoublyLinkedListNode<T>): boolean {
    if (!this.head) return false;
    let curr: DoublyLinkedListNode<T> | null = this.head;
    while (curr !== null) {
      if (curr.data === node.data) return true;

      curr = curr.next;
    }

    return false;
  }

  /**
   * Retrieves the head of the list
   * @returns {DoublyLinkedListNode<T> | null} The head of the list
   */
  public peek(): DoublyLinkedListNode<T> | null {
    return this.head;
  }

  /**
   * Retrieves the tail of the list
   * @returns {DoublyLinkedListNode<T> | null} The tail of the list
   */
  public last(): DoublyLinkedListNode<T> | null {
    return this.tail;
  }

  /**
   * Removes and returns the last element of the list
   * @returns {DoublyLinkedListNode<T> | null} The node at the end of the list
   */
  public pop(): DoublyLinkedListNode<T> | null {
    if (!this.tail) return null;
    const tail = this.tail;
    this.tail = tail.prev;
    this.length--;
    return tail;
  }

  /**
   * Removes and returns the first element of the list
   * @returns {DoublyLinkedListNode<T> | null} The node at the front of the list
   */
  public shift(): DoublyLinkedListNode<T> | null {
    if (!this.head) return null;
    const head = this.head;
    this.head = head.next;
    this.length--;
    return head;
  }

  public unshift(node: DoublyLinkedListNode<T> | null): void {
    assert.ok(false && "unshift() is not implemented yet.");
  }

  /**
   * Adds the specified node at the end of the list
   * @param {LinkedListNode<T>} node The node instance to be added
   */
  public push(node: DoublyLinkedListNode<T>): void {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
    }

    this.length++;
  }

  public set(
    index: number,
    node: DoublyLinkedListNode<T>
  ): DoublyLinkedListNode<T> | null {
    assert.ok(false && "set() is not implemented yet.");
  }

  public get(index: number): DoublyLinkedListNode<T> | null {
    assert.ok(false && "get() is not implemented yet.");
  }

  public remove(index: number): DoublyLinkedListNode<T> | null {
    assert.ok(false && "remove() is not implemented yet.");
  }

  public clear(): void {
    assert.ok(false && "clear() is not implemented yet.");
  }

  public len(): number {
    return this.length;
  }
}


const dll = new DoublyLinkedList();
dll.push(new DoublyLinkedListNode(1));
dll.push(new DoublyLinkedListNode(2));
dll.push(new DoublyLinkedListNode(3));

console.log(dll);