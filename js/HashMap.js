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
}

export default HashMap;
