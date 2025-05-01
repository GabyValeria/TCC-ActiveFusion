<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];

    $conn = new mysqli('localhost', 'root', '', 'activefusion');

    if ($conn->connect_error) {
        die('Erro na conexão: ' . $conn->connect_error);
    }

    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Geração de token para redefinição
        $token = bin2hex(random_bytes(50));
        $stmt = $conn->prepare("UPDATE users SET reset_token = ? WHERE email = ?");
        $stmt->bind_param("ss", $token, $email);
        $stmt->execute();

        // URL de redefinição de senha
        $resetLink = "http://localhost/reset_password.html?token=$token";

        // Enviar e-mail de recuperação
        $subject = "Redefinição de Senha - ActiveFusion";
        $message = "Clique no link abaixo para redefinir sua senha:\n$resetLink";
        $headers = "From: no-reply@activefusion.com";

        if (mail($email, $subject, $message, $headers)) {
            echo "E-mail de recuperação enviado com sucesso.";
        } else {
            echo "Erro ao enviar e-mail.";
        }
    } else {
        echo "E-mail não encontrado.";
    }

    $stmt->close();
    $conn->close();
}
?>