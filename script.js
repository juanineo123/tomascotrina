document.addEventListener('DOMContentLoaded', () => {
    
    //======================= CARRUSEL DE IMÁGENES DE FONDO =======================
    const portada = document.getElementById('portada');
    if (portada) {
        const backgroundImages = [
            'url("imagenes/fondo1.jpg")',
            'url("imagenes/fondo2.jpg")',
            'url("imagenes/fondo3.jpg")',
            'url("imagenes/fondo4.jpg")'
        ];
        let currentImageIndex = 0;
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
            portada.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${backgroundImages[currentImageIndex]}`;
        }, 5000); // Aumentado a 5 segundos para una transición más tranquila
    }

    //======================= SCRIPT DE DESPLAZAMIENTO SUAVE =======================
    const navLinksScroll = document.querySelectorAll('.nav-links a[href^="#"]');
    const header = document.querySelector('.header');
    
    navLinksScroll.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight - 20;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    //======================= ANIMACIÓN DE ENTRADA AL DESPLAZARSE =======================
    const sections = document.querySelectorAll('.section-container');
    if (sections.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        sections.forEach(section => observer.observe(section));
    }

    //======================= VALIDACIÓN DEL FORMULARIO DE CONTACTO =======================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Por favor, completa todos los campos del formulario.');
            } else {
                alert(`¡Gracias por tu mensaje, ${name}! Te responderé pronto.`);
                contactForm.reset();
            }
        });
    }

    //======================= CONTROL DEL MENÚ HAMBURGUESA =======================
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksMenu = document.getElementById('nav-links-menu');

    if (menuToggle && navLinksMenu) {
        menuToggle.addEventListener('click', () => {
            navLinksMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const allNavLinks = navLinksMenu.querySelectorAll('a');
        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinksMenu.classList.contains('active')) {
                    navLinksMenu.classList.remove('active');
                }
            });
        });
    }
});