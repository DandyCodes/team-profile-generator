import Manager from "../lib/Manager.js";
import Engineer from "../lib/Engineer.js";

export default (EmployeeType) =>
  EmployeeType == Manager
    ? "OfficeNumber"
    : EmployeeType == Engineer
    ? "GitHub"
    : "School";
