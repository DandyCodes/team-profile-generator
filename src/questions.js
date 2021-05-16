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
  return !Number.isInteger(Number(answer)) || Number(answer) < 1
    ? "Must be a positive integer"
    : true;
}
