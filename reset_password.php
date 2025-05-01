<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $token = $_POST['token'];
    $new_password = $_POST['new_password'];
    $confirm_password = $_POST['confirm_password'];

    if ($new_password !== $confirm_password) {
        die('As senhas não coincidem.');
    }

    $conn = new mysqli('localhost', 'root', '', 'activefusion');

    if ($conn->connect_error) {
        die('Erro na conexão: ' . $conn->connect_error);
    }

    $stmt = $conn->prepare("SELECT id FROM users WHERE reset_token = ?");
    $stmt->bind_param("s", $token);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
        $stmt = $conn->prepare("UPDATE users SET password = ?, reset_token = NULL WHERE reset_token = ?");
        $stmt->bind_param("ss", $hashed_password, $token);
        $stmt->execute();

        echo "Senha redefinida com sucesso. <a href='login.html'>Faça login</a>";
    } else {
        echo "Token inválido ou expirado.";
    }

    $stmt->close();
    $conn->close();
}
?>