const team = require("../index");
const fs = require("fs");

function createTeam(team) {
  function showManager(manager) {
    return `
      <div class="col-3">
        <div class="card text-dark bg-info mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 18rem;">
            <div class="card-header">Manager</div>
                <div class="card-body">
                    <h5 class="card-title">${manager.getName()}</h5>
                    <h5 class="card-title">${manager.getId()}</h5>
                    <h5 class="card-title"><a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></h5>
                    <h5 class="card-title">${manager.getOfficeNumber()}</h5>
                </div>
        </div>
      </div>
            `;
  }

  function showEngineer(engineer) {
    return `
    <div class="col-3">
    <div class="card text-dark bg-info mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 18rem;">
        <div class="card-header">Engineer</div>
            <div class="card-body">
                <h5 class="card-title">${engineer.getName()}</h5>
                <h5 class="card-title">${engineer.getId()}</h5>
                <h5 class="card-title"><a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></h5>
                <h5 class="card-title"><a href="https://github.com/${engineer.getGitHub()}" target="_blank">https://github.com/${engineer.getGitHub()}</a></h5>
            </div>
    </div>
    </div>
        `;
  }

  function showIntern(intern) {
    return `
      <div class="col-3">
        <div class="card text-dark bg-info mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 18rem;">
            <div class="card-header">Intern</div>
                <div class="card-body">
                    <h5 class="card-title">${intern.getName()}</h5>
                    <h5 class="card-title">${intern.getId()}</h5>
                    <h5 class="card-title"><a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></h5>
                    <h5 class="card-title">${intern.getSchool()}</h5>
                </div>
        </div>
      </div>
    `;
  }

  let html= [];

  html.push(team.filter(emp => emp.getRole() === "Manager").map(manager => showManager(manager)))
  html.push(team.filter(emp => emp.getRole() === "Engineer").map(engineer => showEngineer(engineer)))
  html.push(team.filter(emp => emp.getRole() === "Intern").map(intern => showIntern(intern)))

  return html.join("")
}

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
        <div class="p-3 mb-2 bg-primary.bg-gradient text-dark">
            <p class="text-center fs-1">MY TEAM</p>
        </div>
    </header>
    <div class="container">
    <div class="row">
      ${createTeam(team)}
    </div>
    </div>
    `;
}

const writeHTML = data => {
  //console.log('data', data)
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", generateHTML(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "My team webpage created!"
      });
    });
  });
}

module.exports = writeHTML;
