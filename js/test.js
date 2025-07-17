import HashMap from './HashMap.js';

const test = new HashMap(0.75);

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('moon', 'silver');

console.log(test.get('apple')); // red
console.log(test.get('smoke')); // null

console.log(test.has('jacket')); // true
console.log(test.has('water')); // false
console.log(test.has('ice cream')); // true

console.log(test.remove('frog')); // true
console.log(test.remove('fly')); // false

console.log(test.length()); // 12

console.log(test.keys()); // ['apple', 'banana', 'carrot' ...]
console.log(test.values()); // ['red', 'yellow', 'orange' ...]
console.log(test.entries()); // [['apple', 'red'], ['banana', 'yellow'], ['carrot', 'orange'] ...]

test.clear();
console.log(test.length()); // 0
console.log(test);