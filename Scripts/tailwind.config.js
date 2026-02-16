tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0B1220',
                accent: '#F97316',
                neutral: {
                    50: '#F8FAFC',
                    100: '#F1F5F9',
                    200: '#E2E8F0',
                    300: '#CBD5E1',
                    400: '#94A3B8',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1E293B',
                    900: '#0F172A'
                }
            },
            fontFamily: {
                'vazir': ['Vazirmatn','Inter','Tahoma','Arial','sans-serif'],
                'inter': ['Inter','sans-serif']
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite'
            }
        }
    }
}
