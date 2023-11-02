// Write your solution in this file!

const employee = {
    name: "Kimberly Palmer",
    streetAddress: "333 Bent Twig Avenue Camarillo CA 93012",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}






/*   ~~~~~~~~~~~~~~~~~~~~~~~~~~~Previous Code~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const employee = {
    name: "Kimberly Palmer",
    streedAddres: "333 Bent Twig Ave",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};

    newEmployee[key] = value;

    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function  deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};

    delete newEmployee[key];

    // return employee
    return newEmployee;
        // delete employee
    }

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

*/