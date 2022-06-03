class Set {
    collection = [];

    add(el) { 
        if (this.collection.length) {
          return this.has(el) ? null : this.collection.push(el);
        }
        this.collection.push(el);
    }
    
    delete(el) { 
        this.collection = this.collection.filter(item => item !== el);
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
        return { ...this.collection };
    }
    union(set) {
        let result = [];
        let arr = Array.from(set.collection);
        result = this.collection
            .filter(el => arr.indexOf(el) !== -1)
        return result;
     }
    difference(set) {
        let result = [];
        let arr = Array.from(set.collection);
        result = this.collection
            .filter(el => arr.indexOf(el) === -1)
            .concat(arr.filter(el => this.collection.indexOf(el) === -1))
        return result;
     }
    subset(set) {
        let arr = Array.from(set.collection);
        return arr.every(el => this.collection.includes(el))
    }
}

class WeakSet {
    collection = [];

    add(item) { 
        if (this.isObj(item)) {
            if (this.collection.length) {
              this.has(item) ? null : this.collection.push(item);
            }
            this.collection.push(item);
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
        if (idx < 0 || idx > this.collection.length) {
            return null;
        }
        this.collection = this.collection.filter((el, i) => i !== idx);
    }
    
}


