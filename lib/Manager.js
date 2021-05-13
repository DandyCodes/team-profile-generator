import Employee from "./Employee";

export default class extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    const isLackingOfficeNumber = !officeNumber && officeNumber !== 0;
    if (isLackingOfficeNumber) {
      throw "Must have an office number";
    }
    const officeNumberIsPositiveInteger =
      typeof officeNumber === "number" && officeNumber > 0;
    if (!officeNumberIsPositiveInteger) {
      throw "Must have a positive integer for the office number";
    }
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
