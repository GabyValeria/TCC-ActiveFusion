<?php
// Conexão com o banco de dados
$host = 'localhost';
$dbname = 'activefusion';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro na conexão: " . $e->getMessage());
}

// Simulando um usuário logado (substituir com autenticação real em projeto final)
$user_id = 1;

// Inicializando a variável $user como null
$user = null;

// Consulta para obter informações do usuário
$query = "SELECT * FROM users WHERE id = :id";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':id', $user_id, PDO::PARAM_INT);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    die("Usuário não encontrado.");
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feed ActiveFusion</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f5f5f5;
            color: #333;
        }

        .menu {
            background-color: #330099;
            padding: 10px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .menu a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
            padding: 8px 12px;
            border-radius: 5px;
        }

        .menu a:hover {
            background-color: #ff9999;
            color: #330099;
        }

        .feed-container {
            width: 80%;
            max-width: 800px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .feed-container h1 {
            text-align: center;
            color: #4A148C;
        }

        .post {
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
        }

        .post:last-child {
            border: none;
        }

        .post h2 {
            font-size: 18px;
            color: #330099;
        }

        .post p {
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="menu">
        <a href="perfil.php">Perfil</a>
        <a href="feed.php">Feed</a>
        <a href="grupos.php">Grupos</a>
        <a href="nutricao.php">Nutrição</a>
        <a href="exercicios.php">Exercícios</a>
    </div>

    <div class="feed-container">
        <h1>Feed de Atividades</h1>
        <div class="post">
            <h2>Post de Treino</h2>
            <p>Usuário X completou um treino de força! #Fitness #ActiveFusion</p>
        </div>
        <div class="post">
            <h2>Dica de Nutrição</h2>
            <p>Nutricionista Y compartilhou: "Não esqueça de se hidratar durante os treinos!"</p>
        </div>
        <!-- Adicione mais posts conforme necessário -->
    </div>
</body>
</html>
