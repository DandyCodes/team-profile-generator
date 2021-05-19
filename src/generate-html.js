import getEmployeeType from "./get-employee-type.js";
import getUniqueProperty from "./get-unique-property.js";

export default function (team) {
  return `
<!DOCTYPE html>
<html lang="en" class="has-background-light">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
    />
    <link rel="shortcut icon" type="image/jpg" href="./favicon.ico" />
    <title>Team Profile</title>
  </head>
  <body>
    <main class="columns is-multiline is-centered m-5">
      <!-- Cards go here -->
      ${getTeamHTML(team)}
    </main>
  </body>
</html>`;
}

function getTeamHTML(team) {
  let teamHTML = "";
  team.forEach((member) => {
    teamHTML += getMemberHTML(member);
  });
  return teamHTML;
}

function getMemberHTML(member) {
  return `
<div class="card column is-narrow m-3">
  <header class="card-header">
    <p class="card-header-title has-background-${getMemberColor(member)}">${
    member.name
  }</p>
  </header>
  <header class="card-header">
    <p class="card-header-title has-background-${getMemberColor(
      member
    )}">${member.getRole()}</p>
  </header>
  <div class="card-content">
    <p class="box">
      ID: <span>${member.id}</span>
    </p>
    <p class="box">
      Email:
      <span>
        <a href="mailto:${member.email}">${member.email}</a>
      </span>
    </p>
    <p class="box">
      ${getMemberUniquePropertyHTML(member)}
    </p>
  </div>
</div>`;
}

function getMemberUniquePropertyHTML(member) {
  const uniqueProperty = getUniqueProperty(getEmployeeType(member.getRole()));
  return `${uniqueProperty}:
      <span>
        ${getMemberUniqueValueHTML(member, uniqueProperty)}
      </span>`;
}

function getMemberUniqueValueHTML(member, uniqueProperty) {
  const uniqueValue = member[uniqueProperty];
  return uniqueProperty == "GitHub"
    ? `<a target="_blank" href="https://github.com/${uniqueValue}">${uniqueValue}</a>`
    : `${uniqueValue}`;
}

function getMemberColor(member) {
  return member.getRole() == "Manager"
    ? "danger"
    : member.getRole() == "Engineer"
    ? "warning"
    : "success";
}
