document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            gsap.to(window, {
                duration: 1,
                scrollTo: { y: this.getAttribute('href'), autoKill: false },
                ease: 'power3.inOut',
            });
        });
    });

    // Initialize AOS (Animate On Scroll) library
    AOS.init();

    // Highlight the active navigation item based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', function () {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });

    // Simple form validation for the Contact Me section
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (validateForm(nameInput, emailInput, messageInput)) {
            // Here, you can add your logic to handle the form submission
            alert('Form submitted successfully!');
            // Reset the form
            contactForm.reset();
        }
    });

    function validateForm(nameInput, emailInput, messageInput) {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            isValid = false;
            alert('Please enter your name.');
        }

        if (!isValidEmail(emailInput.value.trim())) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

        if (messageInput.value.trim() === '') {
            isValid = false;
            alert('Please enter your message.');
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
