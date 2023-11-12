export interface IQueue<T> {
    push(value: T): void
    pop(): T
    peek(): T
    isEmpty(): boolean
}