// js/createEvent.js
document.addEventListener("DOMContentLoaded", function () {
  const createEventForm = document.getElementById("createEventForm");

  if (createEventForm) {
    // Helper function to display errors
    const displayError = (inputId, message) => {
      let errorElement = document.getElementById(inputId + "Error");
      // If error span doesn't exist, create it after the input
      if (!errorElement) {
        const input = document.getElementById(inputId);
        if (input) {
          errorElement = document.createElement("span");
          errorElement.id = inputId + "Error";
          errorElement.className = "error-message form-error";
          input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
      }
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = "var(--color-error, #dc3545)";
        errorElement.style.fontSize = "0.85rem";
        errorElement.style.display = "block";
      }
    };

    // Helper function to clear errors
    const clearErrors = () => {
      const errorMessages = createEventForm.querySelectorAll(
        ".error-message, .form-error"
      );
      errorMessages.forEach((span) => {
        span.textContent = "";
        span.style.display = "none";
      });
      const generalError = document.getElementById("createEventFormError");
      if (generalError) generalError.textContent = "";
    };

    // Helper function for basic email validation (if needed for other forms, move to main.js)
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    createEventForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop default form submission
      clearErrors(); // Clear previous errors
      let isValid = true;

      // Get form values
      const eventName = document.getElementById("eventName").value.trim();
      const eventDate = document.getElementById("eventDate").value;
      const eventTime = document.getElementById("eventTime").value;
      const eventLocation = document
        .getElementById("eventLocation")
        .value.trim();
      const eventDescription = document
        .getElementById("eventDescription")
        .value.trim();
      const eventPrice = document.getElementById("eventPrice").value.trim();
      const eventImageInput = document.getElementById("eventImage");
      const eventImageFile = eventImageInput ? eventImageInput.files[0] : null;
      const eventCategory = document.getElementById("eventCategory").value;

      // --- Validation ---
      if (!eventName) {
        displayError("eventName", "Event name is required.");
        isValid = false;
      }
      if (!eventDate) {
        displayError("eventDate", "Event date is required.");
        isValid = false;
      }
      if (!eventTime) {
        displayError("eventTime", "Event time is required.");
        isValid = false;
      }
      if (!eventLocation) {
        displayError("eventLocation", "Event location is required.");
        isValid = false;
      }
      if (!eventDescription) {
        displayError("eventDescription", "Event description is required.");
        isValid = false;
      }
      if (!eventPrice) {
        displayError(
          "eventPrice",
          "Event price is required (e.g., P100, Free)."
        );
        isValid = false;
      }
      if (eventImageFile) {
        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
        if (!allowedTypes.includes(eventImageFile.type)) {
          displayError(
            "eventImage",
            "Invalid file type. Please use JPG, PNG, or WEBP."
          );
          isValid = false;
        }
      }
      if (!eventCategory) {
        displayError("eventCategory", "Please select an event category.");
        isValid = false;
      }

      if (isValid) {
        console.log("Create Event form validation passed!");
        const eventData = {
          name: eventName,
          date: eventDate,
          time: eventTime,
          location: eventLocation,
          description: eventDescription,
          price: eventPrice,
          category: eventCategory,
          imageName: eventImageFile ? eventImageFile.name : "No image selected",
        };
        console.log("Event Data (Simulated):", eventData);

        // Simulate successful submission
        alert('Event "' + eventName + '" created successfully! (Simulated)');
        createEventForm.reset(); // Clear the form
        // Later, you would send this data to a backend API
      } else {
        console.log("Create Event form validation failed.");
        // General error message if specific ones aren't enough
        let specificErrorShown = false;
        const errorMessages = createEventForm.querySelectorAll(
          ".error-message, .form-error"
        );
        errorMessages.forEach((span) => {
          if (span.textContent && span.textContent.trim() !== "")
            specificErrorShown = true;
        });
        const generalErrorPlaceholder = document.getElementById(
          "createEventFormError"
        );
        if (generalErrorPlaceholder && !specificErrorShown) {
          generalErrorPlaceholder.textContent =
            "Please correct the errors highlighted above.";
        }
      }
    });
  }
  console.log("createEvent.js loaded.");
});
