export class Person {
  name: string;
  address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }

  displayAddress(): void {
    console.log(`Address: ${this.address}`);
  }
}
