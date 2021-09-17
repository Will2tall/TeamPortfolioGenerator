const team = require('index.js');
const fs = require('fs');

function showManager() {
    const manager = team.filter(a => a.Manager)
    
    for (i =0; i<manager.length; i++) {
        return `
        <div class="card-header">${manager.name[i]}</div>
            <div class="card-body">
                <h5 class="card-title">${manager.id[i]}</h5>
                <h5 class="card-title">${manager.email[i]}</h5>
                <h5 class="card-title">${manager.officeNumber[i]}</h5>
            </div>
        `
    }
}

function showEngineer() {

}

function showIntern() {

}

function generateHTML() {
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
    <row>
        <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
            ${showManager()}
        </div>
    </row>
    <row>
        <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
            
        </div>
    </row>
    <row>
        <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
            
        </div>
    </row>
    `
}

function writeHTML(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', generateHTML(data), err => {
            if(err) {
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'My team webpage created!'
            })
        })
    })
}

module.exports = writeHTML;