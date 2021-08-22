const db = require('./config/connection');
const mysql = require("MYSQL2")
const inquirer = require("inquirer");
const cTable = require('console.table');

db.connect(err => {
	if (err) throw err;
	afterConnection();
});

afterConnection = () => {
	console.log(`
	********************
	******Employee******
	******Tracker*******
	********************`)
startQuestions()
}

function startQuestions() {
	inquirer
		.prompt({
			type: "list",
			name: "task",
			message: "what would you like to do?",
			choices: Object.keys(operations)
		})
		.then (({ task }) => operations[stask]())
}

const operations = {
	"View Employees": viewEmployees,
	"View Roles": viewRoles,
	"View Departments": viewDepartments,
	"Add Employee": addEmployees,
	"Update Employee Role": updateEmployees,
	"Add Department": addDepartments,
	"Add Roles": addRoles
}



function viewEmployees() {
	let query = `SELECT * FROM employee`
db.query(query, function(err, results) {
	if (err) throw err;
	console.table(results);
});
}

function addEmployees() {
	let query = `INSERT INTO employee (id, first_name, last_name, manager_id, roles_id) values ?, ?, ?, ?, ?`
db.query(query, function(err, results) {
	if (err) throw err;
	console.table(results);
});
}

function updateEmployees() {
	let query = `Update employee set roles_id = ? where employee_id = ?`
db.query(query, function(err, results) {
	if (err) throw err;
	console.table(results);
});
}

function viewDepartments() {
	let query = `SELECT * FROM department`
db.query(query, function(err, results) {
	if (err) throw err;
	console.table(results);
});
}

function addDepartments() {
	let query = `INSERT INTO department (id, name) VALUES (?,?)`
db.query(query, function(err, results) {
	if (err) throw err;
	console.table(results);
});
}

function viewRoles() {
	let query = `SELECT * FROM roles`
db.query(query, function(err, results) {
	if (err) throw err;
	console.table(results);
});
}

function addRoles() {
	let query = `INSERT INTO roles (id, title, salary, department_id) VALUES (?,?,?,?)`
db.query(query, function(err, results) {
	if (err) throw err;
	console.table(results);
});
}


