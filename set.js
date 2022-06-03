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
    subset(set) { }
}

const list = new Set();
const secondList = new Set();

list.add(1)
list.add(1)
list.add(2)
list.add(2)
list.add("some text")
secondList.add(1)
secondList.add(3);
secondList.add(1)
secondList.add("New text")
secondList.add("some text")

console.log(list)
console.log(secondList)

console.log(list.union(secondList))
console.log(list.difference(secondList))

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


