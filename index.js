// Function to load any page dynamically
function loadPage(url){
  fetch(url)
    .then(response => {
      if(!response.ok) throw new Error("Page not found");
      return response.text();
    })
    .then(html => {
      const container = document.getElementById("page-content");

      // If page is a full HTML document, extract body content
      let content = html;
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if(bodyMatch){
        content = bodyMatch[1]; // extract only body content
      }

      container.innerHTML = content; // display page content
    })
    .catch(err => {
      console.error(err);
      const container = document.getElementById("page-content");
      container.innerHTML = "<p>Page could not be loaded.</p>";
    });
}

// Handle navigation clicks
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    // Resume download, let browser handle
    if(link.hasAttribute("download")){
      return;
    }

    e.preventDefault(); // prevent default link navigation
    loadPage(href);     // load clicked page dynamically
  });
});

// Load About page by default
window.addEventListener("DOMContentLoaded", () => {
  loadPage("index.html");
});


function initCarousel() {
  const texts = document.querySelectorAll(".carousel-text");
  if (!texts || texts.length === 0) return; // Exit if no carousel on page

  let current = 0;

  function showNextText() {
    texts[current].classList.remove("active");
    current = (current + 1) % texts.length;
    texts[current].classList.add("active");
  }

  // Show "Experience" first for 5 seconds
  texts.forEach(t => t.classList.remove("active"));
  texts[0].classList.add("active");

  setTimeout(() => {
    // Start sliding through experience items every 3 seconds
    setInterval(showNextText, 3000);
  }, 5000);
}