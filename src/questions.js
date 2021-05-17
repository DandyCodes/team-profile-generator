export default {
  name: {
    type: "input",
    message: "Name: ",
    name: "name",
  },
  id: {
    type: "input",
    message: "ID number: ",
    name: "id",
    validate: validatePositiveInteger,
    filter: convertValidAnswerToNumberElseClear,
  },
  email: {
    type: "input",
    message: "Email:",
    name: "email",
  },
  OfficeNumber: {
    type: "input",
    message: "Office Number:",
    name: "OfficeNumber",
    validate: validatePositiveInteger,
    filter: convertValidAnswerToNumberElseClear,
  },
  GitHub: {
    type: "input",
    message: "GitHub:",
    name: "GitHub",
  },
  School: {
    type: "input",
    message: "School:",
    name: "School",
  },
};

function validatePositiveInteger(answer) {
  return isPositiveInteger(answer) ? true : "Must be a positive integer";
}

function isPositiveInteger(answer) {
  return Number.isInteger(Number(answer)) && Number(answer) > 0;
}

function convertValidAnswerToNumberElseClear(answer) {
  return isPositiveInteger(answer) ? Number(answer) : "";
}
