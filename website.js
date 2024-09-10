document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Smooth scrolling
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    };

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Contact form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
    });
});
