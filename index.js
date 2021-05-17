import buildTeam from "./src/build-team.js";
import generateHTML from "./src/generate-html.js";

generateHTML(await buildTeam());
