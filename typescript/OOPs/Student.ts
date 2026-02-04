import { Person } from "./Person";

export class Student extends Person {
  constructor(name: string, address: string) {
    super(name, address); // Call parent constructor
  }

  study(): void {
    console.log(`${this.name} is studying.`);
  }

  displayAddress(): void {
    console.log("Student Address Info:");
    super.displayAddress(); // Call parent method
  }
}
