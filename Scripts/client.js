$(document).ready(readyNow)


// emplty array to store out employees inputed by the user
let employees = [];

function readyNow() {
    console.log('JQUERY WORKING');
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
    $('#tableHead').siblings().empty();
    for (let i = 0; i < employees.length; i++) {
        let employeesInfo = employees[i]

        $('#employeesInfo').append(`
        <tr>
        <td>${employeesInfo.firstName}</td>
        <td>${employeesInfo.lastName}</td>
        <td>${employeesInfo.employeeId}</td>
        <td>${employeesInfo.jobTitle}</td>
        <td>${employeesInfo.annualSalary}</td>
        </tr>
        `);


    }
}
