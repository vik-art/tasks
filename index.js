// Queue - FIFO: first in first out

class Queue {
    constructor(collection) {
        this.collection = collection
    }

    // - enqueue method insert an element to the end of the queue
    enqueue(el) {
        this.collection.push(el);
        return this.collection
    }

    // - dequeue method delete element from the beginning of the queue
    dequeue() {
        this.collection.shift();
        return this.collection
    }

    // length of collection 

    getSize() {
        return this.collection.length;
    }
}

const item = new Queue([1, 2, 3, 4]);

// - Stack - LIFO: last in first out

class Stack {
    constructor(collection) {
        this.collection = collection
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

    getLength() {
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

const stack = new Stack([1, 2, 3, 4, 5, 6, 7]);

