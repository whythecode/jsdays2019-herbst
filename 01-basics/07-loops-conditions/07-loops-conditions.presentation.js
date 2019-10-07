console.log('Loops and Conditions');

// For
for (let i = 0; i < 10; i++) {}

// For..in
const myObject = { name: 'first', age: 20 };
for (let property in myObject) {
  console.log(property);
  console.log(property, myObject[property]);
}
// works only for iterables
// for (let v of myIterable) {
//   console.log(v);
// }
Object.keys(myObject);
Object.values(myObject);
Object.entries(myObject);

// Map
const result = [1, 2, 3, 4, 5].filter(v => v % 2).map(v => v * v);

console.log(result);

// forEach
Object.keys(myObject).forEach(property => console.log(property));

// Reduce
const values = [1, 2, 3, 4, 5];
const total = values.reduce((prev, curr) => prev + curr, 0);

values.reduce(
  (prev, curr) => {
    const result = { ...prev };
    // odd/even
    if (curr % 2) {
      result.odd += curr;
    } else {
      result.even += curr;
    }
    return result;
  },
  { odd: 0, even: 0 }
);
console.log(total);

// Filter
// alles über 3:
const over3 = values.filter(value => value > 3);
console.log(over3);
