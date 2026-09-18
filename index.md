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
  
  <!-- Avatar Section -->
  <div class="profile-container">
    <img src="{{ site.baseurl }}/avatar.jpg" alt="Denis Kuizinas" class="profile-avatar" onerror="this.onerror=null; this.src='https://unsplash.com';">
  </div>
  
  <p class="hero-text" style="font-size: 1.35rem; max-width: 600px; margin: 0 auto 2.5rem auto; line-height: 1.6;">
    Hi, I'm <strong>Denis Kuizinas</strong>! Welcome to my portfolio. I build epic, engaging websites that connect people on whatever device they have.
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
  <a href="https://wap.cloud.stusite.me/bustimes" target="_blank" rel="noopener" class="project-card">
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
  <a href="https://source.cloud.stusite.me" target="_blank" rel="noopener" class="project-card">
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

<div class="fade-in-section">

## 📬 Drop a Line

Have a development project option or an engineering infrastructure task you want to discuss? Let's connect on [GitHub](https://github.com/d08689390-byte "GitHub Profile").

</div>

<div class="fade-in-section sponsor-box">

## ☕ Support & Sponsorship

Really like my coding works? Support my open-source tools today by deploying a donation platform link:

*   **[Buy Me A Coffee](https://buymeacoffee.com/deniskuizinasdev)** — Quick direct support
*   **[GitHub Sponsors](https://github.com/d08689390-byte/sponsors)** — Direct developer integration
*   **[Thanks.dev Profile](https://thanks.dev/gh/d08689390-byte)** — Open-source ecosystem support

</div>

<!-- Interactive UI System Scripts -->
<script>
  // Fade-In On Scroll Action via IntersectionObserver
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

  // Dark/Light Theme Switching Mechanics
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
