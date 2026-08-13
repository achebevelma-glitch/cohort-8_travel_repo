document.addEventListener("DOMContentLoaded", () => {
  // Get references to the form and its important inputs
  const form = document.getElementById("signupForm");
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const createButton = document.getElementById("createAccountBtn");
  const formStatus = document.getElementById("formStatus");
  const loginLink = document.getElementById("loginLink");

  // Stop execution if the required form elements are missing
  if (!form || !fullNameInput || !emailInput || !passwordInput || !createButton) {
    return;
  }

  // Show validation or success messages below the form
  const setStatus = (message, isSuccess = false) => {
    if (!formStatus) return;

    formStatus.textContent = message;
    formStatus.style.display = "block";
    formStatus.style.marginTop = "14px";
    formStatus.style.fontSize = "0.9rem";
    formStatus.style.textAlign = "center";
    formStatus.style.color = isSuccess ? "#1f9d7a" : "#d14343";
  };

  // Toggle password visibility without changing the actual value
  const togglePasswordVisibility = () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";

    if (togglePassword) {
      togglePassword.classList.toggle("fa-eye", !isPassword);
      togglePassword.classList.toggle("fa-eye-slash", isPassword);
      togglePassword.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
    }
  };

  // Add click and keyboard support for the password toggle icon
  if (togglePassword) {
    togglePassword.addEventListener("click", togglePasswordVisibility);
    togglePassword.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        togglePasswordVisibility();
      }
    });
  }

  // Handle the form submit event
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Read field values and remove extra spaces
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate required fields
    if (!fullName || !email || !password) {
      setStatus("Please fill in all fields.");
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      setStatus("Password must be at least 6 characters long.");
      return;
    }

    // Read previously saved users from localStorage
    const savedUsers = JSON.parse(localStorage.getItem("travelUsers") || "[]");
    const exists = savedUsers.some((user) => user.email.toLowerCase() === email.toLowerCase());

    // Prevent duplicate accounts
    if (exists) {
      setStatus("An account with this email already exists.");
      return;
    }

    // Save the new user and log them in locally
    savedUsers.push({ fullName, email, password });
    localStorage.setItem("travelUsers", JSON.stringify(savedUsers));
    localStorage.setItem("currentUser", JSON.stringify({ fullName, email }));

    // Show success and redirect to the landing page
    setStatus("Account created successfully! Redirecting...", true);
    createButton.disabled = true;

    setTimeout(() => {
      window.location.href = "landingPage.html";
    }, 1000);
  });

  // Optional link behavior for the login text
  if (loginLink) {
    loginLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "#";
    });
  }
});
