import buildTeam from "./src/build-team.js";
import generateHTML from "./src/generate-html.js";
import fs from "fs";

const team = await buildTeam();
team.sort((a, b) =>
  a.getRole() == "Engineer" && b.getRole() == "Intern" ? -1 : 1
);
fs.writeFile("./dist/team-proifile.html", generateHTML(team), (error) =>
  console.log(error ? error : "Generating Team Profile...")
);
