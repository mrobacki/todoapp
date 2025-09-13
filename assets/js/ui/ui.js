// Light Dark Mode Switcher
export function darkModeSwitcher() {
  const buttonsContainer = document.querySelector('.dark-mode-buttons');
  if(!buttonsContainer) return;

  buttonsContainer.addEventListener('click', (e) => {
    buttonsContainer.querySelectorAll('.btn').forEach(el => {
      el.classList.toggle('active')
    });
    const html = document.documentElement;
    if(html.getAttribute('data-bs-theme') === 'light') {
      html.setAttribute('data-bs-theme', 'dark');
    } else if(html.getAttribute('data-bs-theme') === 'dark') {
      html.setAttribute('data-bs-theme', 'light');
    }
  })
}

// Show Hide Sidebar Switcher
export function showHideSidebar() {
  // Sidebar elements
  const sidebar = document.querySelector('.sidebar');
  const sidebarColClass = [...sidebar.classList].find(cls => cls.startsWith('col'));
  const toggleBtn = document.querySelector('.sidebar-toggle');

  const sidebarElements = sidebar.querySelectorAll(':scope > *:not(.sidebar-top-bar)');

  // Content elements
  const contentContainer = document.querySelector('.content');
  const contentContainerColClass = [...contentContainer.classList].find(cls => cls.startsWith('col'));

  if (!sidebar || !toggleBtn) return;

  toggleBtn.addEventListener('click', (e) => {
    if (sidebar.classList.contains(sidebarColClass)) {
      sidebar.classList.remove(sidebarColClass);
      sidebar.classList.add('collapsed');

      contentContainer.classList.remove(contentContainerColClass);
      contentContainer.classList.add('full');

      sidebarElements.forEach(el => {
        el.classList.add('invisible');
      });

    } else {
      sidebar.classList.add(sidebarColClass);
      sidebar.classList.remove('collapsed');

      contentContainer.classList.add(contentContainerColClass);
      contentContainer.classList.remove('full');

      sidebarElements.forEach(el => {
        setTimeout(() => {
          el.classList.remove('invisible');
        }, 100);
      });
    }
  });
}