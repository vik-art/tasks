class Set {
    collection = [];

    add(el) { 
        if (this.collection.length) {
          return this.has(el) ? null : this.collection.push(el);
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
        return this.collection.indexOf(el) !== -1;
    }
    size() {
        return this.collection.length;
    }
    keys() {
        return {...this.collection}
    }
}

const list = new Set();


class WeakSet {
    collection = [];

    isObj(obj) {
        return obj !== null && obj.constructor.name === "Object";
    }
    add(item) { 
        if (!this.isObj(item) || this.has(item)) {
            return null;
        }
        this.collection.push(item)
    }
    has() { 
        return this.collection.indexOf !== -1;
    }
    delete(item) {
        this.collection = this.collection.filter(el => el !== item)
    }
    clear() {
        this.collection = [];
    }
}
