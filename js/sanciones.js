document.querySelectorAll('.info-button').forEach(button => {
    button.addEventListener('click', () => {
        const infoText = button.nextElementSibling;
        infoText.textContent = button.getAttribute('data-info');
        infoText.style.display = 'block';
    });
});
