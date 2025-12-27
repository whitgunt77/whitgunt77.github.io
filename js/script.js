// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Toggle theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update button text (optional)
  themeToggle.textContent = body.classList.contains('dark-mode') ? '🌙' : '🌓';
});

// Save theme preference to localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Project Filter
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');

    const filter = button.dataset.filter;

    // Hide/show projects based on category
    document.querySelectorAll('.project-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});