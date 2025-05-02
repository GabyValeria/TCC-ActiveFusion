window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav--fixed'); // Adiciona a classe ao rolar
    } else {
        nav.classList.remove('nav--fixed'); // Remove a classe ao voltar ao topo
    }
});

const form = document.querySelector('#massa-magra-form');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const bodyFatInput = document.querySelector('#bodyFat');
const resultDiv = document.querySelector('#infos');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bodyFat = parseFloat(bodyFatInput.value);

    const leanBodyMass = calculateLeanBodyMass(weight, height, bodyFat);

    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <div id="result">
            <div id="bmi">
                <span id="value">${leanBodyMass.toFixed(2)} kg</span>
                <span>Sua Massa Magra</span>
            </div>
            <div id="description">
                <span></span>
            </div>
        </div>
        <div id="more_info">
            <a href="https://brasilescola.uol.com.br/o-que-e/biologia/o-que-e-massa-magra.htm">
                Mais informações sobre Massa Magra
                <i class="ri-external-link-line"></i>
            </a>
        </div>
    `;
});

function calculateLeanBodyMass(weight, height, bodyFat) {
    const bodyDensity = 1.098 - (0.0004 * height) + (0.0002 * weight);
    const leanBodyMass = weight * (1 - (bodyFat / 100));

    return leanBodyMass;
}