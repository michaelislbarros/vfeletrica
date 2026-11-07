document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Toggle & Interação
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuBtn.textContent = menu.classList.contains('active') ? '✕' : '☰';
        });

        // Fechar menu ao clicar em qualquer link
        document.querySelectorAll('#menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuBtn.textContent = '☰';
            });
        });
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const isOpen = content.style.display === 'block';

            document.querySelectorAll('.faq-content').forEach(c => c.style.display = 'none');
            document.querySelectorAll('.faq-btn span').forEach(s => s.textContent = '+');

            if (!isOpen) {
                content.style.display = 'block';
                btn.querySelector('span').textContent = '−';
            }
        });
    });

    // Carrossel de Imagens Script
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
        });
        
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
        });
    }
});
// Lógica do Banner de Cookies LGPD
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Verifica se o usuário já aceitou os cookies anteriormente
    if (!localStorage.getItem('cookie_accepted')) {
        setTimeout(() => {
            cookieBanner.style.display = 'block';
        }, 1000); // Mostra o banner após 1 segundo
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookie_accepted', 'true');
            cookieBanner.style.display = 'none';
        });
    }
});
