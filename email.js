const email = prompt("Enter your email");

const checking = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

if (checking.test(email)) {
  alert("Login Successful");
} else {
  alert("You entered an invalid email");
}