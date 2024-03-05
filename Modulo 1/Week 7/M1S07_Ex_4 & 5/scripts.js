document.addEventListener("DOMContentLoaded", function () {
  const loginPage = document.getElementById("login-page");
  const registerPage = document.getElementById("register-page");
  const homePage = document.getElementById("home-page");

  const goToRegisterLink = document.getElementById("go-to-register");
  const goToLoginLink = document.getElementById("go-to-login");

  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  const logoutButton = document.getElementById("logout");

  // Verificar se o usuário já está logado ao carregar a página
  checkLoginStatus();

  function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      showHomePage();
    } else {
      showLoginPage();
    }
  }

  function showLoginPage() {
    loginPage.classList.remove("hidden");
    registerPage.classList.add("hidden");
    homePage.classList.add("hidden");
  }

  function showRegisterPage() {
    registerPage.classList.remove("hidden");
    loginPage.classList.add("hidden");
    homePage.classList.add("hidden");
  }

  function showHomePage() {
    homePage.classList.remove("hidden");
    loginPage.classList.add("hidden");
    registerPage.classList.add("hidden");
  }

  goToRegisterLink.addEventListener("click", function (event) {
    event.preventDefault();
    showRegisterPage();
  });

  goToLoginLink.addEventListener("click", function (event) {
    event.preventDefault();
    showLoginPage();
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = JSON.parse(localStorage.getItem(username));
    if (user && user.password === password) {
      localStorage.setItem("user", JSON.stringify(user));
      showHomePage();
    } else {
      alert("Usuário ou senha incorretos.");
    }
  });

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    if (!localStorage.getItem(username)) {
      localStorage.setItem(username, JSON.stringify({ username, password }));
      alert("Usuário cadastrado com sucesso. Por favor, faça login.");
      showLoginPage();
    } else {
      alert("Usuário já cadastrado.");
    }
  });

  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("user");
    showLoginPage();
  });
});
