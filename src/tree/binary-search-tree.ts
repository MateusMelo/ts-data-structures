import { Stack } from "../stack/stack";

export class BinarySearchTreeNode<T> {
    public left: BinarySearchTreeNode<T> | null = null;
    public right: BinarySearchTreeNode<T> | null = null;

    constructor(public value: T) {}
}

export class BinarySearchTree<T> {
    public root: BinarySearchTreeNode<T> | null = null;

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
}

const bt = new BinarySearchTree<number>();
bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.insert(-1);
bt.insert(-2);
bt.insert(-3);
// console.log(bt.stackDepthFirstValues());
// console.log(bt.recursiveDepthFirstValues(bt.root));
console.log(bt.search(10))