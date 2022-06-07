// - Stack - LIFO: last in first out

class Stack {
    constructor() {
        this.collection = []
    }

//push - insert an element on the top of the stack

    push(el) {
        this.collection.unshift(el);
        return this.collection;
    }

//pop - delete element from the top of the stack and return it

    pop() {
        return this.collection.pop()
    }
//length - get the size of the stack

    size() {
        return this.collection.length;
    }

// peek - return the top element of the stack without deleting it

    peek() {
        return this.collection.length ? this.collection[0] : null;
    }

// isEmpty - check if the stack is empty

    isEmpty() {
        return this.collection.length === 0;
    }

// isFull - check if the stack is full

    isFull() {
        return this.collection.length !== 0;
    }
}