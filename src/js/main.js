// Language translations
const translations = {
    lv: {
        nav_home: "Sākums",
        nav_download: "Lejupielāde",
        nav_features: "Funkcijas",
        nav_contact: "Sazināties ar mums",
        hero_title: "Viss jūsu vajadzībai",
        hero_description: "E-veikala mērķis ir atvieglot jūsu dzīves, atļaujot apmeklēt veikalu no jebkurienes",
        username_label: "Lietotājvārds",
        password_label: "Parole",
        login_btn: "Pieteikties",
        feedback_placeholder: "Ievadiet savu atsauksmi šeit...",
        rating_label: "Novērtējums:",
        submit_btn: "Iesniegt",
        footer_contact: "Sazināties ar mums",
        footer_email: "E-pasts: info@veikals.lv",
        footer_phone: "Telefons: +371 12345678",
        footer_address: "Adrese: Rīga, Latvija",
        manual_btn: "Lejupielādēt lietotāja rokasgrāmatu"
    },
    en: {
        nav_home: "Home",
        nav_download: "Download",
        nav_features: "Features",
        nav_contact: "Contact Us",
        hero_title: "Everything You Need",
        hero_description: "Our e-shop aims to make your life easier by allowing shopping from anywhere",
        username_label: "Username",
        password_label: "Password",
        login_btn: "Login",
        feedback_placeholder: "Enter your feedback here...",
        rating_label: "Rating:",
        submit_btn: "Submit",
        footer_contact: "Contact Us",
        footer_email: "Email: info@shop.com",
        footer_phone: "Phone: +371 12345678",
        footer_address: "Address: Riga, Latvia",
        manual_btn: "Download User Manual"
    },
    ru: {
        nav_home: "Главная",
        nav_download: "Скачать",
        nav_features: "Функции",
        nav_contact: "Контакты",
        hero_title: "Все что вам нужно",
        hero_description: "Наш интернет-магазин позволяет совершать покупки из любого места",
        username_label: "Имя пользователя",
        password_label: "Пароль",
        login_btn: "Войти",
        feedback_placeholder: "Введите ваш отзыв здесь...",
        rating_label: "Оценка:",
        submit_btn: "Отправить",
        footer_contact: "Связаться с нами",
        footer_email: "Почта: info@shop.lv",
        footer_phone: "Телефон: +371 12345678",
        footer_address: "Адрес: Рига, Латвия",
        manual_btn: "Скачать руководство пользователя"
    }
};

// Function to update text content based on selected language
function updateLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', function () {
            navUl.classList.toggle('active');
        });

        // Close menu when a nav link is clicked (for mobile UX)
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 600) {
                    navUl.classList.remove('active');
                }
            });
        });
    }
});

// Language switcher functionality
document.querySelectorAll('.lang-switch button').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        updateLanguage(lang);
    });
});

// Login form functionality
const loginForm = document.querySelector('.login-btn');
loginForm.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const welcomeMessage = document.getElementById('welcome-message');

    if (username && password) {
        welcomeMessage.textContent = `Welcome, ${username}!`;
        welcomeMessage.style.display = 'block';
        welcomeMessage.style.color = 'green';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        welcomeMessage.textContent = 'Please fill in all fields.';
        welcomeMessage.style.display = 'block';
        welcomeMessage.style.color = 'red';
    }
});

// Feedback form functionality
const feedbackForm = document.getElementById('feedback-form');
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = feedbackForm.querySelector('textarea').value;
    const rating = feedbackForm.querySelector('select').value;
    const feedbackMessage = document.getElementById('feedback-message');

    if (feedback && rating) {
        feedbackMessage.textContent = 'Thank you for your feedback!';
        feedbackMessage.style.color = 'green';
        feedbackForm.reset();
    } else {
        feedbackMessage.textContent = 'Please provide feedback and a rating.';
        feedbackMessage.style.color = 'red';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Change navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize default language
updateLanguage('lv');