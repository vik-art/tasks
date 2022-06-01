class Queue {
    constructor(collection) {
        this.collection = collection
    }
    enqueue(el) {
        return this.collection.push(el)
    }
    dequeue(el) {
        return this.collection.shift(el)
    }
}