// Write your solution in this file!
const employee = {
  name: 'Sam', 
  streetAddress: '11 Broadway'
}
function updateEmployeeWithKeyAndValue (employee, key, value)  {
  let newObject = {...employee, ...{[key]: value}}
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value)  {
  employee[key] = value
  return employee 
}

function deleteFromEmployeeByKey (employee, key)  {
  let erase = {...employee}
  delete erase[key]
  return erase;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
  delete employee[key]
  return employee;
}