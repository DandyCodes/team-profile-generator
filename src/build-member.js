import inquirer from "inquirer";
import questions from "./questions.js";
import Manager from "../lib/Manager.js";
import Engineer from "../lib/Engineer.js";
import Intern from "../lib/Intern.js";
const roles = new Map([
  ["Manager", Manager],
  ["Engineer", Engineer],
  ["Intern", Intern],
]);

export default async function (role) {
  const answers = await inquirer.prompt([
    questions.name,
    questions.id,
    questions.email,
    getSpecialQuestion(role, questions),
  ]);
  return new (roles.get(role))(
    answers.name,
    Number(answers.id),
    answers.email,
    getSpecialAnswer(role, answers)
  );
}

function getSpecialQuestion(role, questions) {
  return role == "Manager"
    ? questions.office
    : role == "Engineer"
    ? questions.github
    : questions.school;
}

function getSpecialAnswer(role, answers) {
  return role == "Manager"
    ? Number(answers.office)
    : role == "Engineer"
    ? answers.github
    : answers.school;
}
