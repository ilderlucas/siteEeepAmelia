const form = document.getElementById('contatoForm');
        const button = document.getElementById('buttonForm');
        const buttonText = document.getElementById('buttonText');
        const successIcon = button.querySelector('.fa-check');
        const errorIcon = button.querySelector('.fa-times');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita o envio padrão do formulário

            // Dados do formulário
            const formData = new FormData(form);

            // Configurações do fetch para envio ao PHP
            fetch('https://mxscredito.com.br/nova-mxs/PHP/processar.php', {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    if (response.ok) {
                        mostrarFeedback('success');
                    } else {
                        mostrarFeedback('error');
                    }
                })
                .catch(() => {
                    mostrarFeedback('error');
                });
        });

        function mostrarFeedback(status) {
            if (status === 'success') {
                button.classList.add('success');
                successIcon.style.opacity = '1';
                buttonText.style.opacity = '0';
            } else {
                button.classList.add('error');
                errorIcon.style.opacity = '1';
                buttonText.style.opacity = '0';
            }

            setTimeout(() => {
                button.classList.remove('success', 'error');
                successIcon.style.opacity = '0';
                errorIcon.style.opacity = '0';
                buttonText.style.opacity = '1';
            }, 2000); // Retorna ao estado normal após 2 segundos
        }