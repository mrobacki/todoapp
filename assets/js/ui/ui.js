// Light Dark Mode Switcher
export function darkMode(buttons) {
  buttons = document.querySelector('.dark-mode-buttons');
  if(!buttons) return;

  buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')) {
      buttons.querySelectorAll('.btn').forEach(el => {
        el.classList.toggle('active')
      });
      const html = document.documentElement;
      if(html.getAttribute('data-bs-theme') === 'light') {
        html.setAttribute('data-bs-theme', 'dark');
      } else if(html.getAttribute('data-bs-theme') === 'dark') {
        html.setAttribute('data-bs-theme', 'light');
      }
    };
  })
}
