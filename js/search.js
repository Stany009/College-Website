document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.department-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            cards.forEach(card => {
                // Check data-search attribute and text content
                const searchableText = (card.getAttribute('data-search') + " " + card.innerText).toLowerCase();
                if (searchableText.includes(term)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
