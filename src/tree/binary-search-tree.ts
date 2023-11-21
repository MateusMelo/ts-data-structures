import assert from "node:assert";
import { Queue } from "../queue/queue";
import { Stack } from "../stack/stack";
import { BinaryTree } from "./interfaces/binary-tree";

export class BinarySearchTreeNode<T> {
    public left: BinarySearchTreeNode<T> | null = null;
    public right: BinarySearchTreeNode<T> | null = null;

    constructor(public value: T) {}
}

export class BinarySearchTree<T> implements BinaryTree<T> {
    constructor(public root: BinarySearchTreeNode<T>) {}

    public insert(value: T): BinarySearchTreeNode<T> { 
        this.root = this._insert(this.root, value);
        return this.root;
    }

    private _insert(node: BinarySearchTreeNode<T> | null, value: T): BinarySearchTreeNode<T> {
        if (node === null)
            return new BinarySearchTreeNode(value);
        
        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        }

        return node;
    }

    public search(value: T): BinarySearchTreeNode<T> | null {
        return this._search(this.root, value);
    }

    private _search(node: BinarySearchTreeNode<T> | null, value: T): BinarySearchTreeNode<T> | null {
        if (node === null || node.value === value)
            return node;
        if (value < node.value)
            return this._search(node.left, value);
        return this._search(node.right, value);

    }

    public delete(value: T): BinarySearchTreeNode<T> | null {
        return this._delete(this.root, value);
    }

    private _delete(node: BinarySearchTreeNode<T> | null, value: T): BinarySearchTreeNode<T> | null {
        if (node === null) return node;
        
        if (node.value > value) {
            node.left = this._delete(node.left, value);
            return node;
        } else if (node.value < value) {
            node.right = this._delete(node.right, value);
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

    public stackDepthFirstValues(): T[] {
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

    public recursiveDepthFirstValues(node: BinarySearchTreeNode<T> | null): T[] {
        if (node === null) return [];
        return [
            node.value,
            ...this.recursiveDepthFirstValues(node.left),
            ...this.recursiveDepthFirstValues(node.right)
        ];
    }

    public queueBreadthFirstValues(): T[] {
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

const bt = new BinarySearchTree<string>(new BinarySearchTreeNode<string>("a"));
bt.root.left = new BinarySearchTreeNode<string>("b");
bt.root.left.left = new BinarySearchTreeNode<string>("d");
bt.root.left.right = new BinarySearchTreeNode<string>("e");
bt.root.right = new BinarySearchTreeNode<string>("c");
bt.root.right.left = new BinarySearchTreeNode<string>("f");
// console.log(bt.recursiveDepthFirstValues(bt.root));
// console.log(bt.delete(3));
// console.log(bt.delete(3));
// console.log(bt.stackDepthFirstValues());
console.log(bt.queueBreadthFirstValues());

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