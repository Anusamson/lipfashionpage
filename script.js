// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Ticker Logic to duplicate content for infinite scrolling
    const ticker = document.getElementById("ticker");
    if(ticker) {
        // Clone ticker content to ensure seamless loop
        const clone = ticker.innerHTML;
        ticker.innerHTML += clone;
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle (simple feedback)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            alert('Mobile menu toggled!');
        });
    }

    // Back to top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
