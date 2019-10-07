export default class Collection<T> {
  constructor(private items: T[]) {}

  setItem(i: T) {
    this.items.push(i);
  }

  getItems(): T[] {
    return this.items;
  }
}
