import { Node } from "../types/node.type";

export interface BinaryTree<T> {
    insert(value: T): Node<T>
    search(value: T): Node<T> | null
    delete(value: T): Node<T> | null
}