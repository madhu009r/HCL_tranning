import { Person } from "./Person";
export class Faculty extends Person {
    constructor(name, address) {
        super(name, address);
    }
    teach() {
        console.log(`${this.name} is teaching.`);
    }
    displayAddress() {
        console.log("Faculty Address Info:");
        super.displayAddress();
    }
}
