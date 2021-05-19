import Employee from "./Employee.js";

export default class extends Employee {
  constructor(name, id, email, OfficeNumber) {
    super(name, id, email);
    if (OfficeNumber == undefined) {
      throw "Must have an OfficeNumber";
    }
    if (!Number.isInteger(OfficeNumber) || OfficeNumber < 1) {
      throw "OfficeNumber must be a positive integer";
    }
    this.OfficeNumber = OfficeNumber;
  }
  getRole() {
    return "Manager";
  }
}
