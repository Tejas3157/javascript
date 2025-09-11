let age = 18;
try {
    if (isNaN(age)) {
        throw new Error("Age must be a number");
    }
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    console.log("Age is valid");
}
catch (error) {
    console.error("Error:" + error.message);
}