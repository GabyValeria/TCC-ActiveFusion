document.getElementById('registerForm').addEventListener('submit', function(event) {
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm_password"]').value;

    if (password !== confirmPassword) {
        alert('As senhas não correspondem.');
        event.preventDefault();
    }
});

function togglePassword(inputId, toggleButton) {
    const input = document.getElementById(inputId);
    const icon = toggleButton.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('ri-eye-close-line');
        icon.classList.add('ri-eye-2-line');
    } else {
        input.type = 'password';
        icon.classList.remove('ri-eye-2-line');
        icon.classList.add('ri-eye-close-line');
    }
}