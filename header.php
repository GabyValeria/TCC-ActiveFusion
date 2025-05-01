<?php
session_start(); // Inicia a sessão, caso não tenha sido iniciada
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ActiveFusion</title>
    <link rel="stylesheet" href="styles/style.css"> <!-- Substitua pelo seu CSS -->
    <link rel="icon" href="logos/2.png" type="image/png"> <!-- Logo do site -->
</head>
<body>
    <header>
        <div class="header-container">
            <!-- Logo -->
            <div class="logo">
                <a href="index.php">
                    <img src="logos/2.png" alt="ActiveFusion Logo"> <!-- Logo -->
                </a>
            </div>

            <!-- Navegação principal -->
            <nav>
                <ul>
                    <li><a href="feed.php">Feed</a></li>
                    <li><a href="profile.php">Perfil</a></li>
                    <li><a href="settings.php">Configurações</a></li>
                    <!-- Verifica se o usuário está logado -->
                    <?php if (isset($_SESSION['user_id'])): ?>
                        <li><a href="logout.php">Sair</a></li>
                    <?php else: ?>
                        <li><a href="login.php">Entrar</a></li>
                    <?php endif; ?>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Responsividade para dispositivos móveis -->
    <style>
        @media (max-width: 768px) {
            .header-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            nav ul {
                display: flex;
                gap: 10px;
            }

            nav ul li {
                list-style: none;
            }

            nav ul li a {
                font-size: 14px;
            }
        }
    </style>
</body>
</html>