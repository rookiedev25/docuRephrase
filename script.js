// Placeholder for JS logic
document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileInput");
  const uploadBox = document.querySelector(".upload-box");

  uploadBox.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
      alert(
        `You selected: ${file.name}\n\n(Parsing and AI functionality coming soon!)`
      );
      // Future: Parse file, extract text, show in left panel
    }
  });
});

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        themeToggle.checked = true;
    } else {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        themeToggle.checked = false;
    }
    
    // Toggle theme on checkbox change
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            // Switch to light theme
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark theme
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
});
