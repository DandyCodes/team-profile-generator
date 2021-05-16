import Employee from "./Employee";

export default class extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    if (officeNumber == undefined) {
      throw "Must have an office number";
    }
    if (!Number.isInteger(officeNumber) || officeNumber < 1) {
      throw "Office number must be a positive integer";
    }
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
