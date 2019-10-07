console.log('Rest/Spread');

// Rest

function myFunc(a, b, c, ...args) {
  console.log(a, b, c);
  return args;
}

// Spread
const sebastian = [1, 2, 3];
console.log(myFunc(...sebastian));

// Destructuring
const klaus = {
  name: 'Klaus',
  age: 42,
};

const { name: klausSeinFirstname } = klaus;

console.log('ksfn', klausSeinFirstname);

const arr = [klaus, klaus, klaus];

const [, { name: k2SeinEigenenPersönlichenFirstname }] = arr;
let k2SeinEigenenPersönlichenFirstname2 = arr[1].name;
console.log(k2SeinEigenenPersönlichenFirstname);

// Shortcut
const name = 'someOtherName';
const someOtherPerson = {
  name,
  age: 30,
};
