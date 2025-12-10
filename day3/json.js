let user = { name: "Aman", age: 21, course: "JS" };

// Step 1: Convert object to JSON string
let jsonData = JSON.stringify(user);

console.log("JSON Data:", jsonData);

// Step 2: Convert JSON string back to object
let newUser = JSON.parse(jsonData);

console.log("Converted Back to Object:", newUser);
