console.log('Classes and Objects');

// Class definition
// This
// Arrow Function
// Inheritance
// Constructor
// Static
// Getter/Setter

class Human {
  _schuhgröße;
  constructor(schuhgröße) {
    this._schuhgröße = schuhgröße;
  }

  get schuhgröße() {
    console.log('getter');
    return this._schuhgröße;
  }

  set schuhgröße(schuhgröße) {
    console.log('setter');
    this._schuhgröße = schuhgröße;
  }
}

class Person extends Human {
  constructor(schuhgröße, firstname, lastname, age) {
    // super() MUST BE CALLED FIRST!
    super(schuhgröße);
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  static createFromObject(personObj) {
    // deconstructor syntax:
    const { firstname, lastname, age } = personObj;

    // GEHT, IST ABER NICHT SO DEUTLICH:
    // new this(...)

    return new Person(firstname, lastname, age);
  }

  getFullName() {
    (function() {
      console.log(this.firstname);
    }.bind(this)());
    return `${this.firstname} ${this.lastname}`;
  }

  doSomethingLater() {
    // DOESN'T WORK: setTimeout(function () {});
    // WORKS:
    setTimeout(() => {});
  }
}

// DON'T DO THIS:
// Person.prototype.getAge = function() {
//   return this.age;
// };

const basti = new Person('Basti', 'Springer', 18);
console.log(basti.getFullName());
basti.schuhgröße = 82;
console.log(basti.schuhgröße);
// console.log(basti.getAge());
