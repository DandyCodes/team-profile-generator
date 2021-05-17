import buildMember from "./build-member.js";
import inquirer from "inquirer";

export default async function () {
  const team = [];
  team.push(await buildMember("Manager"));
  while (true) {
    const nextMember = await inquirer.prompt({
      type: "list",
      message: "Add another team member?",
      choices: ["Engineer", "Intern", "Finished"],
      name: "role",
    });
    if (nextMember.role == "Finished") break;
    team.push(await buildMember(nextMember.role));
  }
  return team;
}
