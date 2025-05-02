window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav--fixed'); // Adiciona a classe ao rolar
    } else {
        nav.classList.remove('nav--fixed'); // Remove a classe ao voltar ao topo
    }
});
