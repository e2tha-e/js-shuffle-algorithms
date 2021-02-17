# js-shuffle-algorithms

This repo is for comparing array shuffling algorithms:

* Array.sort(() => Math.random() - 0.5)
* Fisher-Yates

The scripts take the array [0, 1, 2] and shuffle it 10,000 times. The results 
show the time it took to execute, and the number of times each permutation 
resulted.

Sample results:

#### `node js-sort-random.js`

```
7 ms
012: 3735
021: 609
102: 1290
120: 615
210: 3101
201: 650
```

#### `node fisher-yates.js`

```
9 ms
012: 1694
021: 1636
102: 1687
120: 1633
210: 1668
201: 1682
```

While the Array.sort() + Math.random() algorithm is consistently faster, it is 
not significantly faster, and the poor randomness of the distribution is far too 
great to justify the time savings.
