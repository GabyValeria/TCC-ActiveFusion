window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav--fixed'); // Adiciona a classe ao rolar
    } else {
        nav.classList.remove('nav--fixed'); // Remove a classe ao voltar ao topo
    }
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value.replace(',','.');
    const height = document.getElementById('height').value.replace(',','.');

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi >= 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!';
    } else if (bmi >= 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
    } else if (bmi >= 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!';
    } else {
        description = 'Cuidado! Você está com obesidade mórbida!';
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;

});