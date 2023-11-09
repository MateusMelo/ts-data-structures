export interface IStack<T> {
    push(value: T): void;
    pop(value: T): T;
    peek(value: T): T;
}