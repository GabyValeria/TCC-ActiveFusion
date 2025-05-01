<?php
// Inicia a sessão (se necessário)
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Lógica para o feed, como carregar posts do banco de dados ou uma variável de exemplo
$posts = [
    ["autor" => "Usuário 1", "conteudo" => "Treinando pesado hoje!"],
    ["autor" => "Usuário 2", "conteudo" => "Comendo saudável!"],
];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ActiveFusion - Feed</title>
    <link rel="stylesheet" href="styles.css">
    <!-- Adicione outros links para CSS ou JS aqui -->
</head>
<body>

<!-- HEADER -->
<header>
    <nav>
        <div class="logo">
            <img src="logo.png" alt="ActiveFusion Logo">
        </div>
        <ul class="menu">
            <li><a href="feed.php">Feed</a></li>
            <li><a href="perfil.php">Perfil</a></li>
            <li><a href="config.php">Configurações</a></li>
            <li><a href="logout.php">Sair</a></li>
        </ul>
    </nav>
</header>

<!-- FEED -->
<main>
    <section class="feed">
        <div class="post-container">
            <textarea placeholder="O que você está pensando?"></textarea>
            <button class="post-btn">Postar</button>
        </div>

        <!-- Exibindo os posts -->
        <?php foreach ($posts as $post): ?>
        <div class="post">
            <div class="post-author"><?php echo $post['autor']; ?></div>
            <div class="post-content"><?php echo $post['conteudo']; ?></div>
        </div>
        <?php endforeach; ?>
    </section>
</main>

<!-- FOOTER -->
<footer>
    <div class="footer-content">
        <div class="footer-logo">
            <img src="logo.png" alt="ActiveFusion Logo">
        </div>
        <div class="footer-links">
            <h4>Conheça-nos</h4>
            <ul>
                <li><a href="#">Quem somos?</a></li>
                <li><a href="#">Fale conosco</a></li>
            </ul>
            <h4>Recursos</h4>
            <ul>
                <li><a href="#">Calculadoras</a></li>
                <li><a href="#">Criar Conta</a></li>
            </ul>
            <h4>Legal</h4>
            <ul>
                <li><a href="#">Termos de Uso</a></li>
                <li><a href="#">Política de Privacidade</a></li>
            </ul>
        </div>
    </div>
    <p>Todos os direitos reservados ao ActiveFusion © 2024.</p>
</footer>

</body>
</html>