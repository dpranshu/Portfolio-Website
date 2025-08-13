document.addEventListener('DOMContentLoaded', function () {
    // Section IDs in scroll order
    const sections = ['hero', 'about', 'my-work', 'contact'];

    // Get arrow elements
    const upArrow = document.querySelector('.nav-up');
    const downArrow = document.querySelector('.nav-down');

    // Function to determine the currently viewed section
    function getCurrentSectionIndex() {
        const scrollMiddle = window.scrollY + window.innerHeight / 2;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (!section) continue;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollMiddle >= sectionTop && scrollMiddle <= sectionBottom) {
                return i;
            }
        }

        return 0;
    }

    // Update navigation arrow links based on scroll position
    function updateArrowLinks() {
        const currentIndex = getCurrentSectionIndex();

        // Safely update up arrow
        if (upArrow) {
            const upIndex = currentIndex > 0 ? currentIndex - 1 : 0;
            upArrow.setAttribute('href', `#${sections[upIndex]}`);
        }

        // Safely update down arrow
        if (downArrow) {
            const downIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : sections.length - 1;
            downArrow.setAttribute('href', `#${sections[downIndex]}`);
        }
    }

    // Initial update
    updateArrowLinks();

    // Update on scroll
    window.addEventListener('scroll', updateArrowLinks);
});


//
// nextpagee 

