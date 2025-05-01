<?php
session_start();
include('db_connect.php');

// Verificar se o usuário está logado
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['post_content'])) {
    $user_id = $_SESSION['user_id'];
    $post_content = htmlspecialchars($_POST['post_content']); // Prevenir injeção de código

    // Inserir o post no banco de dados
    $sql = "INSERT INTO posts (user_id, post_content) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('is', $user_id, $post_content);

    if ($stmt->execute()) {
        header('Location: feed.php'); // Redirecionar de volta para o feed
    } else {
        echo "Erro ao postar!";
    }

    $stmt->close();
}

$conn->close();
?>
