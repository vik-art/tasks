class Set {
    collection = [];

    add(el) { 
        if (this.collection.length) {
            let copies = this.collection.filter(item => item === el);
            return copies.length > 0 ? null : this.collection.push(el);
        }
        this.collection.push(el);
    }
    
    delete(el) { 
        this.collection = this.collection.filter(item => item !== el)
    }
    
    clear() { 
        this.collection = [];
    }

    has(el) { 
        let arr = this.collection.filter(item => item === el);
        return !!arr.length;
    }
    size() {
        return this.collection.length;
}

}

const list = new Set();