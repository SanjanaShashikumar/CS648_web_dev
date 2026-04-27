const employees = [
  { id: 1, name: "Alice Johnson", role: "Engineer" },
  { id: 2, name: "Bob Smith", role: "Designer" },
  { id: 3, name: "Carol White", role: "Manager" },
  { id: 4, name: "David Lee", role: "Developer" },
];

function EmployeeList() {
  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} — {emp.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EmployeeList />);