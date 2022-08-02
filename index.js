const inquirer = require('inquirer');
const db = require('./config/connection');
require('console.table');

db.connect(() => {
    mainMenu();
});

// array of object literals to hold question arrays depending on main menu selection
const mainMenuQuestions = [{
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: ['View all departments', "View all roles",  "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
}];

const addDepartmentQuestions = [{

}];

const addRoleQuestions = [{

}];

const addEmployeeQuestions = [{

}];

const updateEmployeeQuestions = [{

}];



// main inquirer function that will run so as long as the server is connected
function mainMenu() {
    inquirer.prompt(mainMenuQuestions)
    .then(response => {
        if (response.mainMenu === 'View all departments') {
            viewDepartments();
        } else if (response.mainMenu === 'View all roles') {
            viewRoles();
        } else if (response.mainMenu === 'View all employees') {
            viewEmployees();
        } else if (response.mainMenu === 'Add a department') {
            addDepartment();
        } else if (response.mainMenu === 'Add a role') {
            addRole();
        } else if (response.mainMenu === 'Add an employee') {
            addEmployee();
        } else if (response.mainMenu === 'Update an employee role') {
            updateEmployee();
        }
    })
}

function viewDepartments() {

};

function viewRoles() {

};

function viewEmployees() {

};

function addDepartment() {

};

function addRole() {

};

function addEmployee() {
    
};

function updateEmployee() {

};