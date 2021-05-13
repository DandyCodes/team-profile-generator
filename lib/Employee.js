export default class {
  constructor(name, id, email) {
    if (name == undefined || id == undefined || email == undefined) {
      throw "Must have a name, id and email";
    }
    if (typeof id !== "number" || id <= 0) {
      throw "Must have a positive integer for the id";
    }
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
