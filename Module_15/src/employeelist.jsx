import React from 'react';
import EmployeeFilter from './employeefilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

const employees = [
  { id: 1, name: "Alice Johnson", role: "Engineer" },
  { id: 2, name: "Bob Smith", role: "Designer" },
  { id: 3, name: "Carol White", role: "Manager" },
  { id: 4, name: "David Lee", role: "Developer" },
];

function EmployeeRow(props) {
    return (
        <li>
            {props.employee.name} — {props.employee.role}
        </li>
    );
}

function EmployeeTable(props) {
    return (
        <ul>
            {props.employees.map(emp => (
                <EmployeeRow key={emp.id} employee={emp} />
            ))}
        </ul>
    );
}

export default class EmployeeList extends React.Component {
    render() {
        return (
            <div>
                <h1>Employee List</h1>
                <EmployeeFilter />
                <EmployeeAdd />
                <EmployeeTable employees={employees} />
            </div>
        );
    }
}