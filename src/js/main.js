import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { profileData } from './data.js';

/**
 * Este archivo ahora solo maneja lógica interactiva en tiempo de ejecución.
 * La mayor parte del contenido estático ya ha sido inyectado durante el build
 * para evitar parpadeos (flicker).
 */
document.addEventListener('DOMContentLoaded', () => {
    // Si necesitasemos lógica adicional (ej: validación de formularios,
    // animaciones específicas), iría aquí.

    // El copyright se actualiza por build, pero podemos asegurarnos de que sea
    // dinámico también aquí por si acaso el cliente deja la pestaña abierta años.
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();

    console.log('Site initialized successfully.');
});
