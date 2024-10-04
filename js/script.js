document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.info-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const infoText = button.getAttribute('data-info');
            const infoParagraph = button.nextElementSibling;
            infoParagraph.textContent = infoText;
        });
    });
});
