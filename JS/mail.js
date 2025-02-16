$(document).ready(function() {
    $("#buttonForm").on("onclick", function(event) {
      event.preventDefault();
      $("#buttonForm").text("Enviando...").prop("disabled", true);
      
      $.ajax({
        method: "POST",
        url: "sendmail/send.php",
        data: {
          nomePessoa: $("#name").val(),
          nomeEmpresa: $("#shop-name").val(),
          cnpj: $("#cnpj").val(),
          email: $("#email").val(),
          mensagem: $("#message").val()
        }, success: function (data) {
            if (data) {
                document.getElementById("buttonForm").addEventListener("click", function() {
                    const button = this;
        
                    // Simula o envio do formulário com delay
                    button.classList.add("success"); // Adiciona a classe de sucesso
                    setTimeout(() => {
                        // Aqui você pode redirecionar ou reiniciar o botão
                        button.classList.remove("success"); // Remove a classe (opcional)
                    }, 2000); // Delay de 2 segundos para o feedback
                });
            } else {
                document.getElementById("buttonForm").addEventListener("click", function() {
                    const button = this;
        
                    // Simula o envio do formulário com delay
                    button.classList.add("error"); // Adiciona a classe de sucesso
                    setTimeout(() => {
                        // Aqui você pode redirecionar ou reiniciar o botão
                        button.classList.remove("success"); // Remove a classe (opcional)
                    }, 2000); // Delay de 2 segundos para o feedback
                });
            }
        }
      });
    });
});