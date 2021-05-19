import Employee from "./Employee.js";

export default class extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    if (github == undefined) {
      throw "Must have a GitHub";
    }
    this.GitHub = github;
  }
  getRole() {
    return "Engineer";
  }
  getGitHub() {
    return this.GitHub;
  }
}
