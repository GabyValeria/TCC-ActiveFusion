document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
});