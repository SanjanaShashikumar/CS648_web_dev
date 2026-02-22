
"use strict";

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.querySelector("#addForm");
const employeeTable = document.querySelector("#employees");
const empCountOutput = document.querySelector("#empCount");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
// (subtract 1 to exclude the header row)
let empCount = employeeTable.rows.length - 1;
empCountOutput.textContent = `(${empCount})`;

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

  // GET THE VALUES FROM THE TEXT BOXES
  const id = document.querySelector("#id").value.trim();
  const name = document.querySelector("#name").value.trim();
  const extension = document.querySelector("#extension").value.trim();
  const email = document.querySelector("#email").value.trim();
  const department = document.querySelector("#department").value;

  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
  const row = employeeTable.insertRow();

  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  const cellID = row.insertCell();
  const cellName = row.insertCell();
  const cellExt = row.insertCell();
  const cellEmail = row.insertCell();
  const cellDept = row.insertCell();
  const cellDelete = row.insertCell();

  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  cellID.appendChild(document.createTextNode(id));
  cellName.appendChild(document.createTextNode(name));
  cellExt.appendChild(document.createTextNode(extension));
  cellEmail.appendChild(document.createTextNode(email));
  cellDept.appendChild(document.createTextNode(department));

  // CREATE THE DELETE BUTTON
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-danger btn-sm delete";
  btn.appendChild(document.createTextNode("X"));
  cellDelete.appendChild(btn);

  // RESET THE FORM
  form.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  document.querySelector("#id").focus();

  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  empCount++;
  empCountOutput.textContent = `(${empCount})`;
});

// DELETE EMPLOYEE (event delegation so it works for dynamically-added rows)
employeeTable.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete")) return;

  // Confirm the deletion
  const ok = confirm("Are you sure you want to delete this employee?");
  if (!ok) return;

  // Find the row (<tr>) containing the clicked delete button
  const row = e.target.closest("tr");
  if (!row) return;

  // Delete the row using its rowIndex
  employeeTable.deleteRow(row.rowIndex);

  // Decrement and display count
  empCount--;
  empCountOutput.textContent = `(${empCount})`;
});
