// Prompt the user for two integers
var num1 = parseInt(prompt("Enter the first integer:"), 10);
var num2 = parseInt(prompt("Enter the second integer:"), 10);

// Compare the numbers and display the result
if (num1 > num2) {
    document.write("The larger number is: " + num1);
} 
else if (num2 > num1) {
    document.write("The larger number is: " + num2);
} 
else {
    document.write("Both numbers are equal.");
}
