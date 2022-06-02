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

    //indexOf - returns the index of node in linked list

    indexOf(value) {
        let idx = 0;
        let current = this._head;
        if (!this._head) {
            return -1;
        }
        while (current !== null) {
            if (current.value === value) {
                return idx
            }
            idx++;
            current = current.next;
        }
        return -1;
    }

    //valueOf - find the element by its index

    valueOf(idx) {
        if (idx < 0 || idx > this._size) {
            return null;
        }
        let count = 0;
        let current = this._head;
        while (count < idx) {
            current = current.next;
            count++;
        }
        return current;
    }

    //addAt - insert node to the certain position in the linked list

    addAt(value, position) {
        if (position < 0 || position > this._size) {
            return null;
        }
        const newNode = new Node(value);
        if (position === 0) {
            newNode.next = this._head;
            this._head = newNode;
            this._size++;
        } else {
            let count = 0;
            let current = this._head;
            let prev = null;
            while (count < position) {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = newNode;
            newNode.next = current;
        }
        this._size++
        return this;
    }

}


const list = new LinkedList();

list.append(1).append(3).append(5)
console.log(list.valueOf(-8))
