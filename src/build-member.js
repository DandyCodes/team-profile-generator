import inquirer from "inquirer";
import questions from "./questions.js";
import Manager from "../lib/Manager.js";
import Engineer from "../lib/Engineer.js";
import Intern from "../lib/Intern.js";
const employeeTypes = new Map([
  ["Manager", Manager],
  ["Engineer", Engineer],
  ["Intern", Intern],
]);

export default async function (role) {
  const EmployeeType = employeeTypes.get(role);
  const uniqueProperty =
    EmployeeType == Manager
      ? "office"
      : EmployeeType == Engineer
      ? "github"
      : "school";
  const answers = await inquirer.prompt([
    questions.name,
    questions.id,
    questions.email,
    questions[uniqueProperty],
  ]);
  return new EmployeeType(
    answers.name,
    answers.id,
    answers.email,
    answers[uniqueProperty]
  );
}
