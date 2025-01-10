// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Tooltip Functionality
const tooltip = document.getElementById('tooltip');

// Example: Show tooltip on feature hover (Adjust selectors as needed)
const features = document.querySelectorAll('.feature');

features.forEach(feature => {
    feature.addEventListener('mouseover', (e) => {
        const title = feature.querySelector('h2').innerText;
        const description = feature.querySelector('p').innerText;
        tooltip.innerHTML = `<strong>${title}</strong><br>${description}`;
        tooltip.style.display = 'block';
    });

    feature.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
    });

    feature.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});

// Smooth Scrolling (Optional)
const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').split('.html')[0];
        const targetSection = document.getElementById(targetId);
        if(targetSection){
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        }
    });
});
