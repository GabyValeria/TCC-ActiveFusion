<?php
$servername = "localhost";
$username = "root"; // Seu nome de usuário
$password = ""; // Sua senha
$dbname = "activefusion"; // Nome do banco de dados

// Criando a conexão
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificando a conexão
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>