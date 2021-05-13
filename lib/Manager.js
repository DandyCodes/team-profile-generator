import Employee from "./Employee";

export default class extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    if (officeNumber == undefined) {
      throw "Must have an office number";
    }
    if (
      typeof officeNumber !== "number" ||
      officeNumber <= 0 ||
      officeNumber % 1 != 0
    ) {
      throw "Office number must be a positive integer";
    }
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
