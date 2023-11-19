import { Stack } from "../stack/stack";

class BinaryTreeNode<T> {
    public left: BinaryTreeNode<T> | null = null;
    public right: BinaryTreeNode<T> | null = null;

    constructor(public value: T) {}
}

class BinaryTree<T> {
    public root: BinaryTreeNode<T> | null = null;

    public insert(value: T): BinaryTreeNode<T> { 
        this.root = this.insertRec(this.root, value);
        return this.root;
    }

    public search(value: T): BinaryTreeNode<T> | null {
        return this.searchRec(this.root, value);
    }

    private searchRec(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> | null {
        if (node === null || node.value === value)
            return node;

        if (value > node.value)
            return this.searchRec(node.right, value);

        return this.searchRec(node.left, value);
    }

    private insertRec(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> {
        if (node === null)
            return new BinaryTreeNode(value);
        
        if (value < node.value) {
            node.left = this.insertRec(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertRec(node.right, value);
        }

        return node;
    }

    public stackDepthFirstValues(): T[] {
        if (this.root === null)
            return [];

        const values = [];
        const stack = new Stack<BinaryTreeNode<T>>(10);
        stack.push(this.root);

        while (!stack.isEmpty()) {
            const n = stack.pop();
            
            values.push(n.value);

            if (n.right) stack.push(n.right);
            if (n.left) stack.push(n.left);
        }

        return values;
    }

    public recursiveDepthFirstValues(node: BinaryTreeNode<T> | null): T[] {
        if (node === null) return [];

        const leftValues = this.recursiveDepthFirstValues(node.left);
        const rightValues = this.recursiveDepthFirstValues(node.right);
        
        return [node.value, ...leftValues, ...rightValues];
    }
}

const bt = new BinaryTree<number>();
bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.insert(-1);
bt.insert(-2);
bt.insert(-3);
// console.log(bt.stackDepthFirstValues());
console.log(bt.recursiveDepthFirstValues(bt.root));