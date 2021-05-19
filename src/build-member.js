import inquirer from "inquirer";
import questions from "./questions.js";
import getEmployeeType from "./get-employee-type.js";
import getUniqueProperty from "./get-unique-property.js";

export default async function (role) {
  console.log(role);
  const EmployeeType = getEmployeeType(role);
  const uniqueProperty = getUniqueProperty(EmployeeType);
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
