import { test, describe } from "node:test";
import assert from "node:assert";
import { LinkedListNode, SinglyLinkedList } from "./singly-linked-list";

describe("Singly Linked List tests", () => {
    test("should return true if the list contains the specified node", () => {
        const list = new SinglyLinkedList();
        for (let i = 0; i < 3; i++)
            list.push(new LinkedListNode(i));

        assert.ok(list.contains(new LinkedListNode(0)))
    });

    test("should return false if the list doesn't contains the specified node", () => {
        const list = new SinglyLinkedList();
        for (let i = 0; i < 3; i++)
            list.push(new LinkedListNode(i));

        assert.equal(list.contains(new LinkedListNode(69)), false)
    })

    test("should return the first element of the list", () => {
        const list = new SinglyLinkedList();
        for (let i = 0; i < 3; i++)
            list.push(new LinkedListNode(i));

        assert.equal(list.peek()?.data, 0);
    })

    test("should return null when the first element of the list is not found", () => {
        const list = new SinglyLinkedList();

        assert.equal(list.peek(), null);
    })

    test("should removes and return the tail of the list", () => {
        const list = new SinglyLinkedList();
        for (let i = 0; i < 3; i++)
            list.push(new LinkedListNode(i));

        const tail = list.pop();

        assert.equal(tail?.data, 2);
        assert.equal(list.last()?.data, 1);
        assert.equal(list.len(), 2);
    })

    test("should return null when the tail of the list is null", () => {
        const list = new SinglyLinkedList();
        const tail = list.pop();

        assert.equal(tail, null);
    })

    test("should removes and return the head of the list", () => {
        const list = new SinglyLinkedList();
        for (let i = 0; i < 3; i++)
            list.push(new LinkedListNode(i));

        const head = list.shift();

        assert.equal(head?.data, 0);
        assert.equal(list.len(), 2);
    })

    test("should return null when the head of the list is null", () => {
        const list = new SinglyLinkedList();
        for (let i = 0; i < 3; i++)
            list.push(new LinkedListNode(i));

        const head = list.shift();

        assert.equal(head?.data, 0);
        assert.equal(list.len(), 2);
    })
});
