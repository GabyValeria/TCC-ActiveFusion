<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usernameOrEmail = $_POST['username_or_email'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost', 'root', '', 'activefusion');

    if ($conn->connect_error) {
        die('Erro na conexão: ' . $conn->connect_error);
    }

    $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ? OR email = ?");
    $stmt->bind_param("ss", $usernameOrEmail, $usernameOrEmail);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($userId, $passwordHash);
    $stmt->fetch();

    if ($stmt->num_rows > 0 && password_verify($password, $passwordHash)) {
        $_SESSION['user_id'] = $userId;
        header("Location: perfil.php"); 
        exit();
    } else {
        echo "Usuário ou senha inválidos.";
    }

    $stmt->close();
    $conn->close();
}
?>