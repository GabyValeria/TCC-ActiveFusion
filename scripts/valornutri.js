document.getElementById('searchButton').addEventListener('click', function() {
    const foodItem = document.getElementById('foodInput').value;
    const loader = document.getElementById('loader');
    const foodInfoDiv = document.getElementById('foodInfo');
    
    // Mostra o loader
    loader.style.visibility = 'visible';

    if (foodItem.trim() !== "") {
        fetchNutritionInfo(foodItem);
    } else {
        alert('Por favor, insira um produto alimentício');
        // Esconde o loader caso a entrada esteja vazia
        loader.style.visibility = 'hidden';
    }
});

function fetchNutritionInfo(foodItem) {
    const apiUrl = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(foodItem)}&search_simple=1&action=process&json=1`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayFoodInfo(data.products);
            // Esconde o loader após os dados serem carregados
            document.getElementById('loader').style.visibility = 'hidden';
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
            document.getElementById('foodInfo').innerHTML = "Erro ao buscar dados.";
            // Esconde o loader se houver erro
            document.getElementById('loader').style.visibility = 'hidden';
        });
}

function displayFoodInfo(products) {
    const foodInfoDiv = document.getElementById('foodInfo');
    foodInfoDiv.innerHTML = "";

    const limitedProducts = products.slice(0, 6);

    if (limitedProducts.length > 0) {
        limitedProducts.forEach(product => {
            const productName = product.product_name || "Desconhecido";
            const calories = product.nutriments && product.nutriments["energy-kcal_100g"] ? product.nutriments["energy-kcal_100g"] : "N/D";
            const fat = product.nutriments && product.nutriments["fat_100g"] ? product.nutriments["fat_100g"] : "N/D";
            const protein = product.nutriments && product.nutriments["proteins_100g"] ? product.nutriments["proteins_100g"] : "N/D";

            const foodItemHtml = `
                <div class="food-item">
                    <p><span>Produto:</span> ${productName}</p>
                    <p><span>Calorias (por 100g):</span> ${calories} kcal</p>
                    <p><span>Gordura Total (por 100g):</span> ${fat} g</p>
                    <p><span>Proteínas (por 100g):</span> ${protein} g</p>
                </div>
            `;
            foodInfoDiv.innerHTML += foodItemHtml;
        });
    } else {
        foodInfoDiv.innerHTML = "Nenhum resultado encontrado.";
    }
}