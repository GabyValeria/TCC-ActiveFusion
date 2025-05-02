window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav--fixed'); // Adiciona a classe ao rolar
    } else {
        nav.classList.remove('nav--fixed'); // Remove a classe ao voltar ao topo
    }
});

// Pegando elementos
const cardsContainer = document.querySelector('.explore__grid');
const cards = document.querySelectorAll('.explore__card');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Definindo variáveis
let currentIndex = 0;
const visibleCards = 4; // Quantidade de cards visíveis
const totalCards = cards.length;

// Função para atualizar a visibilidade dos cards
function updateCardsVisibility() {
    cards.forEach((card, index) => {
        // Se o card estiver dentro do intervalo de visibilidade, ele é mostrado
        if (index >= currentIndex && index < currentIndex + visibleCards) {
            card.style.display = 'block'; // Exibe o card
        } else {
            card.style.display = 'none'; // Esconde o card
        }
    });
}

// Função para mover para o próximo card
function showNextCards() {
    if (currentIndex + visibleCards < totalCards) {
        currentIndex++; // Mova o índice atual para o próximo card
        updateCardsVisibility();
    }
}

// Função para mover para o card anterior
function showPrevCards() {
    if (currentIndex > 0) {
        currentIndex--; // Mova o índice atual para o card anterior
        updateCardsVisibility();
    }
}

// Eventos de clique para navegação
nextBtn.addEventListener('click', showNextCards);
prevBtn.addEventListener('click', showPrevCards);

// Iniciando o carrossel com os primeiros cards visíveis
updateCardsVisibility();


let currentReview = 0;
const reviews = document.querySelectorAll('.review__content');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.remove('active');
        if (i === index) {
            review.classList.add('active');
        }
    });
}

nextButton.addEventListener('click', () => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
});

prevButton.addEventListener('click', () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
});

// Mostrar a primeira avaliação
showReview(currentReview);