window.onload = () => {
  initLoginForm();
};

function initLoginForm() {
  const loginForm = document.querySelector("#form-login");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formObject = Object.create(null);
      formObject.username = loginForm.username.value;
      formObject.password = loginForm.password.value;

      const resp = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });
      if (resp.status === 200) {
        window.location.href = "/shop.html";
      }
    });
  }
}
