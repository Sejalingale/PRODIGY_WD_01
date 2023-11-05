const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Change the scroll position at which you want to apply the style
        navbar.style.backgroundColor = '#555'; // Change background color on scroll
        navbar.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.backgroundColor = '#333'; // Revert background color
        navbar.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)';
    }
});
