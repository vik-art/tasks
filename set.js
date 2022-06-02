class Set {
    collection = [];

    add(el) { 
        if (this.collection.length) {
            let copies = this.collection.filter(item => item === el);
            return copies.length > 0 ? null : this.collection.push(el);
        }
        this.collection.push(el);
    }
    
    delete() { 

    }
    
    clear() { }

    has() { }


}

const list = new Set();

list.add(1);
list.add(1);
list.add(2);
list.add(2)

console.log(list.collection)