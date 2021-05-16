import inquirer from "inquirer";

export default class {
  buildManager() {
    const answers = inquirer.prompt([
      {
        type: "input",
        message: "Name of manager: ",
        name: "name",
      },
      {
        type: "input",
        message: "ID number: ",
        name: "id",
        validate: (input) =>
          !Number.isInteger(input) ? "Must be a number" : true,
      },
    ]);
  }
}
