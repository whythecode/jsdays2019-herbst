console.log('Datatypes');

console.group('Standard Objects');

console.log(Math);
console.log(String);
console.log(RegExp);
console.log(Array);

console.groupEnd();
console.log('------------------------------');

console.group('Types');

// primitives
var myName = 'Yara';
var hisAge = 30;
var heIsNice = true;
var noValue = null;
var iReallyDontHaveAValue;
console.log(noValue);
console.log(iReallyDontHaveAValue);

if (iReallyDontHaveAValue === undefined) {
  console.log('iReallyDontHaveAValue is undefined');
}

// complex types
var yara = {
  firstname: 'Yara',
  lastname: 'Mayer',
  age: 20,
  isNice: false,
  pet: {
    type: 'cat',
    name: 'fiona',
  },
  things: [],
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  },
  getFirstName() {
    return this.firstname;
  },
  getLastName: () => {
    return this.lastname;
  },
};

const basti = new Object();
basti.age = 42;

// assign to other variable (reference)
var yara30 = yara;
yara.age = 30;
console.log(yara.age);
console.log(yara30.age);

// flache kopie
var yara40 = Object.assign({}, yara);
// var yara40 = {...yara};
yara40.pet.name = 'Dorothy';
yara40.things.push(1);

console.log(yara.pet.name);
console.log(yara40.pet.name);
console.log(yara.things);
console.log(yara40.things);

var countries = [];

console.groupEnd();
console.log('------------------------------');

console.group('Casting');

var someNotRealNumber = '30';
//someNotRealNumber = 30;
//someNotRealNumber = { number: 30 };

var strSomeNotRealNumber = '30';
var objSomeStrangeObj = {};
var isSomethingBoolean = true;

var someRealNumber = parseInt(someNotRealNumber, 10);
console.log(typeof someNotRealNumber);
console.log(typeof someRealNumber);
console.log(typeof ('' + someNotRealNumber));
console.log(typeof !!someNotRealNumber);
console.log(typeof (30).toString());

console.groupEnd();
console.log('------------------------------');

console.group('Truthy/Falsy');
function isFalsyOrTruthy(value) {
  var valueIsTruthy = !!value;
  console.log(value ? `${value} is truthy` : `${value} is falsy`);
}
isFalsyOrTruthy(0);

const value = true;
if (value === true) {
  console.log('value is true');
}

var obj1 = { name: 'yara' };
var obj2 = { name: 'yara' };

//const obj1 = 'Hallo Welt';
//const obj2 = 'Hallo Welt';

if (obj1 === obj2) {
  console.log('objects are same');
}

//if (value) {}
if (value === null || value === undefined || value === false) {
}

console.groupEnd();
console.log('------------------------------');

console.group('Strings');
const s1 = 'Hallo \n "" Welt';
const s2 = "Hallo \n '' Welt";
const s3 = `Hallo ${s1} Welt`;

console.groupEnd();
console.log('------------------------------');
