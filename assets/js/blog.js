 // Blog Search and Filter
        const blogSearch = document.getElementById('blog-search');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const blogCards = document.querySelectorAll('.blog-card');

        let searchTimeout;
        blogSearch.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                filterBlogs();
            }, 300);
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterBlogs();
            });
        });

        function filterBlogs() {
            const searchTerm = blogSearch.value.toLowerCase();
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            
            blogCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const category = card.getAttribute('data-category');
                
                const matchesSearch = title.includes(searchTerm);
                const matchesFilter = activeFilter === 'all' || category.includes(activeFilter);
                
                if (matchesSearch && matchesFilter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Certificate Modal
        function openCertModal(certId) {
            const modal = document.getElementById('cert-modal');
            const title = document.getElementById('cert-title');
            const content = document.getElementById('cert-content');
            
            // Sample certificate data
            const certData = {
                cert1: {
                    title: 'React Advanced Patterns',
                    issuer: 'Meta (Facebook) - Coursera',
                    date: '2023',
                    description: 'گواهینامه تخصصی React با تمرکز بر الگوهای پیشرفته و بهترین روش‌های توسعه',
                    skills: ['React Hooks', 'Context API', 'Performance Optimization', 'Testing'],
                    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjhGQUZDIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIGZpbGw9IndoaXRlIiBzdHJva2U9IiNFMkU4RjAiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMEYxNzJBIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+UmVhY3QgQWR2YW5jZWQgUGF0dGVybnM8L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMTIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjQ3NDhCIiBmb250LXNpemU9IjE2Ij5NZXRhIChGYWNlYm9vaykgLSBDb3Vyc2VyYTwvdGV4dD4KPHN2ZyB4PSIxNzAiIHk9IjE0MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiM2MURBRkIiPgo8cGF0aCBkPSJNMTIgMTAuMTFDMTMuMDMgOC4xNiAxNC4xNCA2LjU0IDE1LjM4IDUuNDZDMTYuNjEgNC4zNyAxNy45NCAzLjc1IDE5LjMgMy43NUMyMC42NiAzLjc1IDIxLjk5IDQuMzcgMjMuMjIgNS40NkMyNC40NiA2LjU0IDI1LjU3IDguMTYgMjYuNiAxMC4xMUMyNS41NyAxMi4wNiAyNC40NiAxMy42OCAyMy4yMiAxNC43N0MyMS45OSAxNS44NiAyMC42NiAxNi40OCAxOS4zIDE2LjQ4QzE3Ljk0IDE2LjQ4IDE2LjYxIDE1Ljg2IDE1LjM4IDE0Ljc3QzE0LjE0IDEzLjY4IDEzLjAzIDEyLjA2IDEyIDEwLjExWiIvPgo8L3N2Zz4KPHR2ZXh0IHg9IjIwMCIgeT0iMjQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRjk3MzE2IiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCI+MjAyMzwvdGV4dD4KPC9zdmc+'
                },
                cert2: {
                    title: 'Node.js Backend Development',
                    issuer: 'IBM - edX',
                    date: '2023',
                    description: 'گواهینامه توسعه بک‌اند با Node.js و تکنولوژی‌های مرتبط',
                    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
                    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjhGQUZDIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIGZpbGw9IndoaXRlIiBzdHJva2U9IiNFMkU4RjAiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMEYxNzJBIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+Tm9kZS5qcyBCYWNrZW5kPC90ZXh0Pgo8dGV4dCB4PSIyMDAiIHk9IjEyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY0NzQ4QiIgZm9udC1zaXplPSIxNiI+SUJNIC0gZWRYPC90ZXh0Pgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNzAiIHI9IjMwIiBmaWxsPSIjMTBCOTgxIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRjk3MzE2IiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCI+MjAyMzwvdGV4dD4KPC9zdmc+'
                }
                // Add more certificates as needed
            };
            
            const cert = certData[certId] || certData.cert1;
            
            title.textContent = cert.title;
            content.innerHTML = `
                <div class="mb-6">
                    <img src="${cert.image}" alt="${cert.title}" class="w-full h-48 object-cover rounded-lg bg-neutral-100">
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-bold text-primary mb-2">صادرکننده</h4>
                        <p class="text-neutral-600 mb-4">${cert.issuer}</p>
                        
                        <h4 class="font-bold text-primary mb-2">تاریخ صدور</h4>
                        <p class="text-neutral-600 mb-4">${cert.date}</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-primary mb-2">مهارت‌های کسب شده</h4>
                        <div class="flex flex-wrap gap-2">
                            ${cert.skills.map(skill => `<span class="skill-chip">${skill}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="mt-6">
                    <h4 class="font-bold text-primary mb-2">توضیحات</h4>
                    <p class="text-neutral-600 leading-relaxed">${cert.description}</p>
                </div>
                <div class="mt-6 pt-6 border-t border-neutral-200">
                    <p class="text-sm text-neutral-500 text-center">
                        این گواهینامه نمونه‌ای برای نمایش است و محتوای واقعی باید جایگزین شود.
                    </p>
                </div>
            `;
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeCertModal() {
            const modal = document.getElementById('cert-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // Close modal on backdrop click
        document.getElementById('cert-modal').addEventListener('click', (e) => {
            if (e.target.id === 'cert-modal') {
                closeCertModal();
            }
        });

        // Contact Form
        const contactForm = document.getElementById('contact-form');
        const formSuccess = document.getElementById('form-success');

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(error => {
                error.classList.add('hidden');
            });
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate form
            let isValid = true;
            
            if (!data.name.trim()) {
                showError('name', 'نام الزامی است');
                isValid = false;
            }
            
            if (!data.email.trim()) {
                showError('email', 'ایمیل الزامی است');
                isValid = false;
            } else if (!isValidEmail(data.email)) {
                showError('email', 'فرمت ایمیل صحیح نیست');
                isValid = false;
            }
            
            if (!data.subject) {
                showError('subject', 'انتخاب موضوع الزامی است');
                isValid = false;
            }
            
            if (!data.message.trim()) {
                showError('message', 'پیام الزامی است');
                isValid = false;
            }
            
            if (!isValid) return;
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const submitText = submitBtn.querySelector('.submit-text');
            const originalText = submitText.textContent;
            
            submitBtn.disabled = true;
            submitText.textContent = 'در حال ارسال...';
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Show success message
                contactForm.classList.add('hidden');
                formSuccess.classList.remove('hidden');
                
                // Reset form after delay
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.classList.remove('hidden');
                    formSuccess.classList.add('hidden');
                }, 5000);
                
            } catch (error) {
                alert('خطا در ارسال پیام. لطفاً دوباره تلاش کنید.');
            } finally {
                submitBtn.disabled = false;
                submitText.textContent = originalText;
            }
        });

        function showError(fieldName, message) {
            const field = document.getElementById(fieldName);
            const errorElement = field.parentNode.querySelector('.error-message');
            errorElement.textContent = message;
            errorElement.classList.remove('hidden');
            field.classList.add('border-red-500');
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Clear error on input
        document.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('input', () => {
                field.classList.remove('border-red-500');
                const errorElement = field.parentNode.querySelector('.error-message');
                if (errorElement) {
                    errorElement.classList.add('hidden');
                }
            });
        });

        