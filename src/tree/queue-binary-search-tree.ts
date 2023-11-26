import assert from "node:assert";
import { Queue } from "../queue/queue";
import { BinarySearchTreeNode } from "./binary-search-tree-node";
import { BinaryTree } from "./interfaces/binary-tree";

export class QueueBinarySearchTree<T> implements BinaryTree<T> {
    constructor(public root: BinarySearchTreeNode<T>) {}

    public search(root: BinarySearchTreeNode<T> | null, value: T): BinarySearchTreeNode<T> | null {
        if (root === null || root.value === value) return root;
        const queue = new Queue<BinarySearchTreeNode<T>>();
        queue.push(root);
        while (!queue.isEmpty()) {
            const node = queue.pop();

            assert(node !== null);

            if (node.value === value) return node;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return null;
    }

    public delete(root: BinarySearchTreeNode<T> | null): BinarySearchTreeNode<T> | null {
        assert.ok(false && "Not implemented yet");
    }

    public breadthFirstValues(): T[] {
        if (this.root === null) return [];

        const values = [];
        const queue = new Queue<BinarySearchTreeNode<T>>();

        queue.push(this.root);

        while(!queue.isEmpty()) {
            const n: BinarySearchTreeNode<T> | null = queue.pop();

            assert(n !== null);

            values.push(n.value);

            if (n.left) queue.push(n.left);
            if (n.right) queue.push(n.right);
        }

        return values;
    }

    public includes(value: T): boolean {
        if (this.root === null) return false;
        const queue = new Queue<BinarySearchTreeNode<T>>();
        queue.push(this.root);

        while (!queue.isEmpty()) {
            const n: BinarySearchTreeNode<T> | null = queue.pop();

            assert(n !== null);

            if (n.value === value) return true;
            if (n.left) queue.push(n.left);
            if (n.right) queue.push(n.right);
        }
       
        return false;
    }
}

const bt = new QueueBinarySearchTree<number>(new BinarySearchTreeNode<number>(1));
bt.root.left = new BinarySearchTreeNode<number>(2);
bt.root.left.left = new BinarySearchTreeNode<number>(4);
bt.root.left.right = new BinarySearchTreeNode<number>(5);
bt.root.right = new BinarySearchTreeNode<number>(3);
bt.root.right.left = new BinarySearchTreeNode<number>(7);

console.log(bt.includes(0));