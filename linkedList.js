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

    //append - method for adding item to the end of the linked list
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
    // prepend - method for adding item to the begining of the linked list

    prepend(value) {
        const newNode = new Node(value);
            newNode.next = this.head;
        this.head = newNode;
        this.size++;
            return this;
    }

    // find - for searching node by the value

    find(value) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value === value) {
                return currentNode;
            } 
        currentNode = currentNode.next;
        }
    }

    //delete - for deleting node by the value

    delete(value) {
        if (!this.head) {
            return null;
        }
        let deletedNode = null;
        if (this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
            this.size--;
            return deletedNode;
        }
        let currentNode = this.head.next;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
                this.size--;
                return deletedNode;
            }
            currentNode = currentNode.next;
        }
    }

}

const list = new LinkedList();

list.append("1").append("2").append("3").prepend("4").prepend("5").prepend("6")

console.log(list.delete("3"));
console.log(list)

