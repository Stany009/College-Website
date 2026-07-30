document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successPopup = document.getElementById('successPopup');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const message = document.getElementById('message');

            // Name validation
            if (!name.value.trim()) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('nameError').style.display = 'none';
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('emailError').style.display = 'none';
            }

            // Phone validation
            if (phone.value.length < 10) {
                document.getElementById('phoneError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('phoneError').style.display = 'none';
            }

            // Message validation
            if (!message.value.trim()) {
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('messageError').style.display = 'none';
            }

            if (isValid) {
                successPopup.style.display = 'block';
                form.reset();
            }
        });
    }
});
