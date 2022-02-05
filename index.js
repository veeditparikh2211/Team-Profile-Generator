const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generatehtml = require('./src/generatehtml');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const teamMembers = [];

function init() {

    function addmanager() {
        inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'What is Team Managers name ?',

                validate: answer => {

                    if (answer = '') {
                        return 'Please enter a name';
                    }
                    return true
                }
            },
            {
                type: 'input',
                name: 'managerid',
                message: 'What is Team Managers id ?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is Team Managers Email id ?',
            },
            {
                type: 'input',
                name: 'officenumber',
                message: 'What is Team Managers office number ?',
            },

        ]).then(answers => {
            teamMembers.push(new Manager(answers.name, answers.managerid, answers.email, answers.officenumber));
            teamMembers.push(answers.managerid);
            addteam();


        });
    }

    function addteam() {
        inquirer.prompt([

            {
                type: 'list',
                name: 'addemployee',
                message: 'Which type of Team member would you like to add ?',
                choices: ['Engineer', 'Intern', 'Complete']
            },


        ]).then(teamchoice => {
            switch (teamchoice.addemployee) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    createTeam();
            }

        });
    }


    function addEngineer() {

        inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'What is Engineer\'s name ?',
            },
            {
                type: 'input',
                name: 'engineerid',
                message: 'What is Engineer\'s id ?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is Engineer\'s email ?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is Engineer\'s github username ?',
            },

        ]).then(answers => {
            teamMembers.push(new Engineer(answers.name, answers.engineerid, answers.email, answers.github));
            teamMembers.push(answers.engineerid);
            addteam();

        });
    }

    function addIntern() {

        inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'What is Intern\'s name ?',
            },
            {
                type: 'input',
                name: 'internid',
                message: 'What is Intern\'s id ?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is Intern\'s email ?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is Intern\'s school ?',
            },
        ]).then(answers => {
            teamMembers.push(new Intern(answers.name, answers.internid, answers.email, answers.school));
            teamMembers.push(answers.internid);
            addteam();

        });
    }

    function createTeam() {


        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        }
        fs.writeFileSync("./output/team.html", generatehtml(teamMembers), "utf-8");
    }

    addmanager();
}

init();