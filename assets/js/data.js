const projects = {
    azonik: {
        title: "پنل مدیریت ازونیک",
        role: "Fullstack Developer • System Architect",
        desc: "طراحی یک پنل مدیریت پیشرفته برای مانیتورینگ دستگاه‌ها با تمرکز روی Performance و امنیت. پیاده‌سازی ACL سطحی، مدیریت Session سفارشی و بهینه‌سازی کوئری‌ها با Stored Procedure.",
        tools: ["Blazor Server","SQL Server","Dapper","Syncfusion","ASP.NET Core"],
        tech: [
            "Role-Based Access Control",
            "Stored Procedure Optimization",
            "Component-Based UI",
            "Custom Session Manager",
            "Clean Architecture"
        ]
    },

    vote: {
        title: "سامانه رای‌گیری دانشکده توس",
        role: "Backend Lead • Database Designer",
        desc: "سیستم رای‌گیری امن با کنترل رای تکراری و مانیتورینگ Real-time مشارکت کاربران. تمرکز اصلی روی طراحی دیتابیس و مدیریت State انتخابات.",
        tools: ["ASP.NET Core","SignalR","SQL Server","Blazor"],
        tech: [
            "Real-time Update",
            "Vote Validation Logic",
            "Concurrency Handling",
            "Database Normalization",
            "Team Leadership"
        ]
    },

    oxygen: {
        title: "سیستم مدیریت سیلندر اکسیژن",
        role: "Fullstack Developer",
        desc: "سامانه مدیریت تست سیلندر با فرم‌های داینامیک و RBAC چندنقشی. توسعه بر اساس اصول Clean Code و Generic Repository.",
        tools: ["Blazor Hybrid",".NET","SQL Server","REST API"],
        tech: [
            "RBAC Architecture",
            "Dynamic Form Builder",
            "Generic Repository Pattern",
            "Clean Code Structure",
            "Modular Design"
        ]
    },

    sajjad: {
    title: "پنل مدیریت اکسسوری سجاد (نقره و زیورآلات)",
    role: "Logic Refactoring • Infrastructure Developer",
    desc: "ارتقا و بازنویسی منطق محاسباتی و مدیریتی پنل فروشگاه. در این پروژه، تمرکز بر اصلاح ساختار احراز هویت (Custom Authentication State Provider)، بومی‌سازی کامل کامپوننت‌های Syncfusion برای تقویم و اعداد فارسی، و بهینه‌سازی دسترسی‌های نقش‌محور (RBAC) در بخش مدیریت محصولات و کاربران بود.",
    tools: ["Blazor Server", ".NET 8/9", "Dapper", "SQL Server", "Syncfusion"],
    tech: [
        "Custom Auth State Provider Implementation",
        "Legacy Code Refactoring",
        "Advanced Localization (i18n)",
        "Session Management Optimization",
        "Role-Based Access Control (RBAC)",
        "Database Query Tuning"
    ]
    },
    kavan: {
        title: "توسعه زیرساخت چندزبانه گروه بازرگانی کاوان",
        role: "Fullstack Localization Engineer",
        desc: "گروه کاوان با ۳۰ سال سابقه در تولید جواهرات فاخر، نیاز به حضور در بازارهای جهانی داشت. نقش من در این پروژه، تبدیل سایت از حالت تک‌زبانه به یک پلتفرم سه زبانه (FA, EN, AR) بود. این کار شامل پیاده‌سازی سیستم Localization با استفاده از Resource Files در Blazor WASM، مدیریت زبان در LocalStorage و همگام‌سازی آن با پروفایل کاربری در دیتابیس بود. همچنین کوئری‌های API را برای بازگرداندن داده‌ها به‌صورت داینامیک بر اساس Culture انتخابی بازنویسی کردم.",
        tools: ["Blazor WASM", "ASP.NET Core API", "SQL Server", "LocalStorage"],
        tech: [
            "Implementation of Multi-language (i18n) Architecture",
            "Dynamic SQL Queries based on Culture",
            "API Refactoring for Global Data Handling",
            "User Preference Persistence (DB & LocalStorage)",
            "Resource File (.resx) Management",
            "Blazor Client-side Localization"
        ]
    }
};