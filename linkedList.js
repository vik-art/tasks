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
//properties 
    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    size() {
        return this.size;
    }

    //append - method
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return this;
        } 
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++;
        return this;
}


}

const list = new LinkedList();

console.log(list.append("Some value 1"))
console.log(list.append("Some value 2"))
console.log(list.append("Some value 3"))
console.log(list.head)
console.log(list.tail)
