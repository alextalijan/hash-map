class HashMap {
  constructor(loadFactor = 0.8, capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = []; // not {}
    for (let i = 0; i < this.capacity; i += 1) {
      this.buckets[i] = [];
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    // If there's already that key, remove it before adding it again
    if (this.has(key)) {
      this.remove(key);
    }
    
    this.buckets[this.hash(key)].push({ key, value });
    if (this.length() > this.capacity * this.loadFactor) {
      this.doubleBuckets();
    }
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];
    if (bucket.length > 0) {
      for (const element of bucket) {
        if (element.key === key) return element.value;
      }
    }

    return null;
  }

  has(key) {
    if (this.get(key)) {
      return true;
    }

    return false;
  }

  remove(key) {
    const bucket = this.buckets[this.hash(key)];
    if (bucket.length > 0) {
      for (const element of bucket) {
        if (element.key === key) {
          bucket.splice(bucket.indexOf(element), 1);
          return true;
        }
      }
    }

    return false;
  }

  length() {
    let numberOfKeys = 0;
    for (const bucket of this.buckets) {
      for (let i = 0; i < bucket.length; i += 1) {
        numberOfKeys += 1;
      }
    }

    return numberOfKeys;
  }

  clear() {
    for (const bucket of this.buckets) {
      for (let i = bucket.length - 1; i >= 0; i -= 1) {
        bucket.splice(i, 1);
      }
    }
  }

  keys() {
    const keys = [];
    for (const bucket of this.buckets) {
      for (const element of bucket) {
        keys.push(element.key);
      }
    }

    return keys;
  }

  values() {
    const values = [];
    for (const bucket of this.buckets) {
      for (const element of bucket) {
        values.push(element.value);
      }
    }

    return values;
  }

  entries() {
    const pairs = [];
    for (const bucket of this.buckets) {
      for (const element of bucket) {
        pairs.push([element.key, element.value]);
      }
    }

    return pairs;
  }

  doubleBuckets() {
    this.capacity *= 2;
    const doubledBuckets = [];
    for (let i = 0; i < this.capacity; i += 1) {
      doubledBuckets[i] = [];
    }

    for (const bucket of this.buckets) {
      for (const element of bucket) {
        doubledBuckets[this.hash(element.key)].push({
          key: element.key,
          value: element.value,
        });
      }
    }

    this.buckets = doubledBuckets;
  }
}

export default HashMap;
