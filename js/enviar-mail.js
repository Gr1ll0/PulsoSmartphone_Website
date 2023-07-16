
document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submitButton');
    var formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');

    formInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            var isFormValid = Array.from(formInputs).every(function (input) {
                return input.checkValidity();
            });

            submitButton.disabled = !isFormValid;
        });
    });
});


$(document).ready(function () {
    // Validar campos antes de enviar el formulario
    $('#submitButton').click(function (event) {
        event.preventDefault(); // Evitar la acción predeterminada de envío del formulario

        // Validar campos
        var validForm = true;

        $('#contactForm input, #contactForm textarea').each(function () {
            if (!$(this).val()) {
                $(this).addClass('is-invalid');
                validForm = false;
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        if (!validForm) {
            return;
        }

        // Validar formato de correo electrónico
        var email = $('#email').val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            $('#email').addClass('is-invalid');
            validForm = false;
            return;
        }

        if (!validForm) {
            return;
        }

        // Enviar formulario con AJAX
        $.ajax({
            url: 'URL_DE_TU_API',
            type: 'POST',
            dataType: 'json',
            data: $('#contactForm').serialize(),
            success: function (response) {
                // Mostrar mensaje de éxito
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje enviado con exito',
                    text: 'Su mensaje se envio con exito, y sera respondido lo más rapido posible'
                }).then(function () {
                    // Redirigir o realizar otra acción después del éxito
                });
            },
            error: function (xhr, status, error) {
                // Mostrar mensaje de error
                Swal.fire({
                    icon: 'error',
                    title: 'Error al enviar el mensaje',
                    text: 'Si este error persiste pongase en contacto con un administrador de la página'
                });
            }
        });
    });
});
