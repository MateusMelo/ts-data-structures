import assert from "node:assert";
import { IStack } from "./interfaces/stack.interface";

class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;
  constructor(public data: T) {}
}

class StackLinkedList<T> implements IStack<T> {
  private tail: Node<T> | null = null;
  private length: number = 0;
  private readonly capacity: number = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public push(value: T): void {
    if (this.isFull()) throw new Error("Stack Overflow");
    const n = new Node(value);
    if (!this.tail) {
      this.tail = n;
    } else {
      this.tail.next = n;
      n.prev = this.tail;
      this.tail = n;
    }
    this.length++;
  }

  public pop(): T {
    if (this.length < 1) throw new Error("Stack Underflow");

    assert(this.tail !== null);

    const tail = this.tail;
    this.tail = this.tail.prev;

    if (this.tail !== null) this.tail.next = null;

    this.length--;

    return tail.data;
  }

  public peek(): T {
    assert(this.tail !== null);
    return this.tail?.data;
  }

  private isFull(): boolean {
    return this.length >= this.capacity;
  }
}
