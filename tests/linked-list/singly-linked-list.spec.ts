import { test, describe } from "node:test";
import assert from "node:assert";
import { SinglyLinkedList, SinglyLinkedListNode } from "../../src/linked-list/singly-linked-list";

describe("Singly Linked List tests", () => {
  describe("contains()", () => {
    test("should return true if the list contains the specified node", () => {
      const list = new SinglyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      assert.ok(list.contains(new SinglyLinkedListNode(0)));
    });

    test("should return false if the list doesn't contains the specified node", () => {
      const list = new SinglyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      assert.equal(list.contains(new SinglyLinkedListNode(69)), false);
    });
  });

  describe("peek()", () => {
    test("should return the first element of the list", () => {
      const list = new SinglyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      assert.equal(list.peek()?.data, 0);
    });

    test("should return null when the first element of the list is not found", () => {
      const list = new SinglyLinkedList();

      assert.equal(list.peek(), null);
    });
  });

  describe("pop()", () => {
    test("should removes and return the tail of the list", () => {
      const list = new SinglyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      const tail = list.pop();

      assert.equal(tail?.data, 2);
      assert.equal(list.last()?.data, 1);
      assert.equal(list.len(), 2);
    });

    test("should return null when the tail of the list is null", () => {
      const list = new SinglyLinkedList();
      const tail = list.pop();

      assert.equal(tail, null);
    });
  });

  describe("shift()", () => {
    test("should removes and return the head of the list", () => {
      const list = new SinglyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      const head = list.shift();

      assert.equal(head?.data, 0);
      assert.equal(list.len(), 2);
    });

    test("should return null when the head of the list is null", () => {
      const list = new SinglyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      const head = list.shift();

      assert.equal(head?.data, 0);
      assert.equal(list.len(), 2);
    });
  });

  describe("unshift()", () => {
    test("should add the node to the beginning of the list", () => {
      const list = new SinglyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      const node = new SinglyLinkedListNode(69);
      list.unshift(node);

      assert.equal(list.peek()?.data, node.data);
      assert.equal(list.len(), 4);
    });
  });

  describe("push()", () => {
    test("should add the node to the end of the list", () => {
      const list = new SinglyLinkedList();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      const node = new SinglyLinkedListNode(69);
      list.push(node);

      assert.equal(list.last()?.data, node.data);
      assert.equal(list.len(), 4);
    });
  });

  describe("set()", () => {
    test("should replace the node at specified index", () => {
      const list = new SinglyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      const insertedNode = list.set(1, new SinglyLinkedListNode(69));
      assert.ok(insertedNode !== null);
      assert.equal(list.get(1)?.data, insertedNode.data);
      assert.equal(list.len(), 3);
    });

    test("should return null if specified index is greather than list length", () => {
      const list = new SinglyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      const insertedNode = list.set(69, new SinglyLinkedListNode(69));
      assert.equal(insertedNode, null);
      assert.equal(list.len(), 3);
    });

    test("should return null if specified index is less than 0", () => {
      const list = new SinglyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      const insertedNode = list.set(-1, new SinglyLinkedListNode(69));
      assert.equal(insertedNode, null);
      assert.equal(list.len(), 3);
    });
  });

  describe("get()", () => {
    test("should get the node at specified index", () => {
      const list = new SinglyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      assert.equal(list.get(0)?.data, 0);
      assert.equal(list.len(), 3);
    });

    test("should return null if specified index is greather than list length", () => {
      const list = new SinglyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      assert.equal(list.get(69), null);
    });

    test("should return null if specified index is less than 0", () => {
      const list = new SinglyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      assert.equal(list.get(-1), null);
    });

    test("should return null if list is empty", () => {
      const list = new SinglyLinkedList<number>();

      assert.equal(list.get(0), null);
    });
  });

  describe("remove()", () => {
    test("should remove the node at specified index", () => {
      const list = new SinglyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      assert.equal(list.remove(0)?.data, 0);
      assert.equal(list.len(), 2);
    });

    test("should return null if specified index is greather than list length", () => {
      const list = new SinglyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      assert.equal(list.remove(69), null);
      assert.equal(list.len(), 3);
    });

    test("should return null if specified index is less than 0", () => {
      const list = new SinglyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      assert.equal(list.remove(-1), null);
      assert.equal(list.len(), 3);
    });

    test("should return null if list is empty", () => {
      const list = new SinglyLinkedList<number>();

      assert.equal(list.remove(0), null);
      assert.equal(list.len(), 0);
    });
  });

  describe("clear()", () => {
    test("should clear all the list nodes", () => {
      const list = new SinglyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      list.clear();

      assert.equal(list.len(), 0);
    });
  });

  describe("len()", () => {
    test("should retrieve the current list length", () => {
      const list = new SinglyLinkedList<number>();
      for (let i = 0; i < 3; i++) list.push(new SinglyLinkedListNode(i));

      assert.equal(list.len(), 3);
    });
  });
});
