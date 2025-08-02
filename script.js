document.addEventListener('DOMContentLoaded', () => {

    //======================= NUEVO SCRIPT DE DESPLAZAMIENTO SUAVE CORREGIDO =======================
    // Este código reemplaza el anterior para asegurar que el menú fijo no tape las secciones.

    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const header = document.querySelector('.header');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 1. Prevenimos el comportamiento por defecto del clic.
            e.preventDefault();

            // 2. Obtenemos el ID de la sección a la que queremos ir (ej. "#resenas").
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 3. Obtenemos la altura del menú/header fijo.
                const headerHeight = header.offsetHeight;
                
                // 4. Calculamos la posición real del elemento en la página.
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                // 5. Calculamos la posición final a la que queremos desplazarnos.
                //    Restamos la altura del menú y añadimos un pequeño espacio (20px) para que no quede pegado.
                const offsetPosition = targetPosition - headerHeight - 20;

                // 6. Usamos window.scrollTo para desplazarnos a la posición calculada.
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    //======================= ANIMACIÓN DE ENTRADA AL DESPLAZARSE =======================
    // Esta parte sigue siendo la misma.
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
    // Esta parte sigue siendo la misma.
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