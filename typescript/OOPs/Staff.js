import { Person } from "./Person";
export class Staff extends Person {
    constructor(name, address) {
        super(name, address);
    }
    work() {
        console.log(`${this.name} is working.`);
    }
    displayAddress() {
        console.log("Staff Address Info:");
        super.displayAddress();
    }
}
