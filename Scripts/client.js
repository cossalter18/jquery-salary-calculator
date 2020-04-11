$(document).ready(readyNow)


// emplty array to store out employees inputed by the user
let employees = [];

//this variable will store the inputed annual salarys
let monthlyCost = 0;


function readyNow() {
    console.log('JQUERY UP IN THIS BITCH');
    $('#addEmployeeButton').on('click', addEmployee);
    $('#addEmployeeButton').on('click', addTable);
}

function addEmployee() {
    console.log('in addEmployee');
    //get user inputs and place into an object
    //push object into array
    let employeeToAdd = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        employeeId: $('#employeeIdIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    } //end employeeToAdd
    console.log('employeeToAdd', employeeToAdd)
    employees.push(employeeToAdd)


    //empty values
    $('#firstNameIn').val('')
    $('#lastNameIn').val('')
    $('#employeeIdIn').val('')
    $('#jobTitleIn').val('')
    $('#annualSalaryIn').val('')
}
function addTable() {
    $('#employeesData').empty();
    for (let i = 0; i < employees.length; i++) {
        let employeesData = employees[i]
        $('#employeesData').append(`
        <tr>
        <td>${employeesData.firstName}</td>
        <td>${employeesData.lastName}</td>
        <td>${employeesData.employeeId}</td>
        <td>${employeesData.jobTitle}</td>
        <td>${employeesData.annualSalary}</td>
        <td data-id="${i}"><button class=btn bt-sm btn-delete">Delete</button></td></tr>`);
    }}