// --- Mode Toggle ---
const toggleMode = document.createElement("button");
toggleMode.textContent = "🌙 Dark Mode";
toggleMode.className = "mode-toggle";
document.body.appendChild(toggleMode);

let isDarkMode = true;
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;
  toggleMode.textContent = isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode";
});

// --- Smooth Scroll ---
const navUl = document.getElementById("nav-links");
const hamburger = document.getElementById("hamburger");
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
    navUl?.classList.remove("active");
    hamburger?.classList.remove("open");
  });
});

// --- EmailJS Contact Form ---
const form = document.getElementById("contactForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const button = form.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "Sending...";
  button.disabled = true;

  emailjs
    .sendForm("service_rxde7mc", "template_zspjk6g", form)
    .then(() => {
      alert("✅ Thank you! Your message has been sent.");
      form.reset();
    })
    .catch(() => {
      alert("❌ Failed to send. Please try again.");
    })
    .finally(() => {
      button.textContent = originalText;
      button.disabled = false;
    });
});

// --- Mobile Menu ---
hamburger?.addEventListener("click", () => {
  navUl?.classList.toggle("active");
  hamburger?.classList.toggle("open");
});
document.addEventListener("click", (e) => {
  if (!hamburger?.contains(e.target) && !navUl?.contains(e.target)) {
    navUl?.classList.remove("active");
    hamburger?.classList.remove("open");
  }
});

// --- Navbar Scroll Effect ---
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    ?.classList.toggle("scrolled", window.scrollY > 10);
});

// --- Skill Bars Animation ---
const observeSkills = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".bar span").forEach((bar) => {
          const finalWidth = bar.dataset.percent;
          bar.style.width = "0%";
          setTimeout(() => {
            bar.style.width = finalWidth;
          }, 200);
        });
      }
    });
  },
  { threshold: 0.5 }
);
const skillsSection = document.querySelector("#skills");
if (skillsSection) observeSkills.observe(skillsSection);

// --- Section Fade-In ---
const observeSections = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("fade-in");
  observeSections.observe(section);
});

// --- Home Typing Reset ---
const homeSection = document.querySelector("#home");
homeSection?.classList.remove("fade-in");
homeSection?.classList.add("visible");

let typingRestarted = false;
window.addEventListener("scroll", () => {
  if (window.scrollY === 0 && !typingRestarted) {
    const title = document.querySelector(".intro h1");
    if (title) {
      title.style.animation = "none";
      setTimeout(() => {
        title.style.animation = "typing 2.5s steps(20) 1";
      }, 100);
    }
    typingRestarted = true;
  } else if (window.scrollY > 100) {
    typingRestarted = false;
  }
});
