import Employee from "./Employee";

export default class Manager extends Employee {
  getRole() {
    return "Manager";
  }
}
