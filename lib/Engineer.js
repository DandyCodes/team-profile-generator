import Employee from "./Employee.js";

export default class extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    if (github == undefined) {
      throw "Must have a github";
    }
    this.GitHub = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.GitHub;
  }
}
