import buildMember from "./build-member.js";
import inquirer from "inquirer";

export default async function () {
  const team = [];
  team.push(await buildMember("Manager"));
  let role = await nextRole();
  while (role != "Finished") {
    team.push(await buildMember(role));
    role = await nextRole();
  }
  return team;
}

async function nextRole() {
  const answer = await inquirer.prompt({
    type: "list",
    message: "Add another team member?",
    choices: ["Engineer", "Intern", "Finished"],
    name: "role",
  });
  return answer.role;
}
