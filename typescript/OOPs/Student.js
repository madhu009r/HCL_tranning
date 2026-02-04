import { Person } from "./Person";
export class Student extends Person {
    constructor(name, address) {
        super(name, address); // Call parent constructor
    }
    study() {
        console.log(`${this.name} is studying.`);
    }
    displayAddress() {
        console.log("Student Address Info:");
        super.displayAddress(); // Call parent method
    }
}
