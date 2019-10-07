console.log('Functions');

function toggleLight(state, room) {
  if (state) {
    console.log(`light is on in ${room}`);
  }
  console.log(`light is off in ${room}`);
}

toggleLight(true, 'Alexander I');
toggleLight(false, 'Alexander II');

// Anonymous/Named

var myFunction = function() {
  console.log('anonymous function');
};
myFunction();
var myCopyOfFunction = myFunction;
myCopyOfFunction();

// document.getElementById('foo').addEventListener('click', function() {});

// IIFE
// immediately invoked function expression

(function() {})();
var name = 'basti';
(function() {
  var name = 'yara';
  console.log('iife');
  console.log(name);
})();
console.log(name);

// Default Parameters
function greet(name) {
  if (name === undefined) {
    name = '';
  }
  // name = name || '';
  console.log(`Hello ${name}`);
}

greet('Yara');
greet(false);

function greet2(someOtherParam, name = 'World', ...args) {
  // console.log(arguments); // do not use arguments anymore because of pseudo array
  console.log(args.push);
  console.log(`Hello ${name}`);
}

// function greet2() {
//   console.log('overwritten');
// }

greet2('someOtherParam', 'a', 'b', 'c', 'd');

// return values

function add(a, b) {
  a + b;
}

console.log('', add(1, 2));

console.log('suv', someUndefinedVar);
var someUndefinedVar;

// Arrow Functions
function someFunc(item) {
  return item + item;
}

var someFunc2 = function(item) {
  return item + item;
};

const myArr = ['a', 'b', 'c'];

console.log(myArr.map(someFunc2));
console.log(
  myArr.map(function(item) {
    return item + item;
  })
);
console.log(myArr.map(item => item + item));

const myObj = {
  title: 'World',
  greet() {
    setTimeout(function() {
      console.log('Hello', this.title);
    });
  },
  greetInBetween() {
    var self = this;
    setTimeout(function() {
      console.log('Hello', self.title);
    });
  },
  greetInBetween2() {
    setTimeout(
      function() {
        console.log('Hello', this.title);
      }.bind(this)
    );
  },
  greetCorrectly() {
    setTimeout(() => {
      console.log('Hello', this.title);
    });
  },
};

myObj.greet();
myObj.greetCorrectly();
