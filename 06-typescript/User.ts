import Human from './Human.interface';
// Classes
export class User implements Human {
  public size: number;
  constructor(public name: string, size: number) {
    this.size = size;
  }
}
