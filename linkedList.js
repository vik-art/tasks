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
        this.size = 0;
    }
//methods

add(val) {
    const newNode = new Node(val);
    if(!this.head) {
        this.head = newNode;
        this.tail = newNode
    } else {
        this.tail.next = newNode;
        this.tail = newNode
    }
    this.size ++;
    return this
}
}

const list = new LinkedList();
console.log(list.add("Some value"));
