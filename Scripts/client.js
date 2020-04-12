$(document).ready(readyNow)


// emplty array to store out employees inputed by the user
let employees = [];
let monthlyTotal = 0;



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
        `)

        //divide annual salary by 12 and append to the DOM
        monthlyTotal += Math.trunc(`${employees[i].annualSalary}`) / 12;
        console.log('monthly total:', monthlyTotal);
        $('#monthlyExpense').empty();
        $('#monthlyExpense').append(" $", monthlyTotal);

        //create redbackground if we excced 20k
        if(monthlyTotal > 20000){
            $('#monthlyExpense').addClass('red')
        }

    }
}