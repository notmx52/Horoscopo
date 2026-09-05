const APIKEY = "vBiLVZTc2lMjD0mYwazAVYw8QhimGrxch2PR8L89";

const passwordInput =
    document.querySelector(
        'input[type="password"]'
    );

const dragon =
    document.getElementById("dragon");

const togglePassword =
    document.getElementById("togglePassword");
if (passwordInput && dragon) {

    passwordInput.addEventListener(
        "focus",
        function () {

            dragon.src =
                "close.png";

        }
    );

    passwordInput.addEventListener(
        "blur",
        function () {

            dragon.src =
                "open.png";

        }
    );

}

if (togglePassword && passwordInput) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (
                passwordInput.type === "password"
            ) {

                passwordInput.type = "text";

                togglePassword.textContent = "X_X";

            } else {

                passwordInput.type = "password";

                togglePassword.textContent = ".-.";

            }

        }
    );

}

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nombre =
                document.getElementById("name").value;

            const correo =
                document.getElementById(
                    "registerEmail"
                ).value;

            const password =
                document.getElementById(
                    "registerPassword"
                ).value;


            const usuario = {

                nombre: nombre,

                correo: correo,

                password: password

            };


            localStorage.setItem(
                "usuario",
                JSON.stringify(usuario)
            );


            alert(
                "¡Usuario registrado correctamente!"
            );


            window.location.href =
                "forms.html";

        }
    );

}
const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const correo =
                document.getElementById(
                    "loginEmail"
                ).value;

            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const usuarioGuardado =
                localStorage.getItem("usuario");


            if (!usuarioGuardado) {

                alert(
                    "No existe ningún usuario registrado."
                );

                window.location.href =
                    "log.html";

                return;

            }


            const usuario =
                JSON.parse(usuarioGuardado);


            if (
                correo === usuario.correo &&
                password === usuario.password
            ) {

                alert(
                    "BIEEEN"
                );


                window.location.href =
                    "animet.html";


            } else {

                alert(
                    "MALO"
                );

            }

        }
    );

}

const motivacionForm =
    document.getElementById(
        "motivacionForm"
    );

const dragonAnimet =
    document.getElementById("dragonAnimet");
if (motivacionForm) {

    const usuarioGuardado =
        localStorage.getItem("usuario");


    if (usuarioGuardado) {

        const usuario =
            JSON.parse(usuarioGuardado);


        document.getElementById(
            "bienvenida"
        ).textContent =
            "Hola " + usuario.nombre;

    }


motivacionForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        if (dragonAnimet) {

            dragonAnimet.src =
                "dragonasombrado.png";

        }

        const signo =
            document.getElementById(
                "signo"
            ).value;

        const mensaje =
            document.getElementById(
                "mensajeMotivacion"
            );

        const alerta =
            document.getElementById(
                "alerta"
            );

        mensaje.innerHTML =
            "<p>Buscando...</p>";

        alerta.innerHTML = "";

            try {

                const respuesta =
                    await fetch(
                        "https://api.api-ninjas.com/v1/horoscope?zodiac="
                        + signo,
                        {

                            method: "GET",

                            headers: {

                                "X-Api-Key":
                                    APIKEY

                            }

                        }
                    );


                if (!respuesta.ok) {

                    throw new Error(
                        "Error al consultar la API"
                    );

                }


                const datos =
                    await respuesta.json();


                mensaje.innerHTML =

                    "<h3>Tu horóscopo</h3>" +

                    "<p>" +
                    datos.horoscope +
                    "</p>" +

                    "<small>" +
                    "Signo: " +
                    datos.sign +
                    "</small>";


                alerta.innerHTML =

                    "<h3>Recomendación</h3>" +

                    "<p>" +
                    "Toma este mensaje como una guía " +
                    "para reflexionar y disfrutar tu día." +
                    "</p>";

            }


            catch (error) {

                console.error(error);


                mensaje.innerHTML =

                    "<h3>Error</h3>" +

                    "<p>" +
                    "No se pudo obtener el horóscopo." +
                    "</p>";


                alerta.innerHTML =

                    "<p>" +
                    "No se pudo conectar con el servicio." +
                    "</p>";

            }

        }
    );

}