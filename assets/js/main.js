// Cache DOM once
const typingTarget = document.getElementById("typing-text");
const loader = document.getElementById("terminal-loader");
const quoteContainer = document.getElementById("jumper-quote");
const themeToggle = document.getElementById("theme-toggle");
const availabilityTag = document.querySelector(".availability-tag");
const statusBadge = document.querySelector(".status-badge");

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

function getObservedBankHolidays(year) {
  const holidays = new Set();
  const addObserved = (date) => {
    const observed = new Date(date);
    if (observed.getDay() === 0 || observed.getDay() === 6) {
      observed.setDate(observed.getDate() + (observed.getDay() === 0 ? 1 : 2));
    }
    while (holidays.has(observed.toDateString())) {
      observed.setDate(observed.getDate() + 1);
    }
    holidays.add(observed.toDateString());
  };
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  const firstMonday = (month) => {
    const date = new Date(year, month, 1);
    date.setDate(1 + ((8 - date.getDay()) % 7));
    return date;
  };
  const lastMonday = (month) => {
    const date = new Date(year, month + 1, 0);
    date.setDate(date.getDate() - ((date.getDay() + 6) % 7));
    return date;
  };

  addObserved(new Date(year, 0, 1));
  addObserved(new Date(year, 11, 25));
  addObserved(new Date(year, 11, 26));

  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  const easter = new Date(year, month - 1, day);
  addObserved(addDays(easter, -2));
  addObserved(addDays(easter, 1));
  addObserved(firstMonday(4));
  addObserved(lastMonday(4));
  addObserved(lastMonday(7));

  return holidays;
}

function initAvailability() {
  const update = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const isWeekend = day === 0 || day === 6;
    const isBankHoliday = getObservedBankHolidays(now.getFullYear()).has(now.toDateString());
    const isOperationalWindow = isWeekend || isBankHoliday
      ? hour >= 10 && hour < 16
      : hour >= 16 && hour < 18;

    availabilityTag.hidden = !isOperationalWindow;
    statusBadge.classList.toggle("is-offline", !isOperationalWindow);
  };

  update();
  window.setInterval(update, 60000);
}

window.addEventListener("DOMContentLoaded", () => {
  purgeDefaultElements();
  initTheme();
  initAvailability();
  requestAnimationFrame(typeSequence);
});
