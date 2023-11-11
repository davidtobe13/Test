function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    // Password should be at least 8 characters long and contain one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

function authenticate() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value;
    const password = passwordInput.value;

    if (validateEmail(email) && validatePassword(password)) {
        alert("Authentication successful! Welcome, " + email);
    } else {
        alert("Authentication failed. Please check your email and password.");
    }
}
