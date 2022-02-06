const newteam = (team) => {

    let html = [];

    const newManager = manager => {

        var managerhtml = `
        <div class="card" style="width: 18rem;">
                   
        <div class="card-body order-first">
            <h5 class="card-title">${manager.name} <br/><br/>👨‍💼 Manager  </h5>



            <ul class="list-group ">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">📧 Email :
                    <a href="mailto:${manager.email}">${manager.email}</a> </a>
                </li>
                <li class="list-group-item">📞 Office number: ${manager.officenumber}</li>
            </ul>
        </div>
       
    </div>
        `;

        html = [...html, managerhtml];
    }

    const newEngineer = engineer => {

        var engineerhtml = `
    <div class="card" style="width: 18rem;">
                   
    <div class="card-body">
        <h5 class="card-title">${engineer.name} <br/><br/>👨‍💻 Engineer </h5>


        <ul class="list-group col">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">📧 Email :
                <a href="mailto:${engineer.email}">${engineer.email}</a> </a>
            </li>
            <li class="list-group-item">💻 Github : <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
  
    </div>
    `;

        html = [...html, engineerhtml]
    }
    const newIntern = intern => {

        var internhtml = `
        <div class="card" style="width: 18rem;">
                   
        <div class="card-body order-last">
            <h5 class="card-title">${intern.name}<br/><br/>👨‍🎓 Intern</h5>


            <ul class="list-group ">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">📧 Email :
                    <a href="mailto:${intern.email}">${intern.email}</a> </a>
                </li>
                <li class="list-group-item">🏫 School: ${intern.school}</li>
            </ul>
        </div>
       
    </div>
    `;

        html = [...html, internhtml]
    }

    for (let i = 0; i < team.length; i++) {
        // console.log(team);

        if (team[i].role === "Manager") {
            newManager(team[i]);
        }
        if (team[i].role === "Engineer") {
            newEngineer(team[i]);
        }
        if (team[i].role === "Intern") {
            newIntern(team[i]);
        }
    }
    // console.log("TEAM HTML", html)
    return html.join('');

}

module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../lib/css/style.css">
    <title>Team Generator</title>
</head>

<body>
    <div class="container">

        <div class="row">

            <div class="col-12 jumbotron mb-3 heading">
            <h1 class = "text-center"> My Team </h1>
            </div>
            </div>
        </div>
        <div class="container">

        <div class="row">

            <div class="information col-12 d-flex justify-content-center">
               ${newteam(team)}
            </div>
            </div>
        </div>
        </body>
        
        </html>`;
}