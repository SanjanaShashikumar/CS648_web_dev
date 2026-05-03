import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeFilter from './employeefilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

class EmployeeRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    render() {
        return (
            <tr>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.role}</td>
                <td>
                    <Button variant="danger" onClick={this.toggleModal}>
                        Delete
                    </Button>

                    <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure you want to delete {this.props.employee.name}?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.toggleModal}>
                                Cancel
                            </Button>
                            <Button variant="danger" onClick={() => {
                                this.props.deleteEmployee(this.props.employee.id);
                                this.toggleModal();
                            }}>
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </td>
            </tr>
        );
    }
}

function EmployeeTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(emp => (
                    <EmployeeRow
                        key={emp.id}
                        employee={emp}
                        deleteEmployee={props.deleteEmployee}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default class EmployeeList extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: [
                { id: 1, name: "Alice Johnson", role: "Engineer" },
                { id: 2, name: "Bob Smith", role: "Designer" },
                { id: 3, name: "Carol White", role: "Manager" },
                { id: 4, name: "David Lee", role: "Developer" },
            ]
        };
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id) {
        this.setState({
            employees: this.state.employees.filter(emp => emp.id !== id)
        });
    }

    render() {
        return (
            <div>
                <h1>Employee List</h1>
                <EmployeeFilter />
                <EmployeeAdd />
                <EmployeeTable
                    employees={this.state.employees}
                    deleteEmployee={this.deleteEmployee}
                />
            </div>
        );
    }
}