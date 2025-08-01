document.addEventListener('DOMContentLoaded', function() {
    const sections = ['hero', 'about', 'my-work'];
    let currentSectionIndex = 0;

    // Get navigation buttons
    const upButton = document.querySelector('.nav-up');
    const downButton = document.querySelector('.nav-down');

    // Function to navigate to a section
    function navigateToSection(index) {
        if (index >= 0 && index < sections.length) {
            currentSectionIndex = index;
            document.getElementById(sections[index]).scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Up button click handler
    upButton.addEventListener('click', function(e) {
        e.preventDefault();
        navigateToSection(currentSectionIndex - 1);
    });

    // Down button click handler
    downButton.addEventListener('click', function(e) {
        e.preventDefault();
        navigateToSection(currentSectionIndex + 1);
    });

    // Update current section based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        sections.forEach((section, index) => {
            const element = document.getElementById(section);
            const rect = element.getBoundingClientRect();
            
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSectionIndex = index;
            }
        });
    });
});
