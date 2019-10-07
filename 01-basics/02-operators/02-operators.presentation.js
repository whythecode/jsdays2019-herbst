console.log('Operators');

// Strict Equal

// ==
// ===

// && ||

const someOne = {
  hairColor: 'blonde',
  country: 'DE',
};

if (someOne.hairColor === 'blonde' && someOne.country === 'DE') {
  console.log('Our condition has worked');
}

if (someOne.hairColor === 'blonde' || someOne.country === 'GB') {
  console.log('Is one of both!');
}

console.log('Condition: ', true || 'Some string');
console.log('Condition2: ', (true && 'Some string') || false);
console.log('Condition3: ', (false && 'Some string') || 'other value');

var someVar = null && 0;
