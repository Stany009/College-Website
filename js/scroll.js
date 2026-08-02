/* ============================================================
   Scroll Effects – Animations, Counters, Progress Bar
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Scroll Progress Bar ----
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    }, { passive: true });

    // ---- Intersection Observer for Scroll Animations ----
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animation elements
    const animateElements = document.querySelectorAll(
        '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale, .stagger-children'
    );
    animateElements.forEach(el => observer.observe(el));

    // ---- Animated Counters ----
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                if (isNaN(target)) return;

                const duration = 2000; // 2 seconds
                const start = 0;
                const increment = target / (duration / 16); // ~60fps
                let current = start;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target.toLocaleString() + (target < 100 && el.closest('.hero-stat') ? '+' : '+');
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current).toLocaleString();
                    }
                }, 16);

                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    // Observe counter elements
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => counterObserver.observe(counter));

    // ---- Parallax Effect for Hero (subtle) ----
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                if (scrolled < window.innerHeight) {
                    hero.style.backgroundPositionY = scrolled * 0.3 + 'px';
                }
            }, { passive: true });
        }
    }

    // ---- Smooth Reveal for Cards ----
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.course-card, .testimonial-card, .stat-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
});
