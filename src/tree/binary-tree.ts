class BinaryTreeNode<T> {
    public left: BinaryTreeNode<T> | null = null;
    public right: BinaryTreeNode<T> | null = null;

    constructor(public value: T) {}
}

class BinaryTree<T> {
    public root: BinaryTreeNode<T> | null = null;

    public insert(value: T): void { 
        this.root = this.insertRec(this.root, value);
    }

    public search(value: T): BinaryTreeNode<T> | null {
        return this.searchRec(this.root, value);
    }

    private searchRec(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> | null {
        if (!node || node.value === value)
            return node;

        if (value > node.value)
            return this.searchRec(node.right, value);

        return this.searchRec(node.left, value);
    }

    private insertRec(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> {
        if (!node)
            return new BinaryTreeNode(value);
        
        if (value < node.value) {
            node.left = this.insertRec(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertRec(node.right, value);
        }

        return node;
    }
}

const bt = new BinaryTree<number>();
bt.insert(0);
bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.insert(-1);
bt.insert(-2);
bt.insert(-3);
bt.insert(-4);
console.log(bt);
// console.log(bt.search(-2));
