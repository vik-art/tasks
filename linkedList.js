// LinkedList - sequence of items in linear order which are linked to each other
// types: singly (each node only has one pointer), doubly (each node has next and previous pointer)
// circlular (the tail mode point to the head node)

class Node {
    constructor(value, next = null) {
        this.value = value,
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null,
        this.tail = null,
        this.length = 0;
    }
//methods
// insert node to the end of the linked list
push(val) {
    const newNode = new Node(val);
    if(!this.head) {
        this.head = newNode;
        this.tail = this.head
    } else {
        this.tail.next = newNode;
        this.tail = newNode
    }
    this.length ++;
    return this
}

// insert node to the start of the linked list

unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
    } else {
        newNode.next = this.head;
        this.tail = this.head;
        this.head = newNode
    }
    this.length ++;
    return this
}


// return length, head and tail of linked list

    size() {
        return this.length;
    }
    head() {
        return this.head
    }
    tail() {
        return this.tail
    }
}

const list = new LinkedList();


