// var myName;

console.log('Scope');

// Hoisting

console.log(1, myName);

sayMyName();

var myName = 'yara';

console.log(2, myName);

// sayMyName();

function sayMyName() {
  console.log('my name');
  console.log(3, myName);
}

// does not work!
// sayMyName2();
// var sayMyName2 = function() {
//   console.log('my name');
//   console.log(4, myName);
// };

// variable types

var variable1 = 'value'; // global, function, closure
let variable2 = 'value'; // global, function, closure, block
const variable3 = 'value'; // global, function, closure, block

const yara = {
  name: 'yara',
  pet: 'cat',
};

yara.pet = 'dog';
// DOESN'T WORK!! yara = {};

for (let i = 0; i < 10; i++) {}

// ERROR: console.log(i)

// Global

// Function
var someVarOutside = 'someVar';
function myFunc() {
  const myFuncName = 'basti';
  console.log(someVarOutside);
  console.log(myFuncName);
}
// DOESN'T WORK: console.log(myFuncName);

// Closure

// bonus: factory pattern
function outerFunction() {
  const basti = {
    name: 'basti',
    count: 0,
  };
  // return function() {
  //   basti.count++;
  //   console.log(basti.count);
  //   return basti.name;
  // };
  return {
    getName() {
      basti.count++;
      return basti.name;
    },
    setName(name) {
      basti.name = name;
    },
  };
}

var bastiWrapper = outerFunction();

bastiWrapper.getName();
bastiWrapper.getName();
bastiWrapper.getName();

// Block
if (true) {
  let someName = 'yara';
}
// DOESN'T WORK: console.log(someName);

function greet() {
  // nicht machen!
  // let i, j, k;
  // for(i, i < 10; i++) {}
  try {
    let value = 'value';
    // dinge passieren
  } catch (e) {
    console.log('FEHLER!');
  }
  // DOESN'T WORK console.log(value);
  // DOESN'T WORK return value;
}

// IIFE
(function() {
  var ichBinNurHierDrinVerfuegbar = true;
})();

if (true) {
}
