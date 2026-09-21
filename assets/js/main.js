// Cache DOM once
const typingTarget = document.getElementById("typing-text");
const loader = document.getElementById("terminal-loader");
const quoteContainer = document.getElementById("jumper-quote");
const themeToggle = document.getElementById("theme-toggle");

const introString = "DenisKuizinas@portfolio:~# boot_sequence --init --white-hat";
let charIndex = 0;

// Smooth typing animation using requestAnimationFrame
function typeSequence() {
  if (!typingTarget) return;

  if (charIndex < introString.length) {
    typingTarget.textContent += introString[charIndex++];
    setTimeout(() => requestAnimationFrame(typeSequence), 35);
  } else {
    revealQuote();
  }
}

function revealQuote() {
  quoteContainer?.classList.add("visible-now", "jump-shake-active");

  setTimeout(() => {
    loader?.classList.add("fade-out-loader");
    document.body.classList.remove("loading-locked");

    setTimeout(() => {
      if (loader) loader.style.display = "none";
    }, 500);
  }, 2100);
}

function purgeDefaultElements() {
  document.querySelectorAll('footer, .site-footer, .page-header').forEach(el => el.remove());
}

function initTheme() {
  const saved = localStorage.getItem("portfolio-theme") || "light";
  document.documentElement.dataset.theme = saved;

  themeToggle?.addEventListener("click", () => {
    const newTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("portfolio-theme", newTheme);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  purgeDefaultElements();
  initTheme();
  requestAnimationFrame(typeSequence);
});
