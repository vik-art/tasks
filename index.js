class Stack {
    constructor() {
        this.collection = []
    }
    push(el) {
        this.collection.unshift(el);
        return this.collection;
    }

    pop() {
        return this.collection.pop()
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}
class Queue {
    constructor() {
        this.collection = [];
    }
    enqueue(el) {
        this.collection.push(el);
        return this.collection
    }

    dequeue() {
       return this.collection.shift();
    }

    size() {
        return this.collection.length;
    }
}

class WebAPI {
    collection = [];
    add(func) {
        this.collection.push(func)
    }
    delete(func) {
        this.collection.pop(func)
    }
}

class Event {
    constructor(event, type = 'sync') {
        this.value = value,
        this.next = next
    }
}
