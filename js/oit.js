document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los botones de información
    const infoButtons = document.querySelectorAll('.info-button');

    infoButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Obtiene el texto de información del atributo data-info
            const infoText = this.getAttribute('data-info');
            // Selecciona el párrafo donde se mostrará la información
            const infoTextElement = this.nextElementSibling;

            // Muestra el texto de información en el párrafo correspondiente
            infoTextElement.textContent = infoText;
            infoTextElement.style.display = 'block'; // Asegúrate de mostrar el texto
        });
    });
});
