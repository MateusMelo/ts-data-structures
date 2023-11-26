import assert from "node:assert";
import { Stack } from "../stack/stack";
import { BinaryTree } from "./interfaces/binary-tree";
import { BinarySearchTreeNode } from "./binary-search-tree-node";

export class StackBinarySearchTree<T> implements BinaryTree<T> {
    constructor(public root: BinarySearchTreeNode<T>) {}

    public delete(root: BinarySearchTreeNode<T>, value: T): BinarySearchTreeNode<T> | null {
        assert.ok(false && "Not implemented yet");
    }

    public search(root: BinarySearchTreeNode<T>, value: T): BinarySearchTreeNode<T> | null {
        assert.ok(false && "Not implemented yet");
    }

    public depthFirstValues(): T[] {
        if (this.root === null)
            return [];

        const values = [];
        const stack = new Stack<BinarySearchTreeNode<T>>(1000);
        stack.push(this.root);

        while (!stack.isEmpty()) {
            const frame = stack.pop();

            values.push(frame.value);

            if (frame.right) stack.push(frame.right);
            if (frame.left) stack.push(frame.left);
        }

        return values;
    }

    public includes(value: T): boolean {
        if (this.root === null) return false;
        const stack = new Stack<BinarySearchTreeNode<T>>(1000);
        stack.push(this.root);

        while (!stack.isEmpty()) {
            const frame = stack.pop();

            if (frame.value === value) return true;
            if (frame.right) stack.push(frame.right);
            if (frame.left) stack.push(frame.left);
        }

        return false;
    }
}

const bt = new StackBinarySearchTree<number>(new BinarySearchTreeNode<number>(1));
bt.root.left = new BinarySearchTreeNode<number>(2);
bt.root.left.left = new BinarySearchTreeNode<number>(4);
bt.root.left.right = new BinarySearchTreeNode<number>(5);
bt.root.right = new BinarySearchTreeNode<number>(3);
bt.root.right.left = new BinarySearchTreeNode<number>(7);

console.log(bt.includes(0));

/**
 *              1
 *            /   \
 *           2     3
 *          / \   / \
 *         4   5 6   7 
 *        / \
 *       8   9    
 */

/**
 *              6
 *            /   \
 *           2     3
 *          / \     \
 *         4   5     7 
 *        / \
 *       8   9    
 */