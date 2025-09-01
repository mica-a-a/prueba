document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el botón y el párrafo por su ID
    const miBoton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');

    // Añadimos un "escuchador de eventos" al botón
    miBoton.addEventListener('click', () => {
        // Cuando se hace clic, cambiamos el texto del párrafo
        mensaje.textContent = '¡El JavaScript está funcionando correctamente en GitHub Pages!';
        // También cambiamos el color del texto para un efecto visual
        mensaje.style.color = '#e74c3c';
    });
});