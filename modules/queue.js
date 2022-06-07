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
