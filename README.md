Simple LRU Cache of a fixed size. It evicts the least used item when the capcity is exceeded.

## Usage
```ts
const cache = new LRUCache<number, string>(2);
cache.put(1, 'one');
cache.put(2, 'two');
```

To delete an item in the cache:
```ts
const cache = new LRUCache<number, string>(2);
cache.put(1, 'one');
cache.put(2, 'two');
cache.delete(1);
```

To reset the whole cache:
```ts
cache.reset();
```

## Demo
To run the demo - install with `npm install` and run with `npm run start`