import { Student } from "./Student";
import { Faculty } from "./Faculty";
import { Staff } from "./Staff";
// Create objects
const student = new Student("Rahul", "Chennai");
const faculty = new Faculty("Dr. Meena", "Bangalore");
const staff = new Staff("Kumar", "Hyderabad");
// Call methods
student.study();
student.displayAddress();
console.log("----------------");
faculty.teach();
faculty.displayAddress();
console.log("----------------");
staff.work();
staff.displayAddress();
