// auth.js

document.addEventListener("DOMContentLoaded", function () {
  // --- Login Form Functionality ---
  const loginForm = document.getElementById("loginForm");
  const loginEmailInput = document.getElementById("loginEmail");
  const loginPasswordInput = document.getElementById("loginPassword");

  // Error message placeholders
  const loginEmailError = document.getElementById("loginEmailError");
  const loginPasswordError = document.getElementById("loginPasswordError");
  const loginFormError = document.getElementById("loginFormError"); // For general form errors

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Clear previous error messages
      if (loginEmailError) loginEmailError.textContent = "";
      if (loginPasswordError) loginPasswordError.textContent = "";
      if (loginFormError) loginFormError.textContent = "";

      let isValid = true;

      // Get values from form fields
      const email = loginEmailInput.value.trim();
      const password = loginPasswordInput.value.trim();

      // Basic Email Validation
      if (email === "") {
        if (loginEmailError)
          loginEmailError.textContent = "Email address is required.";
        isValid = false;
      } else if (!isValidEmail(email)) {
        if (loginEmailError)
          loginEmailError.textContent = "Please enter a valid email address.";
        isValid = false;
      }

      // Basic Password Validation
      if (password === "") {
        if (loginPasswordError)
          loginPasswordError.textContent = "Password is required.";
        isValid = false;
      }
      // You can add more password checks here (e.g., minimum length)

      if (isValid) {
        console.log("Login form submitted (client-side validation passed):");
        console.log("Email:", email);
        console.log("Password:", password); // In a real app, NEVER log the password

        // --- Simulate a successful login ---
        // For prototype, determine role based on email (as in main.js for testing)
        let role = "attendee"; // Default role
        if (email.toLowerCase().includes("organizer@ditiragalo.com")) {
          role = "organizer";
        } else if (email.toLowerCase().includes("participant@ditiragalo.com")) {
          role = "participant";
        }

        // Store user info in localStorage (this part is for simulation)
        localStorage.setItem(
          "ditiragaloUser",
          JSON.stringify({ email: email, role: role })
        );

        // Inform main.js to update navigation (or simply redirect)
        // If main.js's updateNavigationBar is not globally accessible,
        // the redirect will trigger it on the new page.

        alert("Login successful! (Simulated)\nRedirecting..."); // Simple alert for now

        // Redirect to a relevant page, e.g., profile or events page
        if (role === "organizer") {
          window.location.href = "organizer-dashboard.html";
        } else {
          window.location.href = "profile.html";
        }
        // For testing events page directly: window.location.href = 'event.html';
      } else {
        if (
          loginFormError &&
          !loginEmailError.textContent &&
          !loginPasswordError.textContent
        ) {
          loginFormError.textContent = "Please correct the errors above.";
        }
        console.log("Login form validation failed.");
      }
    });
  }

  // --- Helper function for basic email validation ---
  function isValidEmail(email) {
    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // --- Signup Form Functionality ---
  const signupForm = document.getElementById("signupForm");
  const signupNameInput = document.getElementById("signupName");
  const signupEmailInput = document.getElementById("signupEmail");
  const signupPasswordInput = document.getElementById("signupPassword");
  const signupPasswordConfirmInput = document.getElementById(
    "signupPasswordConfirm"
  );
  const signupRoleInput = document.getElementById("signupRole");
  const signupAgreeInput = document.getElementById("signupAgree");

  // Error message placeholders for signup
  const signupNameError = document.getElementById("signupNameError");
  const signupEmailError = document.getElementById("signupEmailError");
  const signupPasswordError = document.getElementById("signupPasswordError");
  const signupPasswordConfirmError = document.getElementById(
    "signupPasswordConfirmError"
  );
  const signupRoleError = document.getElementById("signupRoleError");
  const signupAgreeError = document.getElementById("signupAgreeError");
  const signupFormError = document.getElementById("signupFormError");

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Clear previous error messages
      if (signupNameError) signupNameError.textContent = "";
      if (signupEmailError) signupEmailError.textContent = "";
      if (signupPasswordError) signupPasswordError.textContent = "";
      if (signupPasswordConfirmError)
        signupPasswordConfirmError.textContent = "";
      if (signupRoleError) signupRoleError.textContent = "";
      if (signupAgreeError) signupAgreeError.textContent = "";
      if (signupFormError) signupFormError.textContent = "";

      let isValid = true;
      const name = signupNameInput ? signupNameInput.value.trim() : "";
      const email = signupEmailInput ? signupEmailInput.value.trim() : "";
      const password = signupPasswordInput ? signupPasswordInput.value : "";
      const passwordConfirm = signupPasswordConfirmInput
        ? signupPasswordConfirmInput.value
        : "";
      const role = signupRoleInput ? signupRoleInput.value : "";
      const agreed = signupAgreeInput ? signupAgreeInput.checked : false;

      // Name validation
      if (!name) {
        if (signupNameError)
          signupNameError.textContent = "Full name is required.";
        isValid = false;
      }
      // Email validation
      if (!email) {
        if (signupEmailError)
          signupEmailError.textContent = "Email is required.";
        isValid = false;
      } else if (!isValidEmail(email)) {
        if (signupEmailError)
          signupEmailError.textContent = "Please enter a valid email address.";
        isValid = false;
      }
      // Password validation
      if (!password) {
        if (signupPasswordError)
          signupPasswordError.textContent = "Password is required.";
        isValid = false;
      } else if (!isStrongPassword(password)) {
        if (signupPasswordError)
          signupPasswordError.textContent =
            "Password must be at least 8 characters, include a capital letter, a number, and a special character.";
        isValid = false;
      }
      // Password confirmation
      if (!passwordConfirm) {
        if (signupPasswordConfirmError)
          signupPasswordConfirmError.textContent =
            "Please confirm your password.";
        isValid = false;
      } else if (password !== passwordConfirm) {
        if (signupPasswordConfirmError)
          signupPasswordConfirmError.textContent = "Passwords do not match.";
        isValid = false;
      }
      // Role validation
      if (!role) {
        if (signupRoleError)
          signupRoleError.textContent = "Please select a role.";
        isValid = false;
      }
      // Agree to terms
      if (!agreed) {
        if (signupAgreeError)
          signupAgreeError.textContent = "You must agree to the terms.";
        isValid = false;
      }

      if (isValid) {
        // Simulate user creation and login
        localStorage.setItem(
          "ditiragaloUser",
          JSON.stringify({ email: email, role: role, name: name })
        );
        alert("Signup successful! (Simulated)\nRedirecting...");
        // Redirect based on role
        if (role === "organizer") {
          window.location.href = "organizer-dashboard.html";
        } else {
          window.location.href = "profile.html";
        }
      } else {
        if (
          signupFormError &&
          !signupNameError.textContent &&
          !signupEmailError.textContent &&
          !signupPasswordError.textContent &&
          !signupPasswordConfirmError.textContent &&
          !signupRoleError.textContent &&
          !signupAgreeError.textContent
        ) {
          signupFormError.textContent = "Please correct the errors above.";
        }
        console.log("Signup form validation failed.");
      }
    });
  }

  // --- Helper function for strong password validation ---
  function isStrongPassword(password) {
    // At least 8 chars, one uppercase, one number, one special char
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(
      password
    );
  }

  console.log("auth.js loaded and running.");
});
