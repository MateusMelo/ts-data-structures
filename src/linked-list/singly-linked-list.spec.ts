import { test, describe } from "node:test";
import assert from "node:assert";
import { SinglyLinkedList } from "./singly-linked-list";

describe("Singly Linked List tests", () => {
  test("should insert new value in begin", () => {
    const singlyLinkedList: SinglyLinkedList<number> = new SinglyLinkedList();
    singlyLinkedList.insertInBegin(3);
    singlyLinkedList.insertInBegin(2);
    singlyLinkedList.insertInBegin(1);

    const it = singlyLinkedList.getIterator();
    const next = it.next();

    assert.equal(1, next.value);
  });

  test("should insert new value at end", () => {
    const singlyLinkedList: SinglyLinkedList<number> = new SinglyLinkedList();
    singlyLinkedList.insertAtEnd(1);
    singlyLinkedList.insertAtEnd(2);
    singlyLinkedList.insertAtEnd(3);

    const it = singlyLinkedList.getIterator();
    let lastValue = null;
    for (const currValue of it) lastValue = currValue;
    assert.equal(3, lastValue);
  });

  test("should removed from the begin", () => {
    const singlyLinkedList: SinglyLinkedList<number> = new SinglyLinkedList();
    singlyLinkedList.insertAtEnd(1);
    singlyLinkedList.insertAtEnd(2);
    singlyLinkedList.insertAtEnd(3);

    singlyLinkedList.removeInBegin();

    const it = singlyLinkedList.getIterator();
    let firstValue = null;
    for (const currValue of it) {
        firstValue = currValue;
        break;
    }

    assert.notEqual(1, firstValue);
  });

  test("should removed from the end", () => {
    const singlyLinkedList: SinglyLinkedList<number> = new SinglyLinkedList();
    singlyLinkedList.insertAtEnd(1);
    singlyLinkedList.insertAtEnd(2);
    singlyLinkedList.insertAtEnd(3);

    singlyLinkedList.removeAtEnd();

    const it = singlyLinkedList.getIterator();
    let lastValue = null;
    for (const currValue of it) lastValue = currValue;
    assert.notEqual(3, lastValue);
  });
});
