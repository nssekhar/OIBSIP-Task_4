const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const securedContent = document.getElementById("securedContent");
function register() {
    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;

    localStorage.setItem("username", regUsername);
    localStorage.setItem("password", regPassword);

    alert("Registration successful!");
    showLoginForm();
}
function login() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const regUsername = localStorage.getItem("username");
    const regPassword = localStorage.getItem("password");

    if (loginUsername === regUsername && loginPassword === regPassword) {
        showSecuredContent();
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
function showLoginForm() {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
}
function showSecuredContent() {
    loginForm.style.display = "none";
    securedContent.style.display = "block";
}
const regUsername = localStorage.getItem("username");
if (regUsername) {
    showLoginForm();
}