let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton");
let admin = document.getElementById("admin");
let basic = document.getElementById("basic");

admin.style.display = "none";
basic.style.display = "none";
logoutButton.style.display = "none";

usernameInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    passwordInput.focus();
  }
});
passwordInput.addEventListener("keyup", function (keyborad) {
  if (keyborad.key === "Enter") {
    loginButton.focus();
  }
});

function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  logoutButton.style.display = "block";
  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "block";
    basic.style.display = "none";
    admin.style.display = "block";
  } else {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "block";
    localStorage.setItem("role", "basic");
    admin.style.display = "none";
    basic.style.display = "block";
  }
  if (usernameInput.value) {
  } else {
    alert("masukan username yang benar");
    location.reload(usernameInput);
    localStorage.clear();
  }
  if (usernameInput.value == "Marksman") {
    if (passwordInput.value == "miya") {
      location.assign("assets/marksman/miya.html");
    }
    if (passwordInput.value == "beatrix") {
      location.assign("assets/marksman/beatrik.html");
    }
    if (passwordInput.value == "bruno") {
      location.assign("assets/marksman/bruno.html");
    }
  }
}

if (localStorage.getItem("username")) {
  usernameInput.style.display = "none";
  passwordInput.style.display = "none";
  loginButton.style.display = "block";
  logoutButton.style.display = "block";
  onLogin.apply();
  if (localStorage.getItem("role") == "admin") {
    basic.style.display = "none";
    admin.style.display = "block";
  } else {
    admin.style.display = "none";
    basic.style.display = "block";
  }
}

function onLogout() {
  localStorage.clear();
  location.reload();
}
