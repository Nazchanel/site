// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme');

// Apply theme
function setTheme(theme) {
  if (theme === 'light') {
    document.documentElement.classList.add('light');
    document.getElementById('theme-toggle').textContent = '☀️';
  } else {
    document.documentElement.classList.remove('light');
    document.getElementById('theme-toggle').textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
}

// Initial load
setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));

// Toggle button
document.getElementById('theme-toggle').addEventListener('click', () => {
  const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
  setTheme(current === 'light' ? 'dark' : 'light');
});
// Fetch GitHub repos
async function loadProjects() {
  const grid = document.getElementById('projects-grid');
  try {
    const res = await fetch('https://api.github.com/users/Nazchanel/repos?sort=updated&per_page=6');
    const repos = await res.json();

    grid.innerHTML = repos.map(repo => `
      <div class="repo-card">
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <div class="repo-meta">
          ⭐ ${repo.stargazers_count} • ${repo.language || "N/A"}
        </div>
        <div class="repo-actions">
          <a href="${repo.html_url}" class="btn small" target="_blank">Code</a>
          ${repo.homepage ? `<a href="${repo.homepage}" class="btn small secondary" target="_blank">Live</a>` : ""}
        </div>
      </div>
    `).join("");
  } catch (e) {
    grid.innerHTML = "<p>Unable to load projects right now.</p>";
  }
}
loadProjects();
