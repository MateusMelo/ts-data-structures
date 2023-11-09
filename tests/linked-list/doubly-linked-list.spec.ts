import { test, describe } from "node:test";
import assert from "node:assert";
import {
  DoublyLinkedList,
  DoublyLinkedListNode,
} from "../../src/linked-list/doubly-linked-list";

describe("Doubly Linked List tests", () => {
  describe("contains()", () => {
    test("should return true if the list contains the specified node", () => {
      const list = new DoublyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new DoublyLinkedListNode(i));

      assert.ok(list.contains(new DoublyLinkedListNode(0)));
    });

    test("should return false if the list doesn't contains the specified node", () => {
      const list = new DoublyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new DoublyLinkedListNode(i));

      assert.equal(list.contains(new DoublyLinkedListNode(69)), false);
    });
  });

  describe("peek()", () => {
    test("should return the first element of the list", () => {
      const list = new DoublyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new DoublyLinkedListNode(i));

      assert.equal(list.peek()?.data, 0);
    });

    test("should return null when the first element of the list is not found", () => {
      const list = new DoublyLinkedList();

      assert.equal(list.peek(), null);
    });
  });

  describe("pop()", () => {
    test("should removes and return the tail of the list", () => {
      const list = new DoublyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new DoublyLinkedListNode(i));

      const tail = list.pop();

      assert.equal(tail?.data, 2);
      assert.equal(list.last()?.data, 1);
      assert.equal(list.len(), 2);
    });

    test("should return null when the tail of the list is null", () => {
      const list = new DoublyLinkedList();
      const tail = list.pop();

      assert.equal(tail, null);
    });
  });

  describe("shift()", () => {
    test("should removes and return the head of the list", () => {
      const list = new DoublyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new DoublyLinkedListNode(i));

      const head = list.shift();

      assert.equal(head?.data, 0);
      assert.equal(list.len(), 2);
    });

    test("should return null when the head of the list is null", () => {
      const list = new DoublyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new DoublyLinkedListNode(i));

      const head = list.shift();

      assert.equal(head?.data, 0);
      assert.equal(list.len(), 2);
    });
  });

  describe("unshift()", () => {
    test("should add the node to the beginning of the list", () => {
      const list = new DoublyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new DoublyLinkedListNode(i));

      const node = new DoublyLinkedListNode(69);
      list.unshift(node);

      assert.equal(list.peek()?.data, node.data);
      assert.equal(list.len(), 4);
    });
  });

  describe("push()", () => {
    test("should add the node to the end of the list", () => {
      const list = new DoublyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new DoublyLinkedListNode(i));

      const node = new DoublyLinkedListNode(69);
      list.push(node);

      assert.equal(list.last()?.data, node.data);
      assert.equal(list.len(), 4);
    });
  });

  describe("set()", () => {
    test("should replace the node at specified index", () => {
      const list = new DoublyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new DoublyLinkedListNode(i));

      const insertedNode = list.set(1, new DoublyLinkedListNode(69));
      assert.ok(insertedNode !== null);
      assert.equal(list.get(1)?.data, insertedNode.data);
      assert.equal(list.len(), 3);
    });

    test("should return null if specified index is greather than list length", () => {
      const list = new DoublyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new DoublyLinkedListNode(i));

      const insertedNode = list.set(69, new DoublyLinkedListNode(69));
      assert.equal(insertedNode, null);
      assert.equal(list.len(), 3);
    });

    test("should return null if specified index is less than 0", () => {
      const list = new DoublyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new DoublyLinkedListNode(i));

      const insertedNode = list.set(-1, new DoublyLinkedListNode(69));
      assert.equal(insertedNode, null);
      assert.equal(list.len(), 3);
    });
  });
});
