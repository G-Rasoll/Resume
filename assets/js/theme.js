 let isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        function toggleTheme() {
            isDarkMode = !isDarkMode;
            localStorage.setItem('darkMode', isDarkMode);
            updateTheme();
        }
        
        function updateTheme() {
            const themeIcon = document.getElementById('theme-icon');
            const mobileThemeIcon = document.getElementById('mobile-theme-icon');
            if (isDarkMode) {
                document.body.classList.add('dark');
                themeIcon.className = 'fas fa-sun text-neutral-600';
                if (mobileThemeIcon) mobileThemeIcon.className = 'fas fa-sun';
            } else {
                document.body.classList.remove('dark');
                themeIcon.className = 'fas fa-moon text-neutral-600';
                if (mobileThemeIcon) mobileThemeIcon.className = 'fas fa-moon';
            }
        }
        
        // Initialize theme
        updateTheme();