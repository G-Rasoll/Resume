        // Back to Top Button
        const backToTopBtn = document.getElementById('back-to-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('translate-y-16', 'opacity-0');
                backToTopBtn.classList.add('translate-y-0', 'opacity-100');
            } else {
                backToTopBtn.classList.add('translate-y-16', 'opacity-0');
                backToTopBtn.classList.remove('translate-y-0', 'opacity-100');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Styles are now in the head section

        // Initialize animations on page load
        document.addEventListener('DOMContentLoaded', () => {
            // Add fade-in animation to hero section
            setTimeout(() => {
                document.querySelector('#home .animate-fade-in').style.opacity = '1';
            }, 100);
        });