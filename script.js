// =======================
// THEME TOGGLE
// =======================
const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
}


// =======================
// SCROLL ANIMATION
// =======================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(sec => {
  sec.classList.add("reveal");
  observer.observe(sec);
});


// =======================
// SEARCH BUTTON
// =======================
const searchBtn = document.querySelector(".search-btn");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const keyword = prompt("Cari apa? (home, about, services, projects)");

    if (!keyword) return;

    const map = {
      home: "home",
      about: "about",
      "about us": "about",
      services: "services",
      projects: "projects",
      partners: "partners",
      contact: "contact",
      military: "projects"
    };

    const targetId = map[keyword.toLowerCase()];

    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    } else {
      alert("Tidak ditemukan: " + keyword);
    }
  });
}

