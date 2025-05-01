<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $firstName = trim($_POST['first_name']);
    $lastName = trim($_POST['last_name']);
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm_password'];

    // Verificação se as senhas coincidem
    if ($password !== $confirmPassword) {
        die('As senhas não correspondem.');
    }

    // Validação da força da senha
    if (!preg_match('/[A-Z]/', $password) ||  // Pelo menos uma letra maiúscula
        !preg_match('/[a-z]/', $password) ||  // Pelo menos uma letra minúscula
        !preg_match('/[0-9]/', $password) ||  // Pelo menos um número
        !preg_match('/[\W_]/', $password) ||  // Pelo menos um caractere especial
        strlen($password) < 8) {              // Pelo menos 8 caracteres
        die('A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
    }

    // Hash da senha
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Conexão com o banco de dados
    $conn = new mysqli('localhost', 'root', '', 'activefusion');

    if ($conn->connect_error) {
        die('Erro na conexão: ' . $conn->connect_error);
    }

    // Inserção dos dados no banco de dados
    $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, username, email, password) VALUES (?, ?, ?, ?, ?)");
    if (!$stmt) {
        die('Erro na preparação: ' . $conn->error);
    }

    $stmt->bind_param("sssss", $firstName, $lastName, $username, $email, $hashedPassword);

    if ($stmt->execute()) {
        // Registro bem-sucedido, redireciona para a página de login
        header("Location: login.html");
        exit();
    } else {
        echo "Erro ao registrar: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
