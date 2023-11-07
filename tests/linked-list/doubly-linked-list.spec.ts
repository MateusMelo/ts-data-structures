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
});
