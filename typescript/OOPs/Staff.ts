import { Person } from "./Person";

export class Staff extends Person {
  constructor(name: string, address: string) {
    super(name, address);
  }

  work(): void {
    console.log(`${this.name} is working.`);
  }

  displayAddress(): void {
    console.log("Staff Address Info:");
    super.displayAddress();
  }
}
