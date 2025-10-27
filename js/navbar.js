// Mobile menu toggle functionality
const mobileToggle = document.getElementById('mobileToggle');
const navbarMenu = document.getElementById('navbarMenu');

mobileToggle.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.navbar')) {
        navbarMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    }
});