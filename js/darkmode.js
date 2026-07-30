document.addEventListener('DOMContentLoaded', () => {
    // Add toggle button to navbar
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'dark-mode-toggle';
        toggleBtn.innerText = '🌙 / ☀️';
        navLinks.appendChild(toggleBtn);

        // Check local storage
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }

        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }
});
