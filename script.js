// Testimonials data
let recommendations = [
  {
    project: "E-commerce Platform",
    feedback:
      "Working with Christopher on our e-commerce platform was an absolute pleasure. He developed a fully functional online store for our business, complete with user authentication, a product catalog, and a seamless checkout process. His expertise in both frontend and backend development ensured a smooth and responsive user experience. The secure payment integration he implemented has been flawless, and we've received numerous compliments on the site's design and usability. We highly recommend Christopher for any software or website development project.",
  },
  {
    project: "Social Media Application",
    feedback:
      "Christopher helped us bring our social media app idea to life. He built a robust application where users can create profiles, post updates, and interact through comments and likes. The real-time notifications and responsive design have greatly enhanced user engagement. His proficiency in handling both the frontend and backend development was evident throughout the project. Christopher's attention to detail and dedication to delivering a high-quality product made all the difference. We couldn't be happier with the results.",
  },
  {
    project: "Project Management Tool",
    feedback:
      "Christopher developed a comprehensive project management tool for our team, which has significantly improved our workflow and productivity. The application features task assignments, progress tracking, and real-time collaboration, all of which have been instrumental in keeping our projects on track. His full stack development skills ensured that both the user interface and the underlying functionality were top-notch. The tool's intuitive design and reliable performance have received high praise from our team members. Christopher is an outstanding developer who truly understands how to create software that meets user needs.",
  },
];

// Function to create HTML for each recommendation and append it to the container
function displayRecommendations() {
  const container = document.getElementById("recommendationContainer");
  container.innerHTML = ""; // Clear existing content

  recommendations.forEach((recommendation, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
   
        <p>${"''" + recommendation.feedback + "''"}</p>
      `;
    container.appendChild(card);
  });
}

// Function to check if a recommendation with the same feedback already exists
function isDuplicateFeedback(feedback) {
  return recommendations.some((rec) => rec.feedback === feedback);
}

// Function to show a popup message
// Function to show a custom popup message
function showPopup(message) {
  const popupModal = document.getElementById("popupModal");
  const popupMessage = document.getElementById("popupMessage");
  popupMessage.textContent = message;
  popupModal.style.display = "block";

  // Close the modal when the user clicks anywhere outside of the modal content
  window.onclick = function (event) {
    if (event.target == popupModal) {
      popupModal.style.display = "none";
    }
  };
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form input values
  const name = document.getElementById("nameInput").value.trim();
  const feedback = document.getElementById("feedbackInput").value.trim();

  // Validate input
  if (feedback === "") {
    alert("Please enter your feedback.");
    return;
  }

  // Check if feedback already exists
  if (isDuplicateFeedback(feedback)) {
    alert("This feedback already exists.");
    return;
  }

  // Create new recommendation object
  const newRecommendation = {
    project: name !== "" ? name : "Anonymous",
    feedback: feedback,
  };

  // Add new recommendation to recommendations array
  recommendations.push(newRecommendation);

  // Reset form inputs
  document.getElementById("nameInput").value = "";
  document.getElementById("feedbackInput").value = "";

  // Display updated recommendations
  displayRecommendations();

  // Show popup message
  showPopup("Recommendation added successfully!"); // Change message as needed
}

// Add event listener to form submit event
document
  .getElementById("recommendationForm")
  .addEventListener("submit", handleFormSubmit);

// Initial display of recommendations
document.addEventListener("DOMContentLoaded", displayRecommendations);
