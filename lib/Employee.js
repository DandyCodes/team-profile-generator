export default class {
  constructor(name, id, email) {
    const isLackingProperties = (!name || !id || !email) && id !== 0;
    if (isLackingProperties) {
      throw "Must have a name, id and email";
    }
    const idIsPositiveInteger = typeof id === "number" && id > 0;
    if (!idIsPositiveInteger) {
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
