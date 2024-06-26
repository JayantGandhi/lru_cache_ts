export class LRUCache<K, T> {
    private cache: Map<K, T>;
    private capacity: number;
    
    constructor(capacity: number) {
        if (capacity <= 0 || !capacity) throw new Error('Capacity must be greater than 0');

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

    peek(key: K): T | undefined {
        return this.cache.get(key);
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