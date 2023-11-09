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

  /**
   * Adds the specified node to the beginning of the list
   * @param {DoublyLinkedListNode<T>} node The node instance to be added
   */
  public unshift(node: DoublyLinkedListNode<T>): void {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
  }

  /**
   * Adds the specified node at the end of the list
   * @param {DoublyLinkedListNode<T>} node The node instance to be added
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

  /**
   * Replaces the node at the specified index with the specified node
   * @param {number} index The index of node to be replaced
   * @param {DoublyLinkedListNode<T>} node The node instance to be added
   */
  public set(
    index: number,
    node: DoublyLinkedListNode<T>
  ): DoublyLinkedListNode<T> | null {
    if (!this.head) return null;
    if (index < 0 || index > this.len()) return null;
    if (index === 0) {
      this.head = node;
      if (this.len() === 1) {
        this.tail = node;
      }
      return node;
    }

    let i = 0;
    let curr: DoublyLinkedListNode<T> | null = this.head;
    while (curr !== null) {
      if (i === index) {
        node.prev = curr.prev;
        node.next = curr.next;
        assert.ok(node.prev !== null);
        node.prev.next = node;
        curr = node;

        if (index === (this.len() - 1))
          this.tail = node;

        return node;
      }
      i++;
      curr = curr.next;
    }

    return null;
  }

  /**
   * Get the node at the specified index
   * @param {number} index The index of node to be returned
   */
  public get(index: number): DoublyLinkedListNode<T> | null {
    if (!this.head) return null;
    if (index < 0 || index > this.len()) return null;
    if (index === 0) return this.head;

    let curr: DoublyLinkedListNode<T> | null = this.head;
    let i = 0;
    while (curr !== null) {
      if (index === i) return curr;
      curr = curr.next;
      i++;
    }
    return null;
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
