window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav--fixed'); // Adiciona a classe ao rolar
    } else {
        nav.classList.remove('nav--fixed'); // Remove a classe ao voltar ao topo
    }
});

const form = document.getElementById('macro-form');
const resultados = document.getElementById('resultados');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const idade = parseFloat(document.getElementById('idade').value);
    const objetivo = document.getElementById('objetivo').value;
    const atividade = document.getElementById('atividade').value;

    let caloriasDiarias;
    let proteinasDiarias;
    let carboidratosDiarias;
    let gordurasDiarias;

    // Cálculo de calorias diárias
    if (objetivo === 'perder-peso') {
        caloriasDiarias = 66 + (6.2 * peso) + (12.7 * altura) - (6.8 * idade);
    } else if (objetivo === 'manter-peso') {
        caloriasDiarias = 66 + (6.2 * peso) + (12.7 * altura) - (6.8 * idade);
    } else if (objetivo === 'ganhar-massa') {
        caloriasDiarias = 66 + (6.2 * peso) + (12.7 * altura) - (6.8 * idade) + 250;
    }

    // Cálculo de macronutrientes
    if (atividade === 'sedentario') {
        proteinasDiarias = peso * 0.8;
        carboidratosDiarias = peso * 2;
        gordurasDiarias = peso * 0.5;
    } else if (atividade === 'leve') {
        proteinasDiarias = peso * 1;
        carboidratosDiarias = peso * 2.5;
        gordurasDiarias = peso * 0.6;
    } else if (atividade === 'moderado') {
        proteinasDiarias = peso * 1.2;
        carboidratosDiarias = peso * 3;
        gordurasDiarias = peso * 0.7;
    } else if (atividade === 'intenso') {
        proteinasDiarias = peso * 1.5;
        carboidratosDiarias = peso * 3.5;
        gordurasDiarias = peso * 0.8;
    }

    // Exibição dos resultados
    resultados.classList.remove('hidden');
    document.getElementById('titulo-resultados').innerText = 'Resultados:';
    document.getElementById('calorias-diarias').innerText = `Calorias diárias: ${caloriasDiarias.toFixed(2)} kcal`;
    document.getElementById('proteinas-diarias').innerText = `Proteínas diárias: ${proteinasDiarias.toFixed(2)} g`;
    document.getElementById('carboidratos-diarias').innerText = `Carboidratos diários: ${carboidratosDiarias.toFixed(2)} g`;
    document.getElementById('gorduras-diarias').innerText = `Gorduras diárias: ${gordurasDiarias.toFixed(2)} g`;
});