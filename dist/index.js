"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRUCache = void 0;
class LRUCache {
    constructor(capacity) {
        if (capacity <= 0 || !capacity)
            throw new Error('Capacity must be greater than 0');
        this.cache = new Map();
        this.capacity = capacity;
    }
    get(key) {
        if (!this.cache.has(key)) {
            return;
        }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    peek(key) {
        return this.cache.get(key);
    }
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        else if (this.cache.size === this.capacity) {
            const keys = this.cache.keys();
            this.cache.delete(keys.next().value);
        }
        this.cache.set(key, value);
    }
    delete(key) {
        this.cache.delete(key);
    }
    reset() {
        this.cache.clear();
    }
}
exports.LRUCache = LRUCache;
