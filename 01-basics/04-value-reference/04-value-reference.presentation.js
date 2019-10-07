console.log('Value / Reference');

// Value / Reference

// Copying objects
// https://github.com/immerjs/immer
// https://github.com/kolodny/immutability-helper
// https://github.com/immutable-js/immutable-js
// https://lodash.com/
// <script src="lodash.js"></script>

const { cloneDeep } = require('lodash');

function deepCopyObject(theObjectToCopy) {
  // DON'T DO THIS!!! Object.assign({}, theObjectToCopy)
  // DON'T DO THIS!!! { ...theObjectToCopy }
  // NOT IF YOU HAVE FUNCTIONS!!! JSON.parse(JSON.stringify(theObjectToCopy))

  return cloneDeep(theObjectToCopy);
}

var yara20 = {
  firstname: 'yara',
  lastname: 'mayer',
  age: 20,
  pet: {
    name: 'mary',
    type: 'cat',
  },
};

const clone = deepCopyObject(yara20);
clone.pet.name = 'Susi';

console.log(clone === yara20);
console.log(yara20);
console.log(clone);
