export interface IQueue<T> {
    push(value: T): void
    pop(): T | null
    peek(): T | null
    isEmpty(): boolean
}