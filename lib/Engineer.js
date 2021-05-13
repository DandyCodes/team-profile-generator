import Employee from "./Employee";

export default class extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    if (github == undefined) {
      throw "Must have a github";
    }
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}
