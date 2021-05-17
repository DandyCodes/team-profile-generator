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
  office: {
    type: "input",
    message: "Office Number:",
    name: "office",
    validate: validatePositiveInteger,
    filter: convertValidAnswerToNumberElseClear,
  },
  github: {
    type: "input",
    message: "Github:",
    name: "github",
  },
  school: {
    type: "input",
    message: "School:",
    name: "school",
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
