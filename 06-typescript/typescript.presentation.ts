import { User } from './User';
import Human from './Human.interface';
import Collection from './collection';

// How it works
// Types
const myName: string = 'Yara';

// const myName: String = new String('Yara');

let myLastName = 'Mayer';
//myLastName = 0;

const age: number = 20;

const yara: User = new User('yara', 400);
//const yara2: User = 'y';

class Person {
  constructor(public name: string, public size: number) {}
}

function greet(user: Person): void {
  console.log('Hello', user.name);
}

greet(yara as Person);

// Interfaces
const obj: Human = {
  size: 12,
};

// Generics
const myCollection = new Collection<User>([yara]);
// myCollection.setItem('foo');

const myUsers = myCollection.getItems();

enum Food {
  schnitzel = 'bla',
  würstchen = 'foo',
}

console.log(Food.schnitzel);

//
//
