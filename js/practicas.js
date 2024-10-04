// Esperar a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de "Ver Más"
    const infoButtons = document.querySelectorAll('.info-button');

    // Iterar sobre cada botón
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el texto de información del atributo data-info
            const infoText = button.getAttribute('data-info');
            // Crear un nuevo párrafo para mostrar el texto de información
            const infoParagraph = document.createElement('p');
            infoParagraph.textContent = infoText;
            infoParagraph.classList.add('info-text');

            // Agregar el párrafo debajo del botón
            button.parentNode.appendChild(infoParagraph);
            // Ocultar el botón después de hacer clic
            button.style.display = 'none';
        });
    });
});
