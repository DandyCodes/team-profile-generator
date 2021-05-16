export default class {
  constructor(name, id, email) {
    if (name == undefined || id == undefined || email == undefined) {
      throw "Must have a name, id and email";
    }
    if (!Number.isInteger(id) || id < 1) {
      throw "Id must be a positive integer";
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
