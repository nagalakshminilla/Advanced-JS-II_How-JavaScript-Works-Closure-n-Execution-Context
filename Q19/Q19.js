let age = 25;

function displayAge() {
    console.log("Current age:", age);
}

function changeAge() {
    age = 30;
    console.log("Age updated to:", age);
}

console.log("=== Global and Function Execution Context Demo ===");

console.log("\n1. Initial global context:");
displayAge();

console.log("\n2. After calling changeAge function:");
changeAge();

console.log("\n3. After modification - global context updated:");
displayAge();

console.log("\n4. Direct access to global variable:");
console.log("Global age variable:", age);