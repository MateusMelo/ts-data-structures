import { BinarySearchTreeNode } from "./binary-search-tree-node";
import { BinaryTree } from "./interfaces/binary-tree";

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

        if (node.left === null) return node.right;
        else if (node.right === null) return node.left;
        else {
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