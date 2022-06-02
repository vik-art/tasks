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
    constructor() { }

    _head = null;
    _tail = null;
    _size = 0;

//properties 
    
   get head() {
        return this._head;
    }

   get tail() {
        return this._tail;
    }

    get size() {
        return this._size;
    }

    //append - method for adding item to the end of the linked list
    append(value) {
        const newNode = new Node(value);
        if (!this._head) {
            this._head = newNode;
            this._tail = newNode;
            this._size++;
            return this;
        } 
            this._tail.next = newNode;
            this._tail = newNode;
            this._size++;
        return this;
    }
    // prepend - method for adding item to the begining of the linked list

    prepend(value) {
        const newNode = new Node(value);
            newNode.next = this._head;
        this._head = newNode;
        this._size++;
            return this;
    }

    // find - for searching node by the value

    find(value) {
        if (!this._head) {
            return null;
        }
        let currentNode = this._head;
        while (currentNode.next) {
            if (currentNode.value === value) {
                return currentNode;
            } 
        currentNode = currentNode.next;
        }
    }

    //delete - for deleting node by the value

    delete(value) {
        if (!this._head) {
            return null;
        }
        let deletedNode = null;
        if (this._head.value === value) {
            deletedNode = this._head;
            this._head = this._head.next;
            this._size--;
            return deletedNode;
        }
        let currentNode = this._head.next;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
                this._size--;
                return deletedNode;
            }
            currentNode = currentNode.next;
        }
    }

}


const list = new LinkedList();


