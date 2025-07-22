/*
console.log("Hey hola");
*/

/**
 * LABORATORIO DE SOFTWARE HERMANOS - MANIPULACIÓN DEL DOM
 * 
 * Este script contiene las interacciones dinámicas para la página web:
 * 1. Cambio de tema (claro/oscuro) ==> Crea un botón flotante que alterna entre los temas claro y oscuro
 * 2. Contador de características interactivas => Muestra una animación de conteo para las características principales
 * 3. Formulario de contacto dinámico ==> Al dar click sobre contacto del footer en la parte de enlaces, 
 *                                     este despliega un formulario
 * 4. Efectos de hover en tarjetas => Aplica efectos visuales al pasar el mouse sobre las tarjetas
 * 5. Botones de Descarga ==> Proporciona feedback visual al hacer clic
 * 6. Formulario de Contacto Dinámico ==> Transforma el enlace de contacto en un formulario funcional
 */

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM completamente cargado");

    // =============================================
    // 1. CAMBIO DE TEMA CLARO/OSCURO
    // =============================================

    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.id = 'themeToggle';
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggleBtn.className = 'btn btn-sm btn-outline-dark';
    themeToggleBtn.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    transition: all 0.3s ease;
`;

    // botón agregado al inicio del body para evitar problemas de z-index
    document.body.insertAdjacentElement('afterbegin', themeToggleBtn);

    // Código del event listener
    themeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggleBtn.classList.replace('btn-outline-dark', 'btn-outline-light');
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggleBtn.classList.replace('btn-outline-light', 'btn-outline-dark');
        }
    });

    // =============================================
    // 2. CONTADOR DE CARACTERÍSTICAS
    // =============================================
    const featuresContainer = document.querySelector('.features-section .container');
    if (featuresContainer) {
        const featureCounter = document.createElement('div');
        featureCounter.className = 'text-center mb-4 ';
        featureCounter.innerHTML = `<h5>Explora nuestras <span id="featureCount">0</span> razones principales:</h5>`;
        featuresContainer.prepend(featureCounter);

        let count = 0;
        const featureCountElement = document.getElementById('featureCount');
        const countInterval = setInterval(() => {
            featureCountElement.textContent = count;
            count++;
            if (count > 3) clearInterval(countInterval);
        }, 900);
    }

    // =============================================
    // 3. EFECTOS HOVER EN TARJETAS
    // =============================================
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'rotate(15deg) scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'rotate(0) scale(1)';
            }
        });
    });

    // =============================================
    // 4. BOTONES DE DESCARGA
    // =============================================
    const downloadButtons = document.querySelectorAll('.download-section .btn-light');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> ¡Redirigiendo...';
            this.classList.remove('btn-light');
            this.classList.add('btn-success');

            setTimeout(() => {
                this.innerHTML = originalText;
                this.classList.remove('btn-success');
                this.classList.add('btn-light');
            }, 2000);
        });
    });

    // =============================================
    // 5. FORMULARIO DE CONTACTO DINÁMICO
    // =============================================
    const contactLinks = document.querySelectorAll('.footer-links li:nth-child(4) a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const contactColumn = this.closest('.col-lg-3, .col-md-4');
            if (contactColumn) {
                contactColumn.innerHTML = `
                    <h4 class="footer-title">Contáctanos</h4>
                    <form class="mt-4">
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Nombre" required>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email" required>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" placeholder="Mensaje" rows="3" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                `;

                const contactForm = contactColumn.querySelector('form');
                contactForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    contactColumn.innerHTML = '<div class="alert alert-success">¡Mensaje enviado! Nos pondremos en contacto pronto.</div>';
                });
            }
        });
    });

    // =============================================
    // 6. EFECTOS DE SCROLL
    // =============================================
    const navbar = document.querySelector('.navbar');
    const downloadSection = document.querySelector('.download-section');

    if (downloadSection) {
        downloadSection.style.opacity = '0';
        downloadSection.style.transform = 'translateY(20px)';
        downloadSection.style.transition = 'all 0.5s ease-out';
    }

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // Efecto en el navbar
        if (navbar) {
            navbar.style.boxShadow = scrollPosition > 100 ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none';
        }

        // Mostrar sección de descarga con animación
        if (downloadSection && scrollPosition > downloadSection.offsetTop - window.innerHeight + 100) {
            downloadSection.style.opacity = '1';
            downloadSection.style.transform = 'translateY(0)';
        }
    });
});