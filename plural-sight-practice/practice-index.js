let employee = {
  firstName: "Angie",
  lastName: "Politte",
  department: "IT",
  isActive: true,
  title: "Software Developer",
  startDate: new Date("July 1, 2024"),
  numYearsService: 7,
};
console.log(employee);

let badgeColor;

if (employee.numYearsService < 5) {
  employee.badgeColor = "blue";
} else if (employee.numYearsService < 10) {
  employee.badgeColor = "yellow";
} else if (employee.numYearsService < 15) {
  employee.badgeColor = "red";
} else if (employee.numYearsService < 20) {
  employee.badgeColor = "purple";
} else {
  employee.badgeColor = "silver";
}

console.log(
  `Years: ${employee.numYearsService} Badge Color: ${employee.badgeColor}`
);

if (employee.numYearsService > 5 && employee.department === "IT") {
  console.log("Employee meets criteria");
}

if (employee.numYearsService > 10 || employee.title.startsWith("Software")) {
  console.log("Employee meets criteria");
}

if (employee.numYearsService > 20 && !employee.isActive) {
  console.log("Employee is retired");
}
console.log("Employee is not retired");

switch (employee.department) {
  case "IT":
    console.log("Meet in Bldg 1");
    break;
  case "HR":
    console.log("Meet in Bldg 2");
    break;
  case "Legal":
  case "Accounting":
    console.log("Meet in Bldg 3");
    break;
  default:
    console.log("Meet in Bldg 4");
}

// if (employee.numYearsService > 10) {
//     employee.annualBonus = 1000;
// } else {
//     employee.annualBonus = 500;
// }

employee.annualBonus = employee.numYearsService > 10 ? 1000 : 500;
console.log(`${employee.annualBonus}`);
// let value1 = 3;
// value1 += 6; //same thing as value1 = value1 + 6
// console.log(`Value1 is ${value1}`);

// let value7 = 10;
// let value8 = value7++;
// console.log(`Value7: ${value7} and Value8: ${value8}`);

// let value7 = 10;
// let value8 = ++value7;
// console.log(`Value7: ${value7} and Value8: ${value8}`);
