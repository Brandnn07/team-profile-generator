// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const arr = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// const addEmployee = [
//     {
//         type: 'list',
//         message: 'Is there someone else you will like to add?',
//         name: 'empAdd',
//         choices: [
//             'Yes! An Engineer',
//             'Yes! An Intern',
//             'No Thank you!'
//         ]
//     }
// ]
const manager = [
    {
        type: 'input',
        message: 'What is the name of your project manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Is there someone else you will like to add?',
        name: 'empAdd',
        choices: [
            'Yes! An Engineer',
            'Yes! An Intern',
            'No Thank you!'
        ]
    }

]

const engineer = [
    {
        type: 'input',
        message: 'What is the name of your Engineer?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their Github?',
        name: 'github',
    },
    {
        type: 'list',
        message: 'Is there someone else you will like to add?',
        name: 'empAdd',
        choices: [
            'Yes! An Engineer',
            'Yes! An Intern',
            'No Thank you!'
        ]
    }
]
const intern = [
    {
        type: 'input',
        message: 'What is the name of your Intern?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What school did they attend?',
        name: 'school',
    },
    {
        type: 'list',
        message: 'Is there someone else you will like to add?',
        name: 'empAdd',
        choices: [
            'Yes! An Engineer',
            'Yes! An Intern',
            'No Thank you!'
        ]
    }
]


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function callEngineer() {
    inquirer.prompt(engineer)
        .then((data) => {
            const addEngineer = new Engineer(data.name, data.id, data.email, data.github);
            arr.push(addEngineer);
            // console.log(addEngineer);
            if (data.empAdd === 'Yes! An Engineer') {
                callEngineer();
            } else if (data.empAdd === 'Yes! An Intern') {
                callIntern();
            } else {
                console.log("You're all set!");
                allSet(render(arr));
            }
        })
}

function callIntern() {
    inquirer.prompt(intern)
        .then((data) => {
            const addIntern = new Intern(data.name, data.id, data.email, data.school);
            arr.push(addIntern);
            // console.log(addIntern);
            if (data.empAdd === 'Yes! An Engineer') {
                callEngineer();
            } else if (data.empAdd === 'Yes! An Intern') {
                callIntern();
            } else {
                console.log("You're all set!");
                allSet(render(arr));
            }
        })
}

function call() {
    inquirer.prompt(manager)
        .then((data) => {
            const addManager = new Manager(data.name, data.id, data.email, data.officeNumber);
            arr.push(addManager);
            // console.log(addManager);
            if (data.empAdd === 'Yes! An Engineer') {
                callEngineer();
            } else if (data.empAdd === 'Yes! An Intern') {
                callIntern();
            } else {
                console.log("You're all set!");
                allSet(render(arr));
            }
        })
}

const allSet = generateHTML => {
    if (fs.existsSync(outputPath)) {
      fs.writeFile(outputPath, generateHTML, (err) => err ? console.error(err) : console.log('Your team page is up!')
      )
    } else {
      fs.mkdirSync(outputPath)
      fs.writeFile(outputPath, generateHTML, (err) => err ? console.error(err) : console.log('Your team page is updated!')
      )
    }
  }
call();
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
