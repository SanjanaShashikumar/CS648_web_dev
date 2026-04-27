const employees = [{
  id: 1,
  name: "Alice Johnson",
  role: "Engineer"
}, {
  id: 2,
  name: "Bob Smith",
  role: "Designer"
}, {
  id: 3,
  name: "Carol White",
  role: "Manager"
}, {
  id: 4,
  name: "David Lee",
  role: "Developer"
}];
function EmployeeList() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Employee List"), /*#__PURE__*/React.createElement("ul", null, employees.map(emp => /*#__PURE__*/React.createElement("li", {
    key: emp.id
  }, emp.name, " \u2014 ", emp.role))));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(EmployeeList, null));