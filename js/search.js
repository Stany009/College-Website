/* ============================================================
   Department Search – Real-time Filtering
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.department-card');

    if (searchInput && cards.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();

            cards.forEach(card => {
                const searchableText = (
                    (card.getAttribute('data-search') || '') + ' ' + card.innerText
                ).toLowerCase();

                if (term === '' || searchableText.includes(term)) {
                    card.style.display = '';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        if (!searchableText.includes(searchInput.value.toLowerCase().trim())) {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });

        // Add smooth transition to cards
        cards.forEach(card => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
    }
});
