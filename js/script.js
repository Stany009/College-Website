/* ============================================================
   Main Script – St. Andrew's College
   ============================================================ */

// ---- Loader Configuration ----
let loaderConfig = null;

/**
 * Load loader configuration from JSON file
 * Falls back to defaults if config fails to load
 */
async function loadLoaderConfig() {
    try {
        const response = await fetch('config/loader-config.json');
        if (!response.ok) throw new Error('Config not found');
        loaderConfig = await response.json();
        console.log('✅ Loader config loaded:', loaderConfig.version);
    } catch (error) {
        console.warn('⚠️ Loader config not found, using defaults');
        loaderConfig = getDefaultConfig();
    }
    return loaderConfig;
}

/**
 * Default configuration if JSON file is not available
 */
function getDefaultConfig() {
    return {
        version: '1.0.0-fallback',
        defaults: {
            animation: {
                showDelay: 100,
                hideDelay: 300,
                transitionDuration: 400,
                maxLoadTime: 2000
            }
        },
        pages: {
            'index': { icon: '🏠', text: "Welcome to St. Andrew's", colors: { logoGradientStart: '#0B3D91', logoGradientEnd: '#1a5bc4', barGradientStart: '#0B3D91', barGradientEnd: '#D4AF37', shadow: 'rgba(11,61,145,0.3)', shadowHover: 'rgba(11,61,145,0.4)' } },
            'about': { icon: '🏛️', text: 'Discovering our story', colors: { logoGradientStart: '#D4AF37', logoGradientEnd: '#e6c84a', barGradientStart: '#D4AF37', barGradientEnd: '#0B3D91', shadow: 'rgba(212,175,55,0.3)', shadowHover: 'rgba(212,175,55,0.4)' } },
            'admissions': { icon: '📝', text: 'Starting your journey', colors: { logoGradientStart: '#22C55E', logoGradientEnd: '#34d399', barGradientStart: '#22C55E', barGradientEnd: '#34d399', shadow: 'rgba(34,197,94,0.3)', shadowHover: 'rgba(34,197,94,0.4)' } },
            'departments': { icon: '📚', text: 'Exploring programs', colors: { logoGradientStart: '#3B82F6', logoGradientEnd: '#60A5FA', barGradientStart: '#3B82F6', barGradientEnd: '#60A5FA', shadow: 'rgba(59,130,246,0.3)', shadowHover: 'rgba(59,130,246,0.4)' } },
            'events': { icon: '🎉', text: 'Finding events', colors: { logoGradientStart: '#F59E0B', logoGradientEnd: '#FBBF24', barGradientStart: '#F59E0B', barGradientEnd: '#FBBF24', shadow: 'rgba(245,158,11,0.3)', shadowHover: 'rgba(245,158,11,0.4)' } },
            'placements': { icon: '💼', text: 'Loading opportunities', colors: { logoGradientStart: '#082d6e', logoGradientEnd: '#0B3D91', barGradientStart: '#082d6e', barGradientEnd: '#0B3D91', shadow: 'rgba(8,45,110,0.4)', shadowHover: 'rgba(8,45,110,0.5)' } },
            'campus-life': { icon: '🏫', text: 'Exploring campus', colors: { logoGradientStart: '#F43F5E', logoGradientEnd: '#FB7185', barGradientStart: '#F43F5E', barGradientEnd: '#FB7185', shadow: 'rgba(244,63,94,0.3)', shadowHover: 'rgba(244,63,94,0.4)' } },
            'gallery': { icon: '📷', text: 'Loading gallery', colors: { logoGradientStart: '#8B5CF6', logoGradientEnd: '#A78BFA', barGradientStart: '#8B5CF6', barGradientEnd: '#A78BFA', shadow: 'rgba(139,92,246,0.3)', shadowHover: 'rgba(139,92,246,0.4)' } },
            'library': { icon: '📖', text: 'Accessing library', colors: { logoGradientStart: '#14B8A6', logoGradientEnd: '#2DD4BF', barGradientStart: '#14B8A6', barGradientEnd: '#2DD4BF', shadow: 'rgba(20,184,166,0.3)', shadowHover: 'rgba(20,184,166,0.4)' } },
            'contact': { icon: '📞', text: 'Connecting you', colors: { logoGradientStart: '#6366F1', logoGradientEnd: '#818CF8', barGradientStart: '#6366F1', barGradientEnd: '#818CF8', shadow: 'rgba(99,102,241,0.3)', shadowHover: 'rgba(99,102,241,0.4)' } },
            'student-portal': { icon: '🎓', text: 'Loading dashboard', colors: { logoGradientStart: '#0B3D91', logoGradientEnd: '#D4AF37', barGradientStart: '#0B3D91', barGradientEnd: '#D4AF37', shadow: 'rgba(11,61,145,0.4)', shadowHover: 'rgba(11,61,145,0.5)' } },
            'faculty-portal': { icon: '👨‍🏫', text: 'Loading portal', colors: { logoGradientStart: '#475569', logoGradientEnd: '#64748B', barGradientStart: '#475569', barGradientEnd: '#64748B', shadow: 'rgba(71,85,105,0.3)', shadowHover: 'rgba(71,85,105,0.4)' } }
        }
    };
}

