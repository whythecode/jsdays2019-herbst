"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var collection_1 = require("./collection");
// How it works
// Types
var myName = 'Yara';
// const myName: String = new String('Yara');
var myLastName = 'Mayer';
//myLastName = 0;
var age = 20;
var yara = new User_1.User('yara', 400);
//const yara2: User = 'y';
var Person = /** @class */ (function () {
    function Person(name, size) {
        this.name = name;
        this.size = size;
    }
    return Person;
}());
function greet(user) {
    console.log('Hello', user.name);
}
greet(yara);
// Interfaces
var obj = {
    size: 12
};
// Generics
var myCollection = new collection_1["default"]([yara]);
// myCollection.setItem('foo');
var myUsers = myCollection.getItems();
var Food;
(function (Food) {
    Food[Food["schnitzel"] = 0] = "schnitzel";
    Food[Food["w\u00FCrstchen"] = 1] = "w\u00FCrstchen";
})(Food || (Food = {}));
console.log(Food.schnitzel);
