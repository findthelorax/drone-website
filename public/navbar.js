document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navLinks a');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');

    if (!section2 || !section3) {
        console.error('Sections not found');
        return;
    }

    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log('IntersectionObserver entry:', entry);
            if (entry.isIntersecting) {
                if (entry.target.id === 'section2' || entry.target.id === 'section3') {
                    navbarLinks.forEach(link => {
                        link.classList.add('black-text');
                        console.log('Added black-text class to', link);
                    });
                }
            } else {
                navbarLinks.forEach(link => {
                    link.classList.remove('black-text');
                    console.log('Removed black-text class from', link);
                });
            }
        });
    }, options);

    observer.observe(section2);
    observer.observe(section3);
    console.log('Observer set up for section2 and section3');
});