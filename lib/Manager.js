import Employee from "./Employee";

export default class extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    if (officeNumber == undefined) {
      throw "Must have an office number";
    }
    if (typeof officeNumber !== "number" || officeNumber <= 0) {
      throw "Must have a positive integer for the office number";
    }
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
