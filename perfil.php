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
    <title>Perfil ActiveFusion</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .menu {
            background-color: #4A148C;
            color: white;
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
        }

        .menu a:hover {
            text-decoration: underline;
        }

        .profile-container {
            width: 80%;
            max-width: 800px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .profile-container h1 {
            text-align: center;
            color: #4A148C;
        }

        .profile-info {
            text-align: center;
            margin-top: 10px;
        }

        .profile-info p {
            color: #555;
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

    <div class="profile-container">
        <h1>Bem-vindo(a), 
            <?php echo isset($user['name']) ? htmlspecialchars($user['name'], ENT_QUOTES, 'UTF-8') : 'Visitante'; ?>!
        </h1>
        <div class="profile-info">
            <p>Email: 
                <?php echo isset($user['email']) ? htmlspecialchars($user['email'], ENT_QUOTES, 'UTF-8') : 'Não informado'; ?>
            </p>
            <p>Bio: 
                <?php echo isset($user['bio']) ? htmlspecialchars($user['bio'], ENT_QUOTES, 'UTF-8') : 'Nenhuma biografia disponível'; ?>
            </p>
        </div>
    </div>
</body>
</html>
