<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $shopName = $_POST['shop-name'];
        $cnpj = $_POST['cnpj'];
        $message = $_POST['message'];
        $formulario = $_POST['formulario'];

        // Validação e processamento
        if ($name && $email && $shopName && $cnpj && $message && $formulario) {
            http_response_code(200); // Sucesso
            echo "Dados recebidos com sucesso.";
        } else {
            http_response_code(400); // Erro na requisição
            echo "Erro nos dados enviados.";
        }
    } else {
        http_response_code(405); // Método não permitido
        echo "Método não permitido.";
    }
?>