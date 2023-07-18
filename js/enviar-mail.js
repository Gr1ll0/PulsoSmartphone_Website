
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

const form = document.getElementById('contactForm')

async function handleSendEmail(event){
    event.preventDefault()

    const fd = new FormData(this)

    const response = await fetch('https://formspree.io/f/mknlgobw', {
        method: 'POST',
        body: fd,
        headers:{
            Accept: 'application/json'
        }
    })

    if(response.ok){
        this.reset()
        alert('Mensaje enviado')
    } else{
        alert('Error al enviar el mensaje')
    }


}

form.addEventListener('submit', handleSendEmail)
