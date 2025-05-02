window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav--fixed'); // Adiciona a classe ao rolar
    } else {
        nav.classList.remove('nav--fixed'); // Remove a classe ao voltar ao topo
    }
});

const form = document.querySelector('#form');
const infosDiv = document.querySelector('#infos');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const sexo = document.querySelector('#sexo').value;
    const idade = parseInt(document.querySelector('#idade').value);
    const peso = parseFloat(document.querySelector('#peso').value);
    const altura = parseInt(document.querySelector('#altura').value);
    const atividade = document.querySelector('#atividade').value;

    let tmb;

    if (sexo === 'masculino') {
        tmb = 66.5 + (13.75 * peso) + (5 * altura) - (6.75 * idade);
    } else {
        tmb = 655.1 + (9.56 * peso) + (1.85 * altura) - (4.68 * idade);
    }

    let fatorAtividade;

    switch (atividade) {
        case 'sedentario':
            fatorAtividade = 1.2;
            break;
        case 'leve':
            fatorAtividade = 1.375;
            break;
        case 'moderada':
            fatorAtividade = 1.55;
            break;
        case 'intensa':
            fatorAtividade = 1.725;
            break;
        default:
            fatorAtividade = 1.2;
    }

    const caloriasDiarias = tmb * fatorAtividade;

    const resultDiv = document.querySelector('#result');
    const tmbSpan = document.querySelector('#tmb span:first-child');
    const descriptionSpan = document.querySelector('#description span');

    tmbSpan.textContent = tmb.toFixed(2);
    descriptionSpan.textContent = `Com um nível de atividade física ${atividade}, você precisa de aproximadamente ${caloriasDiarias.toFixed(2)} calorias por dia.`;

    infosDiv.classList.add('show');
});