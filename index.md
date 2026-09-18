---
layout: default
title: Denis Kuizinas | Coding Portfolio
---

<!-- Theme Switcher Button -->
<div class="theme-toggle-container">
  <button id="theme-toggle" class="theme-btn" aria-label="Toggle dark mode">
    <svg class="sun-icon" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
    <svg class="moon-icon" viewBox="0 0 24 24" width="24" height="24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  </button>
</div>


<div class="fade-in-section" style="text-align: center; margin-top: -1rem;">
  
  <!-- Avatar Section (Automatically grabs your GitHub Profile Pic) -->
  <div class="profile-container">
    <img src="https://github.com/d08689390-byte/Main/blob/main/avatar.jpg" alt="Denis Kuizinas" class="profile-avatar">
  </div>
  
  <p class="hero-text" style="font-size: 1.35rem; max-width: 600px; margin: 0 auto 1.5rem auto; line-height: 1.6;">
    Hi, I'm <strong>Denis Kuizinas</strong>! Welcome to my portfolio.
  </p>
  
  <p class="bio-text" style="font-style: italic; max-width: 600px; margin: 0 auto 2.5rem auto; color: var(--text-muted);">
    "I use my powers for good (white-hat). Mostly because I look terrible in horizontal stripes and prison coffee is sub-par."
  </p>
</div>

## 🛠️ Tech Stack & Proficiencies
<div class="tech-stack-container fade-in-section">
  <span class="tech-tag">JavaScript / TypeScript</span>
  <span class="tech-tag">Python</span>
  <span class="tech-tag">HTML5 / CSS / SCSS</span>
  <span class="tech-tag">React</span>
  <span class="tech-tag">Node.js</span>
</div>

## 💻 Featured Development Works
<p class="fade-in-section sub-text">Click on any project block below to browse the production builds or review the repository files.</p>

<div class="project-grid fade-in-section">

  <!-- Project Card 1 -->
  <a href="https://stusite.me" target="_blank" rel="noopener" class="project-card">
    <div class="card-content">
      <h3>Bus Timetable for WAP (dumb) phones</h3>
      <p>A lightweight Bus Timetable engine accessible anywhere globally, built for minimalist mobile viewports.</p>
    </div>
    <div class="card-tags">
      <span class="tech-tag html-tag">HTML5</span>
      <span class="tech-tag css-tag">CSS</span>
    </div>
  </a>

  <!-- Project Card 2 -->
  <a href="https://stusite.me" target="_blank" rel="noopener" class="project-card">
    <div class="card-content">
      <h3>Source Code Repository Hub</h3>
      <p>Access the structural base directories and deployment source files for my live web platforms.</p>
    </div>
    <div class="card-tags">
      <span class="tech-tag react-tag">React</span>
      <span class="tech-tag node-tag">Node.js</span>
    </div>
  </a>
</div>

<br>
<br>

## 📬 Drop a Line

Have a development project option or an engineering infrastructure task you want to discuss? Securely message me directly using the transmission form below.

<!-- Contact Form Block -->
<div class="fade-in-section contact-form-wrapper">
  <form action="https://formspree.io/f/myezzbgn" method="POST" class="portfolio-form">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Your Name" required>
    </div>
    <div class="form-group">
      <label for="email">Email Address</label>
      <input type="email" name="_replyto" id="email" placeholder="name@example.com" required>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea name="message" id="message" rows="5" placeholder="Write your message here..." required></textarea>
    </div>
    <button type="submit" class="submit-btn">Send Message</button>
  </form>
  <p style="margin-top: 1.5rem; font-size: 0.9rem;">Alternatively, let's connect on [GitHub](https://github.com/d08689390-byte "GitHub Profile").</p>
</div>

<br>
<br>

## ☕ Support & Sponsorship

Really like my coding works? Support my open-source tools today by deploying a donation platform link:

*   **[Buy Me A Coffee](https://buymeacoffee.com/deniskuizinasdev)** — Quick direct support
*   **[GitHub Sponsors](https://github.com/d08689390-byte/sponsors)** — Direct developer integration
*   **[Thanks.dev Profile](https://thanks.dev/gh/d08689390-byte)** — Open-source ecosystem support

<br>
<br>

<!-- Scripts Isolated Separately at the very bottom -->
<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });

  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  });
</script>
