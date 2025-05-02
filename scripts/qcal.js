window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav--fixed'); // Adiciona a classe ao rolar
    } else {
        nav.classList.remove('nav--fixed'); // Remove a classe ao voltar ao topo
    }
});

// Função para calcular as calorias queimadas
function calcularCalorias(atividade, intensidade, duracao, peso) {
    let caloriasQueimadas = 0;

    switch (atividade) {
        case "caminhada":
            if (intensidade === "baixa") {
                caloriasQueimadas = 4 * duracao * peso / 200;
            } else if (intensidade === "média") {
                caloriasQueimadas = 5 * duracao * peso / 200;
            } else {
                caloriasQueimadas = 6 * duracao * peso / 200;
            }
            break;
        case "corrida":
            if (intensidade === "baixa") {
                caloriasQueimadas = 8 * duracao * peso / 200;
            } else if (intensidade === "média") {
                caloriasQueimadas = 10 * duracao * peso / 200;
            } else {
                caloriasQueimadas = 12 * duracao * peso / 200;
            }
            break;
        case "natação":
            if (intensidade === "baixa") {
                caloriasQueimadas = 6 * duracao * peso / 200;
            } else if (intensidade === "média") {
                caloriasQueimadas = 8 * duracao * peso / 200;
            } else {
                caloriasQueimadas = 10 * duracao * peso / 200;
            }
            break;
        case "ciclismo":
            if (intensidade === "baixa") {
                caloriasQueimadas = 5 * duracao * peso / 200;
            } else if (intensidade === "média") {
                caloriasQueimadas = 7 * duracao * peso / 200;
            } else {
                caloriasQueimadas = 9 * duracao * peso / 200;
            }
            break;
        case "treino-de-força":
            if (intensidade === "baixa") {
                caloriasQueimadas = 4 * duracao * peso / 200;
            } else if (intensidade === "média") {
                caloriasQueimadas = 6 * duracao * peso / 200;
            } else {
                caloriasQueimadas = 8 * duracao * peso / 200;
            }
            break;
    }

    return caloriasQueimadas;
}

// Evento de clique no botão calcular
document.getElementById("calorias-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let atividade = document.getElementById("atividade").value;
    let intensidade = document.getElementById("intensidade").value;
    let duracao = parseFloat(document.getElementById("duracao").value.replace(',', '.'));
    let peso = parseFloat(document.getElementById("peso").value.replace(',', '.'));

    // Verificar se os campos estão preenchidos
    if (!isNaN(duracao) && !isNaN(peso) && duracao > 0 && peso > 0) {
        let caloriasQueimadas = calcularCalorias(atividade, intensidade, duracao, peso);

        document.getElementById("value").innerHTML = caloriasQueimadas.toFixed(2);
        document.getElementById("description").innerHTML = "Você queimou aproximadamente " + caloriasQueimadas.toFixed(2) + " calorias.";

        // Mostrar o resultado
        document.getElementById("infos").classList.remove("hidden");
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});