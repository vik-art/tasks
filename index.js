// queue - first in first out

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

