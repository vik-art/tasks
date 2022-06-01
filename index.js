// Queue - FIFO: first in first out

class Queue {
    constructor() {
        this.collection = [];
    }

    // - enqueue method insert an element to the end of the queue
    enqueue(el) {
        this.collection.push(el);
        return this.collection
    }

    // - dequeue method delete element from the beginning of the queue and return it
    dequeue() {
       return this.collection.shift();
    }

    // length of collection 

    size() {
        return this.collection.length;
    }
}

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

