document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-contacto");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("form-success");

    form.addEventListener("submit", (e) => {
        e.preventDefault();  

        let valid = true;

        errorName.textContent = "";
        errorEmail.textContent = "";
        errorMessage.textContent = "";
        successMessage.style.display = "none";

        if (nameInput.value.trim() === "") {
            errorName.textContent = "El nombre es requerido.";
            valid = false;
        }

        // Validar campo email
        if (emailInput.value.trim() === "") {
            errorEmail.textContent = "El correo electrónico es requerido.";
            valid = false;
        } else if (!validarEmail(emailInput.value)) {
            errorEmail.textContent = "El formato del correo electrónico no es válido.";
            valid = false;
        }

        if (messageInput.value.trim() === "") {
            errorMessage.textContent = "El mensaje es requerido.";
            valid = false;
        }

        if (valid) {
            successMessage.style.display = "block";
        }
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
