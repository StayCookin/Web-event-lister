// profile.js
// Dynamically populate user profile information from localStorage

document.addEventListener("DOMContentLoaded", function () {
  // Example: update profile details if user is logged in
  const userString = localStorage.getItem("ditiragaloUser");
  let currentUser = null;
  if (userString) {
    try {
      currentUser = JSON.parse(userString);
    } catch (e) {
      localStorage.removeItem("ditiragaloUser");
    }
  }

  // Populate profile fields if elements exist
  if (currentUser) {
    const nameField = document.querySelector(
      '.detail-value[data-profile="name"]'
    );
    const emailField = document.querySelector(
      '.detail-value[data-profile="email"]'
    );
    const roleField = document.querySelector(
      '.detail-value[data-profile="role"]'
    );
    if (nameField) nameField.textContent = currentUser.name || "";
    if (emailField) emailField.textContent = currentUser.email || "";
    if (roleField) roleField.textContent = currentUser.role || "";
  }
});
