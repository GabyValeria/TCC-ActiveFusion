document.querySelectorAll('.post-actions button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.innerText === 'Curtir') {
            // Função para curtir o post
            alert('Post curtido!');
        } else if (this.innerText === 'Comentar') {
            // Função para comentar no post
            alert('Comentando no post!');
        } else if (this.innerText === 'Seguir') {
            // Função para seguir o usuário
            alert('Seguindo usuário!');
        }
    });
});