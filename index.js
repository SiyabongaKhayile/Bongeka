// Animate skill bars when they appear
const skillBars = document.querySelectorAll(".skill-progress");

function animateSkills() {
  skillBars.forEach(bar => {
    const width = bar.dataset.width;
    bar.style.width = width + "%";
  });
}

// Smooth scroll for nav links
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    if(link.hash){
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Animate skills when scrolled into view
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function scrollHandler() {
  if(document.querySelector("#skills") && isInViewport(document.querySelector("#skills"))){
    animateSkills();
    window.removeEventListener("scroll", scrollHandler);
  }
}

window.addEventListener("scroll", scrollHandler);
