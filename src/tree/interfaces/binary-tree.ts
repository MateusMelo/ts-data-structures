import { BinarySearchTreeNode } from "../binary-search-tree";

export interface BinaryTree<T> {
    search(root: BinarySearchTreeNode<T>, value: T): BinarySearchTreeNode<T> | null
    delete(root: BinarySearchTreeNode<T>, value: T): BinarySearchTreeNode<T> | null
}