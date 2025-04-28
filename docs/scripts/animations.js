function animateOnView() {
    const observer = new IntersectionObserver((entries) => {
        // Loop over the entries
        entries.forEach((entry) => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('fadeIn');
                entry.target.classList.remove('opacity-0');
            }
        });
    });
    observer.observe(document.getElementsByClassName('onViewedAnimation')[0]);
}

animateOnView();
