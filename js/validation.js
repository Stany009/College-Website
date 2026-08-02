/* ============================================================
   Contact Form Validation – Real-time Feedback
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successPopup = document.getElementById('successPopup');

    if (!form) return;

    // Real-time validation
    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });

    function validateField(field) {
        const id = field.id;
        const value = field.value.trim();
        let isValid = true;

        switch (id) {
            case 'name':
                isValid = value.length >= 2;
                break;
            case 'email':
                isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                break;
            case 'phone':
                isValid = value.length >= 10;
                break;
            case 'message':
                isValid = value.length >= 10;
                break;
        }

        const errorEl = document.getElementById(id + 'Error');
        if (errorEl) {
            if (!isValid && value.length > 0) {
                errorEl.classList.add('visible');
                field.style.borderColor = 'var(--error)';
                field.classList.add('error');
            } else {
                errorEl.classList.remove('visible');
                field.style.borderColor = '';
                field.classList.remove('error');
            }
        }

        return isValid;
    }

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const fields = ['name', 'email', 'phone', 'message'];
        fields.forEach(id => {
            const field = document.getElementById(id);
            if (field && !validateField(field)) {
                isValid = false;
            }
        });

        if (isValid) {
            if (successPopup) {
                successPopup.style.display = 'flex';
            }
            form.reset();
            // Clear any error states
            form.querySelectorAll('.form-error').forEach(err => err.classList.remove('visible'));
            form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
                input.style.borderColor = '';
                input.classList.remove('error');
            });
        }
    });
});
