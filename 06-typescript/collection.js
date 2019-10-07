"use strict";
exports.__esModule = true;
var Collection = /** @class */ (function () {
    function Collection(items) {
        this.items = items;
    }
    Collection.prototype.setItem = function (i) {
        this.items.push(i);
    };
    Collection.prototype.getItems = function () {
        return this.items;
    };
    return Collection;
}());
exports["default"] = Collection;
