// Navbar toggle functionality for small screens
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Smooth scrolling using arrow keys
const parallaxContainer = document.querySelector('.parallax-container');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Calculate the width of one parallax item (taking margins into account if necessary)
const parallaxItems = document.querySelectorAll('.parallax-item');
const itemWidth = parallaxItems[0].offsetWidth + 20; // Adjust based on any margin or padding

// Show or hide arrows based on scroll position
function updateArrows() {
    const scrollLeft = parallaxContainer.scrollLeft;
    const maxScrollLeft = parallaxContainer.scrollWidth - parallaxContainer.clientWidth;
    
    // Show left arrow only if we are not at the beginning
    leftArrow.style.display = scrollLeft > 0 ? 'block' : 'none';
    // Show right arrow only if we are not at the end
    rightArrow.style.display = scrollLeft < maxScrollLeft ? 'block' : 'none';
}

// Scroll control for arrow clicks
leftArrow.addEventListener('click', () => {
    parallaxContainer.scrollBy({ left: -itemWidth, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
    parallaxContainer.scrollBy({ left: itemWidth, behavior: 'smooth' });
});

// Event listener for arrow keys to navigate frames
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        parallaxContainer.scrollBy({ left: itemWidth, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
        parallaxContainer.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
});

// Initial arrow display
updateArrows();

// Update arrow visibility on scroll
parallaxContainer.addEventListener('scroll', updateArrows);

