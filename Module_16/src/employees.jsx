import React from 'react';
import ReactDOM from 'react-dom/client';
import EmployeeList from './employeelist.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>
);