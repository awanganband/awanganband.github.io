/* scripts.js – not required but nice to have */
document.addEventListener('DOMContentLoaded', () => {
    // Highlight the current page link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.href.endsWith(window.location.pathname)) {
            link.style.textDecoration = 'underline';
        }
    });
});
