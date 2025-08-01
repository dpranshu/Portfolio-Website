document.addEventListener('DOMContentLoaded', function() {
    // Get all sections and navigation arrows
    const sections = ['hero', 'about', 'my-work', 'contact'];
    const upArrow = document.querySelector('.nav-up');
    const downArrow = document.querySelector('.nav-down');

    // Function to get current section
    function getCurrentSection() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (!section) continue;
            
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                return i;
            }
        }
        return 0;
    }

    // Function to update arrow hrefs
    function updateArrows() {
        const currentIndex = getCurrentSection();
        
        // Update up arrow
        if (currentIndex > 0) {
            upArrow.href = '#' + sections[currentIndex - 1];
        } else {
            upArrow.href = '#' + sections[0];
        }
        
        // Update down arrow
        if (currentIndex < sections.length - 1) {
            downArrow.href = '#' + sections[currentIndex + 1];
        } else {
            downArrow.href = '#' + sections[sections.length - 1];
        }
    }

    // Update arrows on scroll
    window.addEventListener('scroll', updateArrows);
    
    // Initial update
    updateArrows();
});