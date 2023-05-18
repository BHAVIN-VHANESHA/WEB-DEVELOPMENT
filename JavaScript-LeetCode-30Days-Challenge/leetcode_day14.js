// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. 
//Once the duration has elapsed, the key should be inaccessible. 
//The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.


var TimeLimitedCache = function() {
    constructor() 
      this.store = new Map();
  };
  
  /** 
   * @param {number} key
   * @param {number} value
   * @param {number} time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  TimeLimitedCache.prototype.set = function(key, value, duration) {
      if (this.store.has(key)) {
        const entry = this.store.get(key);
        clearTimeout(entry.timer); // Clear previous timer
  
        if (!entry.expired) {
          entry.value = value;
          entry.duration = duration;
          entry.timer = setTimeout(() => {
            entry.expired = true;
            this.store.delete(key);
          }, duration);
          return true;
        }
      }
  
      const timer = setTimeout(() => {
        this.store.get(key).expired = true;
        this.store.delete(key);
      }, duration);
  
      this.store.set(key, {
        value,
        duration,
        expired: false,
        timer,
      });
  
      return false;
  };
  
  /** 
   * @param {number} key
   * @return {number} value associated with key
   */
  TimeLimitedCache.prototype.get = function(key) {
      if (this.store.has(key)) {
        const entry = this.store.get(key);
        if (!entry.expired) {
          return entry.value;
        }
      }
      return -1;
  };
  
  /** 
   * @return {number} count of non-expired keys
   */
  TimeLimitedCache.prototype.count = function() {
      let count = 0;
      for (const entry of this.store.values()) {
        if (!entry.expired) {
          count++;
        }
      }
      return count;
    }
  
  /**
   * Your TimeLimitedCache object will be instantiated and called as such:
   * var obj = new TimeLimitedCache()
   * obj.set(1, 42, 1000); // false
   * obj.get(1) // 42
   * obj.count() // 1
   */