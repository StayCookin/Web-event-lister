document.addEventListener("DOMContentLoaded", function () {
  // --- Navigation Element Selectors ---
  const navEventsLink = document.getElementById("navEventsLink");
  const navLoginLink = document.getElementById("navLoginLink");
  const navSignupLink = document.getElementById("navSignupLink");
  const navProfileLink = document.getElementById("navProfileLink");
  const navDashboardLink = document.getElementById("navDashboardLink");
  const navCreateEventLink = document.getElementById("navCreateEventLink");
  const navViewEventLink = document.getElementById("navViewEventLink");
  const navLogoutButton = document.getElementById("navLogoutButton");

  // Debug: Log navigation elements to verify they exist
  console.log("navLoginLink element:", navLoginLink);
  console.log("navSignupLink element:", navSignupLink);
  console.log("navProfileLink element:", navProfileLink);
  console.log("navDashboardLink element:", navDashboardLink);
  console.log("navCreateEventLink element:", navCreateEventLink);
  console.log("navLogoutButton element:", navLogoutButton);

  // --- Function to Update Navigation Based on Login State ---
  function updateNavigationBar() {
    const userString = localStorage.getItem("ditiragaloUser");
    let currentUser = null;

    // Try to parse user data from localStorage
    if (userString) {
      try {
        currentUser = JSON.parse(userString);
      } catch (e) {
        console.error("Error parsing user data from localStorage:", e);
        localStorage.removeItem("ditiragaloUser"); // Clear corrupted data
      }
    }

    // Debug: Show current user in console
    console.log("Current user for nav update:", currentUser);

    // Hide all navigation links by default
    if (navLoginLink) navLoginLink.style.display = "none";
    if (navSignupLink) navSignupLink.style.display = "none";
    if (navProfileLink) navProfileLink.style.display = "none";
    if (navDashboardLink) navDashboardLink.style.display = "none";
    if (navCreateEventLink) navCreateEventLink.style.display = "none";
    if (navViewEventLink) navViewEventLink.style.display = "none";
    if (navLogoutButton) navLogoutButton.style.display = "none";
    if (navEventsLink) navEventsLink.style.display = "inline-block";

    if (currentUser && currentUser.email) {
      // ----- USER IS LOGGED IN -----
      if (navProfileLink) navProfileLink.style.display = "inline-block";
      if (navLogoutButton) navLogoutButton.style.display = "inline-block";

      // Organizer-specific links
      if (currentUser.role === "organizer") {
        if (navDashboardLink) navDashboardLink.style.display = "inline-block";
        if (navCreateEventLink)
          navCreateEventLink.style.display = "inline-block";
        if (navViewEventLink) navViewEventLink.style.display = "inline-block";
      }
    } else {
      // ----- USER IS LOGGED OUT -----
      if (navLoginLink) navLoginLink.style.display = "inline-block";
      if (navSignupLink) navSignupLink.style.display = "inline-block";
      if (navViewEventLink) navViewEventLink.style.display = "inline-block";
    }
  }

  // --- Logout Button Handler ---
  if (navLogoutButton) {
    navLogoutButton.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.removeItem("ditiragaloUser");
      updateNavigationBar();
      window.location.href = "event.html"; // Redirect to events page
      console.log("User logged out.");
    });
  }

  // --- Initialize Navigation Bar on Page Load ---
  updateNavigationBar();
  console.log("main.js loaded and running. Navigation should be updated.");
});
