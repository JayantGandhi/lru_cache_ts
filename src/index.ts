// lru cache with max size
// 1. get(key) - get the value of the key if the key exists in the cache, otherwise return null.
// 2. put(key, value) - set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
// The cache is initialized with a positive capacity.

class LRUCache<K, T> {
    private cache: Map<K, T>;
    private capacity: number;
    
    constructor(capacity: number) {
        this.cache = new Map<K, T>();
        this.capacity = capacity;
    }
    
    get(key: K): T | undefined {
        if (!this.cache.has(key)) {
            return;
        }
    
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value as T);
    
        return value;
    }
    
    put(key: K, value: T): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size === this.capacity) {
            const keys = this.cache.keys();
            this.cache.delete(keys.next().value);
        }
    
        this.cache.set(key, value);
    }

    delete(key: K): void {
        this.cache.delete(key);
    }

    reset(): void {
        this.cache.clear();
    }
}