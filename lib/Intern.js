import Employee from "./Employee.js";

export default class extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    if (school == undefined) {
      throw "Must have a school";
    }
    this.School = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.School;
  }
}
