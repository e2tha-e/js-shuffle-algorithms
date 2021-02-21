'use strict';

const a = [0, 1, 2];
const aa = [];
const iterations = 10000;

for (let i = 0, l = iterations; i < l; i++) {
  aa.push([...a]);
}

const begin = Date.now();

for (let i = 0, l = aa.length; i < l; i++) {
  const aaa = aa[i];
  let j = a.length;

  while (j > 1) {
    j--;
    const k = Math.floor(Math.random() * (j + 1));
    [aaa[j], aaa[k]] = [aaa[k], aaa[j]];
  }
}

console.log(Date.now() - begin + ' ms');

let a012 = 0;
let a021 = 0;
let a102 = 0;
let a120 = 0;
let a201 = 0;
let a210 = 0;

for (let i = 0, l = aa.length; i < l; i++) {
  const joined = aa[i].join('');

  switch (joined) {
    case '012':
      a012++;
      break;
    case '021':
      a021++;
      break;
    case '102':
      a102++;
      break;
    case '120':
      a120++;
      break;
    case '201':
      a201++;
      break;
    case '210':
      a210++;
      break;
  }
}

console.log('012:', a012);
console.log('021:', a021);
console.log('102:', a102);
console.log('120:', a120);
console.log('201:', a201);
console.log('210:', a210);
