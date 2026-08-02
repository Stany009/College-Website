/* ============================================================
   Gallery – Filtering, Lightbox, Keyboard Navigation
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Category Filtering ----
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = '';
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ---- Lightbox ----
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    if (!lightbox || !lightboxImg) return;

    let currentIndex = 0;

    const getVisibleItems = () =>
        Array.from(galleryItems).filter(item => item.style.display !== 'none');

    const openLightbox = (index) => {
        const visibleItems = getVisibleItems();
        if (index < 0 || index >= visibleItems.length) return;
        currentIndex = index;
        lightboxImg.src = visibleItems[currentIndex].querySelector('img').src;
        lightboxImg.alt = visibleItems[currentIndex].querySelector('img').alt;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        closeBtn?.focus();
    };

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    };

    const showPrev = () => {
        const visibleItems = getVisibleItems();
        if (visibleItems.length === 0) return;
        currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
        lightboxImg.src = visibleItems[currentIndex].querySelector('img').src;
        lightboxImg.alt = visibleItems[currentIndex].querySelector('img').alt;
    };

    const showNext = () => {
        const visibleItems = getVisibleItems();
        if (visibleItems.length === 0) return;
        currentIndex = (currentIndex + 1) % visibleItems.length;
        lightboxImg.src = visibleItems[currentIndex].querySelector('img').src;
        lightboxImg.alt = visibleItems[currentIndex].querySelector('img').alt;
    };

    // Click handlers for gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const visibleItems = getVisibleItems();
            const index = visibleItems.indexOf(item);
            if (index !== -1) openLightbox(index);
        });

        // Make items keyboard accessible
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', 'View image: ' + (item.querySelector('img')?.alt || 'Gallery image'));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
    });

    // Lightbox navigation
    closeBtn?.addEventListener('click', closeLightbox);
    prevBtn?.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    nextBtn?.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) showNext();
            else showPrev();
        }
    }, { passive: true });
});
