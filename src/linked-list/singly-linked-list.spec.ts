import { test, describe } from "node:test";
import assert from "node:assert";
import { LinkedListNode, SinglyLinkedList } from "./singly-linked-list";

describe("Singly Linked List tests", () => {
    test("should return true if the list contains the specified node", () => {
        const list = new SinglyLinkedList();
        for (let i = 0; i < 3; i++)
            list.unshift(new LinkedListNode(i));

        assert.ok(list.contains(new LinkedListNode(0)))
    });

    test("should return false if the list doesn't contains the specified node", () => {
        const list = new SinglyLinkedList();
        for (let i = 0; i < 3; i++)
            list.unshift(new LinkedListNode(i));

        assert.equal(list.contains(new LinkedListNode(69)), false)
    })
});
