window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
      nav.classList.add('nav--fixed'); // Adiciona a classe ao rolar
  } else {
      nav.classList.remove('nav--fixed'); // Remove a classe ao voltar ao topo
  }
});


const aguaForm = document.getElementById('agua-form');
const resultDiv = document.getElementById('result');
const infosDiv = document.getElementById('infos');

aguaForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const pesoInput = document.getElementById('peso');
  const idadeInput = document.getElementById('idade');
  const atividadeInput = document.getElementById('atividade');

  const peso = parseInt(pesoInput.value);
  const idade = parseInt(idadeInput.value);
  const atividade = atividadeInput.value;

  if (!isValidInput(peso, idade)) {
    resultDiv.innerHTML = 'Invalid input. Please check your entries.';
    return;
  }

  const consumoAgua = calculateConsumoAgua(peso, idade, atividade);

  const bmiSpan = document.getElementById('bmi');
  const valueSpan = document.createElement('span');
  const descriptionSpan = document.createElement('span');
  const descriptionDiv = document.getElementById('description');

  descriptionSpan.textContent = `Seu consumo de água diário necessário é de aproximadamente`;
  valueSpan.textContent = `${consumoAgua.toFixed(2)} ml`;

  bmiSpan.innerHTML = '';
  bmiSpan.appendChild(descriptionSpan);
  bmiSpan.appendChild(valueSpan);

  descriptionDiv.innerHTML = '';

  infosDiv.classList.remove('hidden');
});

function isValidInput(peso, idade) {
  return !isNaN(peso) && !isNaN(idade);
}

function calculateConsumoAgua(peso, idade, atividade) {
  const CONSUMO_AGUA_BASE = 30;
  const CONSUMO_AGUA_POR_PESO = 0.03;
  const CONSUMO_AGUA_POR_IDADE = 0.01;
  const CONSUMO_AGUA_POR_ATIVIDADE = {
    'sedentário': 1,
    'ligeiramente_ativo': 1.2,
    'moderadamente_ativo': 1.4,
    'muito_ativo': 1.6,
    'extremamente_ativo': 1.8
  }; 

  const fatorAtividade = CONSUMO_AGUA_POR_ATIVIDADE[atividade] || 1; 

  const consumoAgua = CONSUMO_AGUA_BASE + 
      (CONSUMO_AGUA_POR_PESO * peso) + 
      (CONSUMO_AGUA_POR_IDADE * idade * fatorAtividade);

  return consumoAgua;
}
