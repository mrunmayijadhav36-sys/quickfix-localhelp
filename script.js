function showSignup() {
document.getElementById("loginPage").style.display = "none";
document.getElementById("signupPage").style.display = "block";
}

function showLogin() {
document.getElementById("signupPage").style.display = "none";
document.getElementById("loginPage").style.display = "block";
}

function login() {
let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

```
if (email === "" || password === "") {
    alert("Please enter your email and password.");
} else {
    window.location.href = "home.html";
}
```

}

function createAccount() {
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

```
if (name === "" || email === "" || password === "") {
    alert("Please fill all the fields.");
} else {
    alert("Account created successfully!");
    showLogin();
}
```

}

function logout() {
window.location.replace("index.html");
}

function openServices() {
window.location.href = "services.html";
}

/* STEP 2B - SELECT A SERVICE */

function selectService(service) {
window.location.href =
"service-profiles.html?service=" + encodeURIComponent(service);
}

/* TOP NAVIGATION */

function openQuickMatch() {
alert("Quick Match coming next!");
}

function openSnapFix() {
alert("Snap & Fix coming next!");
}
