window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav--fixed'); // Adiciona a classe ao rolar
    } else {
        nav.classList.remove('nav--fixed'); // Remove a classe ao voltar ao topo
    }
});


const form = document.getElementById('calculadora');
const resultado = document.getElementById('result'); 
const infos = document.getElementById('infos'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const sexo = document.getElementById('sexo').value;
    const altura = parseFloat(document.getElementById('altura').value) / 100; 
    const peso = parseFloat(document.getElementById('peso').value);
    const circunferencia = parseFloat(document.getElementById('circunferencia').value);

    let gorduraCorporal;

    if (sexo === 'masculino') {
        gorduraCorporal = 0.29569 * circunferencia - 0.00047 * Math.pow(circunferencia, 2) +
                          0.04119 * peso - 0.18474 * altura - 0.33913;
    } else {
        gorduraCorporal = 0.29669 * circunferencia - 0.00043 * Math.pow(circunferencia, 2) +
                          0.02822 * peso - 0.19860 * altura - 0.53615;
    }

    gorduraCorporal = gorduraCorporal.toFixed(2);
    document.getElementById('value').innerText = gorduraCorporal;

    let description = '';
    if (sexo === 'masculino') {
        if (gorduraCorporal < 6) {
            description = 'Abaixo do normal (atletas)';
        } else if (gorduraCorporal <= 24) {
            description = 'Normal';
        } else {
            description = 'Acima do normal';
        }
    } else {
        if (gorduraCorporal < 16) {
            description = 'Abaixo do normal (atletas)';
        } else if (gorduraCorporal <= 32) {
            description = 'Normal';
        } else {
            description = 'Acima do normal';
        }
    }

    document.getElementById('descriptionText').innerText = description;
    infos.classList.remove('hidden');
    infos.classList.add('show');
}); 