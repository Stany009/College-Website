/* ============================================================
   Core JavaScript – St. Andrew's College
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- 1. Fast Page Loader ---- */
    // The loader markup is pure CSS and shows instantly.
    // We just need to hide it once the window is fully loaded (or after a timeout fallback).
    const loader = document.getElementById('page-loader');
    
    if (loader) {
        // Fallback: Max wait time 1.5s
        const maxWait = setTimeout(() => {
            loader.classList.add('hidden');
        }, 1500);

        window.addEventListener('load', () => {
            clearTimeout(maxWait);
            loader.classList.add('hidden');
        });
    }

    /* ---- 2. Navbar Scroll Effect ---- */
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        // Initial check and scroll event listener
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    /* ---- 3. Mobile Navigation ---- */
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile nav when clicking a link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    /* ---- 4. FAQ Accordion ---- */
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all others
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }
                });

                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                    const answer = item.querySelector('.faq-answer');
                    if (answer) {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                    }
                }
            });
        }
    });
});
