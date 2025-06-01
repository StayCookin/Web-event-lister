// js/events.js

document.addEventListener("DOMContentLoaded", function () {
  // Mock Event Data (You can expand this list)
  // Based on the structure from your event.html and previous examples
  const mockEventsData = [
    {
      id: "event1",
      title: "Gaborone Food Festival",
      date: "July 21, 2025",
      location: "National Stadium, Gaborone",
      description:
        "The number one Music Festival, bringing you the best culinary delights and amazing live performances.",
      imageSrc: "images/3dikgosi.jpg", // Make sure this path is correct relative to your HTML file
      imageAlt: "Gaborone Food Festival lively scene",
      detailsLink: "event-details.html?eventId=event1", // Example: how you might link to details later
    },
    {
      id: "event2",
      title: "Dikgosi tse Tharo Commemoration",
      date: "August 23, 2025",
      location: "Gaborone Magistrate, CBD",
      description:
        "A cultural event commemorating the Three Chiefs who played a pivotal role in Botswana's history.",
      imageSrc: "images/mshati.jpg", // Make sure this path is correct
      imageAlt: "Three Dikgosi Monument",
      detailsLink: "event-details.html?eventId=event2",
    },
    {
      id: "event3",
      title: "Botswana International Trade Fair (BITF)",
      date: "September 10, 2025",
      location: "Fairgrounds, Gaborone",
      description:
        "The premier trade exhibition showcasing innovations from various sectors. Explore business and technology.",
      imageSrc: "https://placehold.co/600x400/007BFF/FFFFFF?text=BITF+2025", // Placeholder example
      imageAlt: "Botswana International Trade Fair",
      detailsLink: "event-details.html?eventId=event3",
    },
    {
      id: "event4",
      title: "Khawa Dune Challenge & Cultural Fest",
      date: "May 15, 2025",
      location: "Khawa Village, Kgalagadi",
      description:
        "Experience adrenaline-pumping motorsport combined with a rich cultural festival in the Kgalagadi.",
      imageSrc: "https://placehold.co/600x400/E65100/FFFFFF?text=Khawa+2025", // Placeholder example
      imageAlt: "Khawa Dune Challenge",
      detailsLink: "event-details.html?eventId=event4",
    },
  ];

  const eventGrid = document.querySelector(".event-grid");

  function renderEventCard(event) {
    // Create the main article element for the card
    const card = document.createElement("article");
    card.className = "event-card";

    // Create the image
    const img = document.createElement("img");
    img.src = event.imageSrc;
    img.alt = event.imageAlt;
    img.className = "event-card-image";
    // Basic error handling for images:
    img.onerror = function () {
      this.onerror = null; // prevent infinite loop if placeholder also fails
      this.src =
        "https://placehold.co/600x400/cccccc/FFFFFF?text=Image+Not+Found";
      console.warn(
        `Image not found for event: ${event.title} at path: ${event.imageSrc}`
      );
    };

    // Create the content div
    const contentDiv = document.createElement("div");
    contentDiv.className = "event-card-content";

    // Create the title
    const title = document.createElement("h3");
    title.className = "event-card-title";
    title.textContent = event.title;

    // Create date info
    const dateInfo = document.createElement("p");
    dateInfo.className = "event-card-info";
    dateInfo.innerHTML = `<span class="icon-placeholder">🗓️</span> ${event.date}`; // Using innerHTML for emoji

    // Create location info
    const locationInfo = document.createElement("p");
    locationInfo.className = "event-card-info";
    locationInfo.innerHTML = `<span class="icon-placeholder">📍</span> ${event.location}`;

    // Create description
    const description = document.createElement("p");
    description.className = "event-card-description";
    description.textContent = event.description;

    // Create "View Details" button
    const detailsButton = document.createElement("a");
    detailsButton.href = event.detailsLink; // Link to a details page (can be dynamic later)
    detailsButton.className = "btn btn-primary"; // Uses styles from ditiragalo.css
    detailsButton.textContent = "View Details";

    // Create "Sign up to volunteer" button (as per your event.html)
    const volunteerButton = document.createElement("a");
    volunteerButton.href = "signup.html"; // Or a specific volunteer signup page later
    // Assuming you have a .signup-btn style or want to use a general button style
    volunteerButton.className = "btn btn-outline-primary"; // Example style, adjust as needed
    volunteerButton.style.marginTop = "0.5rem"; // Add some space
    volunteerButton.textContent = "Sign up to Volunteer";

    // Append elements to contentDiv
    contentDiv.appendChild(title);
    contentDiv.appendChild(dateInfo);
    contentDiv.appendChild(locationInfo);
    contentDiv.appendChild(description);
    contentDiv.appendChild(detailsButton);
    contentDiv.appendChild(volunteerButton); // Add the volunteer button

    // Append image and contentDiv to card
    card.appendChild(img);
    card.appendChild(contentDiv);

    return card;
  }

  function displayEvents(events) {
    if (!eventGrid) {
      console.error("Event grid container not found!");
      return;
    }
    eventGrid.innerHTML = ""; // Clear any existing content

    if (events.length === 0) {
      eventGrid.innerHTML =
        '<p class="col-span-full text-center text-slate-600 py-10">No events available at the moment. Please check back later!</p>'; // Tailwind example for full span
      return;
    }

    events.forEach((event) => {
      const eventCardElement = renderEventCard(event);
      eventGrid.appendChild(eventCardElement);
    });
  }

  // Initial display of events
  displayEvents(mockEventsData);

  console.log("events.js loaded and events rendered.");
});
