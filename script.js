document.addEventListener('DOMContentLoaded', () => {
    
    //======================= CARRUSEL DE IMÁGENES DE FONDO =======================
    const portada = document.getElementById('portada');
    const backgroundImages = [
    'url("imagenes/fondo1.jpg")',
    'url("imagenes/fondo2.jpg")',
    'url("imagenes/fondo3.jpg")',
    'url("imagenes/fondo4.jpg")'
];
    let currentImageIndex = 0;

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        // Se mantiene el degradado oscuro para la legibilidad del texto
        portada.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${backgroundImages[currentImageIndex]}`;
    }, 3000); // Cambia la imagen cada 3 segundos


    //======================= SCRIPT DE DESPLAZAMIENTO SUAVE CORREGIDO =======================
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const header = document.querySelector('.header');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Siempre prevenimos el comportamiento por defecto primero

        const targetId = this.getAttribute('href');

        // CASO ESPECIAL: Si es el botón de Inicio (href="#")
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return; // Termina la función aquí
        }

        // Para todos los demás enlaces, usa la lógica que ya tenías
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - headerHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

    //======================= ANIMACIÓN DE ENTRADA AL DESPLAZARSE =======================
    const sections = document.querySelectorAll('.section-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    //======================= VALIDACIÓN DEL FORMULARIO DE CONTACTO =======================
    const contactForm = document.getElementById('contact-form');

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

});