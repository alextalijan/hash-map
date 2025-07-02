class HashMap {
  constructor(capacity, loadFactor) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = {};
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    if (this.buckets.length > this.capacity * this.loadFactor) {
      const doubledBuckets = {};
      for (const hash in this.buckets) {
        doubledBuckets[hash] = this.buckets[hash];
      }

      this.buckets = doubledBuckets;
    }

    this.buckets[this.hash(key)] = value;
  }

  get(key) {
    if (this.buckets[this.hash(key)]) {
      return this.buckets[this.hash(key)];
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
    if (this.has(key)) {
      delete this.get(key);
      return true;
    }

    return false;
  }

  length() {
    return Object.keys(this.buckets).length;
  }
}

export default HashMap;
