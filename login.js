document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');

    if (!loginForm) {
        console.error("No se encontró el formulario de inicio de sesión.");
        return;
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('exampleInputEmail1').value;
        const password = document.getElementById('exampleInputPassword1').value;

        // Datos de usuario predefinidos para la verificación
        const predefinedUser = {
            email: 'usuario@example.com',
            password: '123456'
        };

        if (email === predefinedUser.email && password === predefinedUser.password) {
            alert('Inicio de sesión exitoso');
            // Redirigir al usuario a la página de inicio
            window.location.href = '../Prueba-1/home.html';
        } else {
            alert('Correo electrónico o contraseña incorrectos');
        }
    });
});
