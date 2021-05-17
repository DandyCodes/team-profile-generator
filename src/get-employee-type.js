import Manager from "../lib/Manager.js";
import Engineer from "../lib/Engineer.js";
import Intern from "../lib/Intern.js";

const employeeTypes = new Map([
  ["Manager", Manager],
  ["Engineer", Engineer],
  ["Intern", Intern],
]);

export default (role) => employeeTypes.get(role);
