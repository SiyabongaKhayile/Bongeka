// Toggle entire skills list
function toggleSkills(header) {
  const content = header.nextElementSibling; // .skills-content
  const plus = header.querySelector('.plus-toggle');
  if (!content) return; // safeguard
  if (content.style.display === "block") {
    content.style.display = "none";
    plus.textContent = "+";
  } else {
    content.style.display = "block";
    plus.textContent = "-";
  }
}

// Toggle individual skill description
function toggleSkill(item) {
  const desc = item.querySelector('.skill-description');
  const plus = item.querySelector('.plus-toggle');
  if (!desc) return; // safeguard
  if (desc.style.display === "block") {
    desc.style.display = "none";
    plus.textContent = "+";
  } else {
    desc.style.display = "block";
    plus.textContent = "-";
  }
}
