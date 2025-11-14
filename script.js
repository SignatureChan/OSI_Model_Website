// Current layer tracker
let currentLayer = 5;

// Navigation buttons
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");

// Function to switch to a specific layer
function switchToLayer(layerNum) {
  currentLayer = layerNum;
  
  // Update body class for color theming
  document.body.className = `layer-${layerNum}-active`;
  
  // Remove active class from all buttons
  document.querySelectorAll(".layer").forEach(btn => btn.classList.remove("active"));
  
  // Add active class to current layer
  document.querySelector(`.layer[data-layer="${layerNum}"]`).classList.add("active");
  
  // Hide all layer content
  document.querySelectorAll(".layer-content").forEach(content => content.style.display = "none");
  
  // Show selected layer content
  document.getElementById(`layer${layerNum}`).style.display = "block";
  
  // Scroll to top of content
  document.querySelector(".info-panel").scrollTop = 0;
  
  // Update button states
  updateNavigationButtons();
}

// Update navigation button states
function updateNavigationButtons() {
  upBtn.disabled = currentLayer === 7;
  downBtn.disabled = currentLayer === 1;
}

// Up button
upBtn.addEventListener("click", () => {
  if (currentLayer < 7) {
    switchToLayer(currentLayer + 1);
  }
});

// Down button
downBtn.addEventListener("click", () => {
  if (currentLayer > 1) {
    switchToLayer(currentLayer - 1);
  }
});

// Layer switching functionality
const layerButtons = document.querySelectorAll(".layer");

layerButtons.forEach(button => {
  button.addEventListener("click", () => {
    const layerNum = parseInt(button.getAttribute("data-layer"));
    switchToLayer(layerNum);
  });
});

// Initialize button states
updateNavigationButtons();

// Function cards toggle (works on touchscreen!)
document.querySelectorAll(".function-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});

// Info cards toggle (for Additional Information section)
document.querySelectorAll(".info-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});

// Initialize the page with Layer 5 active and correct colors
document.body.className = 'layer-5-active';