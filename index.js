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
    add(event) {
        this.collection.push(event)
    }
    delete(event) {
        this.collection.pop(event)
    }
}

class Event {
    constructor(event, type = 'sync', func) {
        this.event = event;
        this.type = type;
        this.func = func;
    }
}

class EventLoop {
    event = new Event(click, 'async');
    stack = new Stack();
    queue = new Queue();
    webApi = new WebAPI();

    event() {
        this.stack.push(this.event);
        if (this.event.type === 'sync') {
            this.stack.pop(this.event)
        } else {
            this.webApi.add(this.event);
            this.queue.enqueue(this.event);
            if (this.stack.isEmpty) {
                this.stack.push(this.event)
            }
        }
    }
}
