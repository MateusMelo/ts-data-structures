import { Node } from "../types/node.type";

export interface BinaryTree<T> {
    insert(): Node<T>
    search(): Node<T>
    delete(): Node<T>
}