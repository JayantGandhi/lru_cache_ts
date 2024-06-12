import {expect, describe, it} from 'vitest';
import { LRUCache } from '.';

describe('LRUCache', () => {
    it('should get and put values', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(2, 'two');
        expect(cache.get(1)).toBe('one');
        expect(cache.get(2)).toBe('two');
    });

    it('should delete values', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.delete(1);
        expect(cache.get(1)).toBe(undefined);
        expect(cache.get(2)).toBe('two');
    });

    it('should reset cache', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.reset();
        expect(cache.get(1)).toBe(undefined);
        expect(cache.get(2)).toBe(undefined);
    });

    it('should invalidate least recently used item', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.put(3, 'three');
        expect(cache.get(1)).toBe(undefined);
        expect(cache.get(2)).toBe('two');
        expect(cache.get(3)).toBe('three');
    });

    it('should update order of keys when get is called', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.get(1);
        cache.put(3, 'three');
        expect(cache.get(1)).toBe('one');
        expect(cache.get(2)).toBe(undefined);
        expect(cache.get(3)).toBe('three');
    });

    it('should not update order of keys when peek is called', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.peek(1);
        cache.put(3, 'three');
        expect(cache.get(1)).toBe(undefined);
        expect(cache.get(2)).toBe('two');
        expect(cache.get(3)).toBe('three');
    });

    it('should throw error if capacity is less than 1', () => {
        expect(() => new LRUCache<number, string>(0)).toThrowError('Capacity must be greater than 0');
    });

    it('should throw an error if no capacity is provided', () => {
        expect(() => new LRUCache<number, string>(undefined as any)).toThrowError('Capacity must be greater than 0');
    });

    it('can handle complex types', () => {
        const cache = new LRUCache<number, {name: string}>(2);
        cache.put(1, {name: 'one'});
        cache.put(2, {name: 'two'});
        expect(cache.get(1)).toEqual({name: 'one'});
        expect(cache.get(2)).toEqual({name: 'two'});
    });
});