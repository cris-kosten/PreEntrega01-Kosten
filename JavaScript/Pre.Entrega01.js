console.log('Iniciando Un Simulador Iteractivo')
console.log('Bienvenido al Servicio Secreto De La Republica Argetina')

function ingreseDatos() {
    //Función general.
    function nombre() {
        //Función particular.


        for (let nombreUsuario = 1; nombreUsuario <= 6; nombreUsuario++) {
            console.log('  Se encuentran en Misiones los siguientes agentes   ' + nombreUsuario);
            if (nombreUsuario === 6) {
                break
            }
        }


        let nombreUsuario = prompt("Sr X, Ingrese su Usuario."); // User: agente007
        console.log('Bienvenido Super ' + nombreUsuario);

        if (nombreUsuario == "agente007" || nombreUsuario == "Agente007") {
            alert("Le damos la Bienvenida al Servicio Secreto Super Agente007.");
        } else {
            (nombreUsuario != "agente007" || nombreUsuario != "Agente007")
            alert(" Lo Sentimos Sr X, datos Incorrectos ");
            console.log('Usuario Incorrecto');
            nombreUsuario = prompt('Lo Sentios Sr No Tenemos Registro del Usuario');
            alert("Le damos la Bienvenida al Servicio Secreto Super Agente00.");
        }
        console.log('Le damos la bienvenida  Super agente007.')

    }
    nombre();

    function apellido() {
        let apellidoUsuario = prompt("Sr Agente, ingrese su Apellido."); // Apellido: kosten
        console.log(apellidoUsuario);
        if (apellidoUsuario == "Kosten" || apellidoUsuario == "kosten") {
            alert("ha sido autenticado correctamente por el Servicio Secreto.");
        } else {
            (apellidoUsuario != "Kosten" || apellidoUsuario != "kosten")
            alert("Sr X, no hemos encontrado el registro requerido");
            apellidoUsuario = prompt("Ingrese su Apellido Agente.");
            alert("ha sido autenticado correctamente por el Servicio Secreto.");

        }
        console.log('Lo Esperabamos Sr Kosten')
    }
    apellido();

    function email() {
        let emailUsuario = prompt("Agente Ingrese Su email del Servicio Secreto"); //email: mision-rescate007@gmail.com
        console.log(emailUsuario);
        if (emailUsuario == "agente007@gmail.com") {} else
            (emailUsuario == "agente007@gmail.com");
        alert("Lo Sentimos, repita su correo");
        emailUsuario = prompt("Agente007 su email es: agente007@gmail.com.");
        alert("El Serv.Secreto le desea un buen 2024 Super Agente007.");
    }

    email();
    console.log('Tiene Notificaciones Pendientes ')

    function contraseña() {
        const contraseñaUsuario = prompt("Ingrese su clave al Servicio Secreto"); // clave: 0303456
        console.log(contraseñaUsuario);
        if (contraseñaUsuario == "0303456") {
            alert("Welcome Super Agente007..");
            alert("Tiene Misiones Pendientes Por Realizar, Solicitadas Por su Superior.");
        } else {
            (contraseñaUsuario != "  ")
            alert("Clave Incorrecta");
            contraseñaUsuario = prompt("Agente Coloque correctamente su Clave");
            alert("Welcome Super Agente007.");
            alert("Tiene Misiones Pendientes Por Realizar, Solicitadas Por su Superior.");


        }
        console.log('Tiene 72hs Para Completar La Siguiente Mision')
    }

    contraseña();

}
ingreseDatos();