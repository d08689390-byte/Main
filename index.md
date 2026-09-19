---
layout: default
title: Denis Kuizinas | Cyber-Hacker Portfolio
---

<!-- 🌐 CDN Font Injections for Space Mono -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://gstatic.com" crossorigin>
<link href="https://googleapis.com" rel="stylesheet">

<!-- 🌌 FULL-SCREEN TERMINAL PRELOADER & SEAMLESS TRANSITION -->
<div id="terminal-loader">
  <div class="loader-content">
    <!-- Typing Console Output -->
    <div class="console-log-box">
      <span id="typing-text"></span><span class="typing-cursor">_</span>
    </div>
    
    <!-- The Jump & Shake Target Quote -->
    <div id="jumper-quote" class="bio-text-wrapper">
      <p class="bio-text">
        "I use my powers for good (white-hat). Mostly because I look terrible in horizontal stripes and prison coffee is sub-par."
      </p>
    </div>
  </div>
</div>

<!-- 📺 Ambient CRT Screen Scanlines -->
<div class="scanlines"></div>

<!-- 🌓 Restructured Cyber Theme Controller Bar -->
<div class="theme-bar">
  <button id="theme-toggle" class="cyber-toggle-btn" aria-label="Toggle system interface matrix">
    <span class="mode-indicator">[ SYS_MODE: <span id="mode-text">DARK</span> ]</span>
  </button>
</div>


<div style="text-align: center; margin-top: 1.5rem; position: relative; z-index: 2;">
  <div class="profile-container glitch-hover">
    <img src="avatar.jpg" alt="Denis Kuizinas" class="profile-avatar">
  </div>
  
  <h1 class="glitch-title">Denis Kuizinas</h1>
  <p class="hero-subtitle">Building epic, engaging web applications that connect people across any device.</p>
</div>

## 🛠️ System Stack & Core Proficiencies
<div class="tech-stack-container">
  <span class="tech-tag">JavaScript / TypeScript</span>
  <span class="tech-tag">Python</span>
  <span class="tech-tag">HTML5 / CSS / SCSS</span>
  <span class="tech-tag">React</span>
  <span class="tech-tag">Node.js</span>
</div>

## 💻 Decrypted Repositories & Works
<p class="sub-text">Select a secure terminal data node block below to view operational source code files.</p>

<div class="project-grid">
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
  <a href="https://cloud.stusite.me/source" target="_blank" rel="noopener" class="project-card">
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

## 📬 Open Secure Channel

Have a development project option or an engineering infrastructure task you want to discuss? Securely message me directly using the transmission form below.

<div class="contact-form-wrapper">
  <form action="https://formspree.io/f/myezzbgn" method="POST" class="portfolio-form">
    <div class="form-group">
      <label for="name">User Identity</label>
      <input type="text" name="name" id="name" placeholder="Your Name" required>
    </div>
    <div class="form-group">
      <label for="email">Return Channel (Email)</label>
      <input type="email" name="_replyto" id="email" placeholder="name@example.com" required>
    </div>
    <div class="form-group">
      <label for="message">Payload Transmission (Message)</label>
      <textarea name="message" id="message" rows="5" placeholder="Write your message here..." required></textarea>
    </div>
    <button type="submit" class="submit-btn">Transmit Payload</button>
  </form>
</div>

<br>

## ☕ Fuel Infrastructure / Support

Really like my coding works? Support my open-source tools today by deploying a donation platform link:

*   **[Buy Me A Coffee](https://buymeacoffee.com/deniskuizinasdev)** — Quick direct support
*   **[GitHub Sponsors](https://github.com/sponsors/d08689390-byte)** — Direct developer integration
*   **[Thanks.dev Profile](https://thanks.dev/gh/d08689390-byte)** — Open-source ecosystem support

<br>
<br>

<script>
  // ⚡ The Orchestrator Script Sequence
  const introString = "DenisKuizinas@portfolio:~# boot_sequence --init --white-hat";
  const typingTarget = document.getElementById("typing-text");
  const loader = document.getElementById("terminal-loader");
  const quoteContainer = document.getElementById("jumper-quote");
  let charIndex = 0;

  function runSequence() {
    // Step 1: Type out the hack command line code
    if (charIndex < introString.length) {
      typingTarget.textContent += introString.charAt(charIndex);
      charIndex++;
      setTimeout(runSequence, 35); 
    } else {
      // Step 2: Show and shake the quote inside loader canvas
      setTimeout(() => {
        quoteContainer.classList.add("visible-now");
        quoteContainer.classList.add("jump-shake-active");
        
        // Step 3: Dissolve preloader screen and RESTORE SCROLL PHYSICS
        setTimeout(() => {
          loader.classList.add("fade-out-loader");
          document.body.classList.remove("loading-locked"); // Fixes the scroll lock issue!
          
          setTimeout(() => { loader.style.display = "none"; }, 500);
        }, 1600);
        
      }, 500);
    }
  }

  // Bind lock state on initial loading sequence initialization
  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add("loading-locked");
    setTimeout(runSequence, 300);
  });

  // Dark/Light Toggle System (Pure stark matrix vs clean layout sheets)
  const themeToggle = document.getElementById('theme-toggle');
  const modeText = document.getElementById('mode-text');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  modeText.textContent = savedTheme.toUpperCase();

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    modeText.textContent = newTheme.toUpperCase();
    localStorage.setItem('portfolio-theme', newTheme);
  });
</script>
