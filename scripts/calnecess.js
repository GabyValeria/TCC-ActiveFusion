window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
      nav.classList.add('nav--fixed'); // Adiciona a classe ao rolar
  } else {
      nav.classList.remove('nav--fixed'); // Remove a classe ao voltar ao topo
  }
});


const calculatorForm = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');
const infosDiv = document.getElementById('infos');

calculatorForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('gender');
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const activityLevelInput = document.getElementById('activity-level');
  const goalInput = document.getElementById('goal');

  const age = parseInt(ageInput.value);
  const gender = genderInput.value;
  const weight = parseInt(weightInput.value);
  const height = parseInt(heightInput.value);
  const activityLevel = activityLevelInput.value;
  const goal = goalInput.value;

  if (!isValidInput(age, weight, height)) {
    resultDiv.innerHTML = 'Invalid input. Please check your entries.';
    return;
  }

  const basalMetabolicRate = calculateBasalMetabolicRate(gender, weight, height, age);
  const dailyCaloricNeeds = calculateDailyCaloricNeeds(basalMetabolicRate, activityLevel, goal);

  const bmiSpan = document.getElementById('bmi');
  const descriptionSpan = document.createElement('span');
  const valueSpan = document.createElement('span');

  descriptionSpan.textContent = `Sua necessidade calórica diária é de aproximadamente`;
  valueSpan.textContent = `${dailyCaloricNeeds.toFixed(2)} calorias`;

  bmiSpan.innerHTML = '';
  bmiSpan.appendChild(descriptionSpan);
  bmiSpan.appendChild(valueSpan);

  infosDiv.classList.remove('hidden');
});

function isValidInput(age, weight, height) {
  return !isNaN(age) && !isNaN(weight) && !isNaN(height);
}

function calculateBasalMetabolicRate(gender, weight, height, age) {
  const MALE_BMR_CONSTANT = 66;
  const FEMALE_BMR_CONSTANT = 655;
  const WEIGHT_MULTIPLIER = 6.2;
  const HEIGHT_MULTIPLIER = 12.7;
  const AGE_MULTIPLIER = 6.8;

  if (gender === 'male') {
    return MALE_BMR_CONSTANT + (WEIGHT_MULTIPLIER * weight) + (HEIGHT_MULTIPLIER * height) - (AGE_MULTIPLIER * age);
  } else {
    return FEMALE_BMR_CONSTANT + (WEIGHT_MULTIPLIER * weight) + (HEIGHT_MULTIPLIER * height) - (AGE_MULTIPLIER * age);
  }
}

function calculateDailyCaloricNeeds(basalMetabolicRate, activityLevel, goal) {
  switch (activityLevel) {
    case 'sedentary':
      return basalMetabolicRate * 1.2;
    case 'lightly-active':
      return basalMetabolicRate * 1.375;
    case 'moderately-active':
      return basalMetabolicRate * 1.55;
    case 'very-active':
      return basalMetabolicRate * 1.725;
    case 'extremely-active':
      return basalMetabolicRate * 1.9;
  }

  if (goal === 'weight-loss') {
    return basalMetabolicRate - 500;
  } else if (goal === 'muscle-gain') {
    return basalMetabolicRate + 250;
  }

  return basalMetabolicRate;
}