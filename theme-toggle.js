/* theme-toggle.js — identical to investsim version */
(function () {
  var t = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.textContent = t === 'dark' ? '☀️' : '🌙';
    btn.style.cssText = 'position:fixed;bottom:1.25rem;right:1.25rem;z-index:999;background:var(--card);border:1px solid var(--border);border-radius:50%;width:2.4rem;height:2.4rem;font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.25);';
    btn.addEventListener('click', function () {
      t = t === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', t);
      localStorage.setItem('theme', t);
      btn.textContent = t === 'dark' ? '☀️' : '🌙';
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: t } }));
    });
    document.body.appendChild(btn);
  });
  window.THEME = {
    get text()    { return getComputedStyle(document.documentElement).getPropertyValue('--text').trim(); },
    get text2()   { return getComputedStyle(document.documentElement).getPropertyValue('--text2').trim(); },
    get text3()   { return getComputedStyle(document.documentElement).getPropertyValue('--text3').trim(); },
    get bg()      { return getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(); },
    get card()    { return getComputedStyle(document.documentElement).getPropertyValue('--card').trim(); },
    get border()  { return getComputedStyle(document.documentElement).getPropertyValue('--border').trim(); },
    get accent()  { return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(); },
  };
})();
