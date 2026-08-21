document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const toggle = document.getElementById("loginTogglePassword");
  const status = document.getElementById("loginStatus");

  if (!form || !emailInput || !passwordInput) return;

  const setStatus = (msg, ok = false) => {
    if (!status) return;
    status.textContent = msg;
    status.style.color = ok ? "#1f9d7a" : "#d14343";
    status.style.marginTop = "12px";
    status.style.textAlign = "center";
  };

  if (toggle) {
    const toggleVis = () => {
      const isPwd = passwordInput.type === "password";
      passwordInput.type = isPwd ? "text" : "password";
      toggle.classList.toggle("fa-eye", !isPwd);
      toggle.classList.toggle("fa-eye-slash", isPwd);
    };
    toggle.addEventListener("click", toggleVis);
    toggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleVis();
      }
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      setStatus("Please enter email and password.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("travelUsers") || "[]");
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      setStatus("No account found for this email.");
      return;
    }

    if (user.password !== password) {
      setStatus("Incorrect password.");
      return;
    }

    // Successful login
    localStorage.setItem("currentUser", JSON.stringify({ fullName: user.fullName, email: user.email }));
    setStatus("Login successful! Redirecting...", true);
    setTimeout(() => (window.location.href = "landingPage.html"), 800);
  });
});
