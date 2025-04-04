// script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Page Loaded - Ready to interact!");
  
    // Example: You can add more interactive features here if desired.
    // For instance, smooth scrolling for navigation links:
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', function(e) {
        // Prevent default action if you're planning to implement smooth scrolling
        // e.preventDefault();
        // Implement smooth scrolling logic here if needed.
      });
    });
  });
  
  