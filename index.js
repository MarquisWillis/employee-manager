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