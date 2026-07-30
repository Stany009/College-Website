document.addEventListener('DOMContentLoaded', () => {
    // Create scroll progress bar element
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Update progress bar on scroll
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Intersection Observer for scroll animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation classes to elements
    const fadeElements = document.querySelectorAll('.card, .stat-card, .department-card, .gallery-item');
    fadeElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    const slideLeftElements = document.querySelectorAll('.split-layout > div:first-child');
    slideLeftElements.forEach(el => {
        el.classList.add('slide-left');
        observer.observe(el);
    });

    const slideRightElements = document.querySelectorAll('.split-layout > div:last-child');
    slideRightElements.forEach(el => {
        el.classList.add('slide-right');
        observer.observe(el);
    });
});
