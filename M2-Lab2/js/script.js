window.addEventListener('load', () => {
  const $ = s => document.querySelector(s);
  const val = id => $(`#${id}`).value;
  $('#employeeForm').addEventListener('submit', e => {
    e.preventDefault();
    console.log(`ID: ${val('id')}`);
    console.log(`Name: ${val('name')}`);
    console.log(`Extension: ${val('ext')}`);
    console.log(`Email: ${val('email')}`);
    console.log(`Department: ${val('department').toLowerCase()}`);
  });
});
