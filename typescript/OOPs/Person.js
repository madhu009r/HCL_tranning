export class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    displayAddress() {
        console.log(`Address: ${this.address}`);
    }
}