/**
 * Apply loader configuration to the loader element
 * @param {HTMLElement} loader - The loader element
 * @param {string} pageName - The page identifier
 */
function applyLoaderConfig(loader, pageName) {
    if (!loaderConfig || !loaderConfig.pages) return;
    
    const pageConfig = loaderConfig.pages[pageName] || loaderConfig.pages['index'];
    const animConfig = loaderConfig.defaults?.animation || {};
    const logo = loader.querySelector('.loader-logo');
    const bar = loader.querySelector('.loader-bar');
    const barInner = loader.querySelector('.loader-bar-inner');
    const text = loader.querySelector('.loader-text');
    
    // Apply colors
    if (logo && pageConfig.colors) {
        logo.style.background = `linear-gradient(135deg, ${pageConfig.colors.logoGradientStart}, ${pageConfig.colors.logoGradientEnd})`;
        logo.style.boxShadow = `0 8px 24px ${pageConfig.colors.shadow}`;
    }
    
    if (barInner && pageConfig.colors) {
        barInner.style.background = `linear-gradient(90deg, ${pageConfig.colors.barGradientStart}, ${pageConfig.colors.barGradientEnd})`;
    }
    
    // Apply text
    if (text && pageConfig.text) {
        text.textContent = pageConfig.text;
    }
    
    // Apply logo animation style
    if (logo) {
        // Remove all animation classes
        logo.classList.remove('anim-pulse', 'anim-spin', 'anim-bounce', 'anim-shake', 
                            'anim-rubber-band', 'anim-jello', 'anim-flip', 'anim-none');
        
        // Get animation from page config or defaults
        const logoAnim = pageConfig.logoAnimation || animConfig.logoAnimation || 'pulse';
        const animStyle = loaderConfig.animations?.logoStyles?.[logoAnim];
        
        if (animStyle && animStyle.cssClass) {
            logo.classList.add(animStyle.cssClass);
        } else {
            logo.classList.add('anim-pulse'); // Default
        }
        
        // Apply animation speed if specified
        const speed = pageConfig.logoAnimationSpeed || animConfig.logoAnimationSpeed || 1.5;
        logo.style.animationDuration = `${speed}s`;
    }
    
    // Apply bar animation style
    if (bar) {
        // Remove all bar animation classes
        bar.classList.remove('bar-slide', 'bar-fill', 'bar-pulse', 'bar-grow', 'bar-none');
        
        // Get animation from page config or defaults
        const barAnim = pageConfig.barAnimation || animConfig.barAnimation || 'slide';
        const barStyle = loaderConfig.animations?.barStyles?.[barAnim];
        
        if (barStyle && barStyle.cssClass) {
            bar.classList.add(barStyle.cssClass);
        } else {
            bar.classList.add('bar-slide'); // Default
        }
        
        // Apply animation speed if specified
        const barSpeed = pageConfig.barAnimationSpeed || animConfig.barAnimationSpeed || 1.2;
        if (barInner) {
            barInner.style.animationDuration = `${barSpeed}s`;
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {

    // ---- Load Configuration ----
    await loadLoaderConfig();

    // ---- Page Loading Screen ----
    const pageLoader = document.getElementById('pageLoader');
    const pageTransition = document.getElementById('pageTransition');
    const animConfig = loaderConfig?.defaults?.animation || { showDelay: 100, hideDelay: 300, transitionDuration: 400, maxLoadTime: 2000 };
    
    // Detect current page and set data attribute
    if (pageLoader) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const pageName = currentPage.replace('.html', '');
        pageLoader.setAttribute('data-page', pageName);
        
        // Apply config-based styles
        applyLoaderConfig(pageLoader, pageName);
        
        // Also set data-page on all loaders for navigation targets
        document.querySelectorAll('.page-loader').forEach(loader => {
            loader.setAttribute('data-page', pageName);
        });
        
        // Small delay to ensure smooth appearance
        setTimeout(() => {
            pageLoader.classList.add('active');
            document.body.classList.add('page-entering');
            
            // Hide loader after page loads
            window.addEventListener('load', () => {
                setTimeout(() => {
                    pageLoader.classList.add('fade-out');
                    setTimeout(() => {
                        pageLoader.classList.remove('active', 'fade-out');
                        document.body.classList.remove('page-entering');
                    }, animConfig.transitionDuration);
                }, animConfig.hideDelay);
            });
            
            // Fallback: hide loader after max load time
            setTimeout(() => {
                if (pageLoader.classList.contains('active')) {
                    pageLoader.classList.add('fade-out');
                    setTimeout(() => {
                        pageLoader.classList.remove('active', 'fade-out');
                        document.body.classList.remove('page-entering');
                    }, animConfig.transitionDuration);
                }
            }, animConfig.maxLoadTime);
        }, animConfig.showDelay);
    }
    
    // Handle navigation clicks with loading screen
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const isFileProtocol = window.location.protocol === 'file:';
    const usePageLoader = isLocalhost || isFileProtocol;
    
    if (usePageLoader && pageLoader && pageTransition) {
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');
            
            // Skip anchor links, javascript:void, and external links
            if (!href || href.startsWith('#') || href.startsWith('javascript:') || 
                href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
                return;
            }
            
            link.addEventListener('click', function(e) {
                // Don't intercept if modifier keys are pressed
                if (e.ctrlKey || e.metaKey || e.shiftKey) return;
                
                e.preventDefault();
                const targetUrl = this.href;
                
                // Determine target page and update loader style
                const targetPage = targetUrl.split('/').pop() || 'index.html';
                const targetPageName = targetPage.replace('.html', '');
                pageLoader.setAttribute('data-page', targetPageName);
                
                // Apply config-based styles for target page
                applyLoaderConfig(pageLoader, targetPageName);
                
                // Show loading screen
                pageLoader.classList.add('active');
                document.body.classList.add('page-entering');
                
                // Navigate after animation
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, animConfig.transitionDuration);
            });
        });
    }

    // ---- Mobile Navigation ----
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const isActive = mobileNav.classList.contains('active');
            mobileNav.classList.toggle('active');
            hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', !isActive);
            document.body.style.overflow = isActive ? '' : 'hidden';
        });

        // Close mobile nav when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // ---- Navbar Scroll Effect ----
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.classList.contains('scrolled')) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial state
    }

    // ---- FAQ Accordion ----
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove('active');
                        const otherAnswer = other.querySelector('.faq-answer');
                        if (otherAnswer) otherAnswer.style.maxHeight = '0';
                        const otherQuestion = other.querySelector('.faq-question');
                        if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
                if (!isActive) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    question.setAttribute('aria-expanded', 'true');
                } else {
                    answer.style.maxHeight = '0';
                    question.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });

    // ---- Smooth Scroll for Anchor Links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ---- Active Page Highlight ----
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ---- Keyboard Navigation for Lightbox ----
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
                document.body.style.overflow = '';
            }
            if (e.key === 'ArrowLeft') {
                document.getElementById('lightboxPrev')?.click();
            }
            if (e.key === 'ArrowRight') {
                document.getElementById('lightboxNext')?.click();
            }
        }
    });

    // ---- Back to Top Button ----
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.style.cssText = `
        position: fixed; bottom: 2rem; right: 2rem; width: 48px; height: 48px;
        background: var(--primary); color: white; border: none; border-radius: 50%;
        font-size: 1.25rem; cursor: pointer; opacity: 0; visibility: hidden;
        transition: all 0.3s; z-index: 100; box-shadow: 0 4px 12px rgba(11,61,145,0.3);
        display: flex; align-items: center; justify-content: center;
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-3px)';
        backToTop.style.boxShadow = '0 6px 20px rgba(11,61,145,0.4)';
    });

    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0)';
        backToTop.style.boxShadow = '0 4px 12px rgba(11,61,145,0.3)';
    });
});
