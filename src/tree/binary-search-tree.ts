import assert from "node:assert";
import { Queue } from "../queue/queue";
import { Stack } from "../stack/stack";
import { BinaryTree } from "./interfaces/binary-tree";

export class BinarySearchTreeNode<T> {
    public left: BinarySearchTreeNode<T> | null = null;
    public right: BinarySearchTreeNode<T> | null = null;

    constructor(public value: T) {}
}

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
        if (this.root === null)
            return [];

        const values = [];
        const queue = new Queue<BinarySearchTreeNode<T>>();

        queue.push(this.root);

        while(!queue.isEmpty()) {
            const n: BinarySearchTreeNode<T> | null = queue.pop();

            assert(n !== null);

            values.push(n.value);

            if (n.left)
                queue.push(n.left);

            if (n.right)
                queue.push(n.right);
        }

        return values;
    }
}

export class RecursiveBinarySearchTree<T> implements BinaryTree<T> {
    constructor(public root: BinarySearchTreeNode<T>) {}

    public search(root: BinarySearchTreeNode<T> | null, value: T): BinarySearchTreeNode<T> | null {
        if (root === null || root.value === value) return root;
        if (value < root.value) return this.search(root.left, value) 
        return this.search(root.right, value);
    }

    public delete(node: BinarySearchTreeNode<T> | null, value: T): BinarySearchTreeNode<T> | null {
        if (node === null) return node;
        
        if (node.value > value) {
            node.left = this.delete(node.left, value);
            return node; 
        } else if (node.value < value) {
            node.right = this.delete(node.right, value);
            return node;
        }
        
        if (node.left === null) {
            return node.right;
        } else if (node.right === null) {
            return node.left;
        } else {
            let parent = null; 
            let succ = node.right;
            while (succ.left !== null) {
                parent = succ;
                succ = succ.left;
            }

            if (parent !== null)
                parent.left = succ.right;
            else
                node.right = succ.right;

            node.value = succ.value;

            // node.value = succ.value;
            // node.right = this._delete(node.right, succ.value);

            return node;
        }
    }

    public depthFirstValues(node: BinarySearchTreeNode<T> | null): T[] {
        if (node === null) return [];
        return [
            node.value,
            ...this.depthFirstValues(node.left),
            ...this.depthFirstValues(node.right)
        ];
    }
}

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
}


const bt = new RecursiveBinarySearchTree<number>(new BinarySearchTreeNode<number>(1));
bt.root.left = new BinarySearchTreeNode<number>(2);
bt.root.left.left = new BinarySearchTreeNode<number>(4);
bt.root.left.right = new BinarySearchTreeNode<number>(5);
bt.root.right = new BinarySearchTreeNode<number>(3);
bt.root.right.left = new BinarySearchTreeNode<number>(7);

console.log(bt.depthFirstValues(bt.root));

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