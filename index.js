const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

// Optional: Save theme preference to localStorage
if (localStorage.getItem('theme') === 'dark') {
    themeSwitch.checked = true;
    body.classList.add('dark-mode');
}

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});



