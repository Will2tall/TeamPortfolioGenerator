const team = require("index.js");
const fs = require("fs");

function createTeam() {
  function showManager(manager) {
    return `
        <row>
        <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
            <div class="card-header">Manager</div>
                <div class="card-body">
                    <h5 class="card-title">${manager.getName()}</h5>
                    <h5 class="card-title">${manager.getId()}</h5>
                    <h5 class="card-title">${manager.getEmail()}</h5>
                    <h5 class="card-title">${manager.getOfficeNumber()}</h5>
                </div>
        </div>
        </row>
            `;
  }

  function showEngineer(engineer) {
    return `
    <row>
    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Engineer</div>
            <div class="card-body">
                <h5 class="card-title">${engineer.getName()}</h5>
                <h5 class="card-title">${engineer.getId()}</h5>
                <h5 class="card-title">${engineer.getEmail()}</h5>
                <h5 class="card-title">${engineer.getOfficeNumber()}</h5>
            </div>
    </div>
    </row>
        `;
  }

  function showIntern(intern) {
    return `
    <row>
        <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
            <div class="card-header">Intern</div>
                <div class="card-body">
                    <h5 class="card-title">${intern.getName()}</h5>
                    <h5 class="card-title">${intern.getId()}</h5>
                    <h5 class="card-title">${intern.getEmail()}</h5>
                    <h5 class="card-title">${intern.getOfficeNumber()}</h5>
                </div>
        </div>
        </row>
    `;
  }

  let html= [];

  html.push(team.filter(emp => emp.getRole() === "Manager").map(manager => showManager(manager)))
  html.push(team.filter(emp => emp.getRole() === "Engineer").map(engineer => showEngineer(engineer)))
  html.push(team.filter(emp => emp.getRole() === "Intern").map(intern => showIntern(intern)))

  return html.join("")
}

// function showManager() {
//   const manager = team.filter((a) => a.Manager);

//   for (i = 0; i < manager.length; i++) {
//     return `
//         <div class="card-header">${manager.name[i]}</div>
//             <div class="card-body">
//                 <h5 class="card-title">${manager.id[i]}</h5>
//                 <h5 class="card-title">${manager.email[i]}</h5>
//                 <h5 class="card-title">${manager.officeNumber[i]}</h5>
//             </div>
//         `;
//   }
// }


function generateHTML(team) {
  return `
    <!DOCTYPE html>
    <htl lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    </head>

    <body>
    <header>
        <div class="bg-primary.bg-gradient">
            <p class="text-center fs-1">MY TEAM</p>
        </div>
    </header>
    <section>
      ${createTeam(team)}
    </section>
    `;
}

const writeHTML = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", generateHTML(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "My team webpage created!",
      });
    });
  });
}

module.exports = writeHTML;
