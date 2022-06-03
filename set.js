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

    add(item) { 
        if (this.isObj(item)) {
            if (this.collection.length) {
              this.has(item) ? null : this.collection.push(item);
            }
            this.collection.push(item)
        } else {
            return null;
        }
    }
    isObj(obj) {
        return obj !== null && obj.constructor.name === "Object";
    }
    has() { 
        return this.collection.indexOf !== -1;
    }
    delete(idx) {
     this.collection = this.collection.filter((el, i) => i !== idx)
    }
    
}

const newList = new WeakSet()


