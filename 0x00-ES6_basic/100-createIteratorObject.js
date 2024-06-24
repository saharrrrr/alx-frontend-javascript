export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  let employeeList = [];

  // Collect all employees into a single list
  for (const department in allEmployees) {
    if (allEmployees.hasOwnProperty(department)) {
      employeeList = employeeList.concat(allEmployees[department]);
    }
  }

  // Define the iterator
  return {
    [Symbol.iterator]: function* () {
      for (const employee of employeeList) {
        yield employee;
      }
    }
  };
}
