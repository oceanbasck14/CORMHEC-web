// Contenido de la Introducción (4. Conócenos)
const introTexts = [
    "La consolidación de nuestra empresa en el mercado se basa en el desarrollo de capacidades alcanzadas por nuestro staff de profesionales.",
    "Nos orientamos a una minimización de pérdidas tanto dentro como fuera de nuestras operaciones.",
    "Prestamos nuestros servicios en el marco de una excelencia en calidad y en el desarrollo de economías de escala.",
    "Promovemos el empleo de la tecnología más avanzada en nuestro campo, y buscamos permanentemente elevar nuestros estándares a través de la investigación y actualización constantes."
];

let currentTextIndex = 0;
const introParagraph = document.getElementById('intro-paragraph');
const STAFF_MODAL = document.getElementById('staff-modal');
const STAFF_BTN = document.getElementById('staff-toggle-btn');
const TEXT_DISPLAY_TIME = 2000; // 2 segundos

/**
 * 4. Controla la animación de la introducción (Conócenos)
 * Pasa los párrafos uno por uno cada 2 segundos.
 */
function animateIntro() {
    if (!introParagraph) return;

    function showNextParagraph() {
        // Desaparecer el texto actual
        introParagraph.classList.remove('show');

        // Esperar la transición de desaparición
        setTimeout(() => {
            introParagraph.textContent = introTexts[currentTextIndex];
            
            // Aparecer el nuevo texto
            introParagraph.classList.add('show');
            
            // Mover al siguiente índice (o volver al inicio)
            currentTextIndex = (currentTextIndex + 1) % introTexts.length;

        }, 500); // 500ms es el tiempo de la transición CSS

        // Llama a la siguiente iteración después del tiempo de visualización
        setTimeout(showNextParagraph, TEXT_DISPLAY_TIME + 500); 
    }
    
    // Inicia el ciclo
    showNextParagraph();
}

/**
 * 10. Controla la aparición suave del Staff Profesional
 */
function setupStaffModal() {
    if (!STAFF_BTN || !STAFF_MODAL) return;

    STAFF_BTN.addEventListener('click', () => {
        // Alternar la clase 'visible'
        STAFF_MODAL.classList.toggle('visible');
        
        // Cambiar el texto del botón
        if (STAFF_MODAL.classList.contains('visible')) {
            STAFF_BTN.innerHTML = 'OCULTAR STAFF PROFESIONAL <span class="plus">-</span>';
        } else {
            STAFF_BTN.innerHTML = 'VER STAFF PROFESIONAL <span class="plus">+</span>';
        }
    });

    // Opcional: Cerrar el modal al hacer clic fuera (para mejorar la UX)
    document.addEventListener('click', (event) => {
        if (!STAFF_MODAL.contains(event.target) && event.target !== STAFF_BTN && STAFF_MODAL.classList.contains('visible')) {
            STAFF_MODAL.classList.remove('visible');
            STAFF_BTN.innerHTML = 'VER STAFF PROFESIONAL <span class="plus">+</span>';
        }
    });
}
/**
 * Función de inicialización
 */
document.addEventListener('DOMContentLoaded', () => {
    animateIntro();
    setupStaffModal();
});
/**
 * Función de inicialización
 */
document.addEventListener('DOMContentLoaded', () => {
    animateIntro();
    setupStaffModal();
});