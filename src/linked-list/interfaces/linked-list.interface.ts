import { Node } from "../types/node.type"

export interface LinkedList<T> {
    contains(node: Node<T>): boolean;
    peek(): Node<T> | null;
    last(): Node<T> | null;
    pop(): Node<T> | null;
    shift(): Node<T> | null;
    unshift(node: Node<T> | null): void;
    push(node: Node<T> | null): void;
    set(index: number, node: Node<T>): Node<T> | null;
    get(index: number): Node<T> | null;
    remove(index: number): Node<T> | null;
    clear(): void;
    len(): number;
}