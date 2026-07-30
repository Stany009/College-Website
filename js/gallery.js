document.addEventListener('DOMContentLoaded', () => {
    // Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    
    let currentIndex = 0;
    // Only get visible items for navigation
    const getVisibleItems = () => Array.from(galleryItems).filter(item => item.style.display !== 'none');

    const openLightbox = (index, visibleItems) => {
        currentIndex = index;
        lightboxImg.src = visibleItems[currentIndex].querySelector('img').src;
        lightbox.style.display = 'flex';
    };

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const visibleItems = getVisibleItems();
            const index = visibleItems.indexOf(item);
            if (index !== -1) openLightbox(index, visibleItems);
        });
    });

    const closeLightbox = () => { lightbox.style.display = 'none'; };
    
    const showPrev = () => {
        const visibleItems = getVisibleItems();
        if (visibleItems.length === 0) return;
        currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
        lightboxImg.src = visibleItems[currentIndex].querySelector('img').src;
    };

    const showNext = () => {
        const visibleItems = getVisibleItems();
        if (visibleItems.length === 0) return;
        currentIndex = (currentIndex + 1) % visibleItems.length;
        lightboxImg.src = visibleItems[currentIndex].querySelector('img').src;
    };

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    if (lightbox) lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard nav
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        }
    });
});
