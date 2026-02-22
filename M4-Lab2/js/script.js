
"use strict";

// ===== STORAGE KEY =====
const STORAGE_KEY = "employees";

// ===== INITIAL EMPLOYEES (at least 5) =====
const initialEmployees = [
  [23412341, "Zak Ruvcalaba", 4242, "zruvalca@vectacorp.com", "Executive"],
  [63456345, "Sally Smith", 2423, "sally@vectacorp.com", "Administrative"],
  [59449539, "Mark Martin", 3456, "mark@vectacorp.com", "Marketing"],
  [12341234, "Jane Doe", 1111, "jane@vectacorp.com", "Engineering"],
  [98765432, "John Johnson", 2222, "john@vectacorp.com", "Sales"],
];

// ===== CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS =====
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let employees = (() => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    } catch (_) {
      // fall through to initialEmployees
    }
  }
  return initialEmployees;
})();

// ===== GET DOM ELEMENTS =====
const form = document.querySelector("#addForm");
const empTable = document.querySelector("#empTable");
const empCount = document.querySelector("#empCount");

// ===== BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS =====
buildGrid();

// ===== ADD EMPLOYEE =====
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

  // GET THE VALUES FROM THE TEXT BOXES
  const id = Number(document.querySelector("#id").value.trim());
  const name = document.querySelector("#name").value.trim();
  const extension = Number(document.querySelector("#extension").value.trim());
  const email = document.querySelector("#email").value.trim();
  const department = document.querySelector("#department").value;

  // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
  const newEmployee = [id, name, extension, email, department];

  // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
  employees.push(newEmployee);

  // BUILD THE GRID
  buildGrid();

  // RESET THE FORM
  form.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  document.querySelector("#id").focus();
});

// ===== DELETE EMPLOYEE =====
empTable.addEventListener("click", (e) => {
  // only respond to delete buttons
  if (!e.target.classList.contains("delete")) return;

  // CONFIRM THE DELETE
  const ok = confirm("Are you sure you want to delete this employee?");
  if (!ok) return;

  // GET THE SELECTED ROWINDEX FOR THE TR
  // (rowIndex includes the header row, so subtract 1 for array index)
  const tr = e.target.parentNode.parentNode; // td -> tr
  const index = tr.rowIndex - 1;

  if (index >= 0 && index < employees.length) {
    // REMOVE EMPLOYEE FROM ARRAY
    employees.splice(index, 1);

    // BUILD THE GRID
    buildGrid();
  }
});

// ===== BUILD THE EMPLOYEES GRID =====
function buildGrid() {
  const tbody = empTable.querySelector("tbody");

  // REMOVE THE EXISTING SET OF ROWS
  tbody.innerHTML = "";

  // LOOP THROUGH THE ARRAY OF EMPLOYEES REBUILDING THE ROW STRUCTURE
  for (const emp of employees) {
    const [id, name, ext, email, dept] = emp;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${id}</td>
      <td>${name}</td>
      <td>${ext}</td>
      <td>${email}</td>
      <td>${dept}</td>
      <td><button type="button" class="btn btn-danger btn-sm delete">X</button></td>
    `;

    // Use appendChild() to append each constructed row to the <tbody>
    tbody.appendChild(tr);
  }

  // UPDATE EMPLOYEE COUNT
  empCount.textContent = `(${employees.length})`;

  // STORE THE ARRAY IN STORAGE
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}
