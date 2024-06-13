import { LRUCache } from "./src";

const cache = new LRUCache<number, string>(2);
cache.put(1, 'one');
cache.put(2, 'two');
console.log(cache.get(1)); // 'one'
console.log(cache.get(2)); // 'two'
cache.put(1, 'updated');
console.log(cache.get(1)); // 'updated'
cache.delete(1);
console.log(cache.get(1)); // undefined
console.log(cache.get(2)); // 'two'
cache.reset();
console.log(cache.get(2)); // undefined