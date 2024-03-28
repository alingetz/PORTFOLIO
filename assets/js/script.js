const filterButtons = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to the clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const isVisible = category === 'all' || category === cardCategory;

            if (isVisible) {
                card.style.display = 'inline-block';
                // Slide in the card using Framer Motion
                if (card.style.opacity !== '1') {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(50px)';
                    window.requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                }
            } else {
                // Slide out the card using Framer Motion
                if (card.style.opacity !== '0') {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    window.requestAnimationFrame(() => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(50px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300); // Adjust the duration of the animation (in milliseconds)
                    });
                }
            }
        });
    });
});



// JavaScript code to handle scrolling and add 'activenav' class

// Get all the navigation links
const navLinks = document.querySelectorAll('#mainav li a');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to handle scroll event
function handleScroll() {
    // Iterate over each navigation link
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (isInViewport(targetSection)) {
            // Remove 'activenav' class from all links
            navLinks.forEach(l => l.classList.remove('activenav'));
            // Add 'activenav' class to the current link
            link.classList.add('activenav');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();