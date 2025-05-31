// organizerDashboard.js
// Dynamically populate organizer dashboard with user info and event stats

document.addEventListener("DOMContentLoaded", function () {
  // Get user info from localStorage
  const userString = localStorage.getItem("ditiragaloUser");
  let currentUser = null;
  if (userString) {
    try {
      currentUser = JSON.parse(userString);
    } catch (e) {
      localStorage.removeItem("ditiragaloUser");
    }
  }

  // Example: Show organizer's name in dashboard header if available
  if (currentUser && currentUser.role === "organizer") {
    const dashboardHeader = document.querySelector(".dashboard-header h1");
    if (dashboardHeader && currentUser.name) {
      dashboardHeader.textContent = `Organizer Dashboard - ${currentUser.name}`;
    }
  }

  // You can add more dynamic logic here, e.g.,
  // - Fetch and render events created by this organizer
  // - Show stats, etc.
});
