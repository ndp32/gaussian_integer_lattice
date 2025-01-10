// scripts.js

// Function to load an external HTML file into a specified element
function loadHTML(elementId, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // Optionally, re-attach any event listeners or initialize components after loading
            if (url === 'header.html') {
                initializeNavigation(); // Example function to initialize navigation
            }
        })
        .catch(error => {
            console.error(`Error loading ${url}:`, error);
            document.getElementById(elementId).innerHTML = `<p>Error loading ${elementId}.</p>`;
        });
}

// Example function to initialize navigation (e.g., hamburger menu)
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            hamburger.classList.toggle('active');
        });
    }
}

// Load header and footer on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "header.html");
    loadHTML("footer", "footer.html");

    // Initialize any other scripts or functionalities here
});
