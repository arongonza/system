function cerrarSesion() {
    alertify.confirm("Casa YASY S.A", "¿Quieres cerrar la sesión del usuario?",
        function(){
            localStorage.removeItem("nomUsuario"); //Elimina el nombre del usuario
            localStorage.removeItem("rolUsuario"); //Elimina el rol del usuario
            localStorage.removeItem("idUsuario");//Elimina el Id del Usuario

            sessionStorage.removeItem("sesionActiva");

            window.location.href = "index.html"; // Redirige al login
        },
        function(){
            
        }
    ).set('labels', {ok:'Sí', cancel:'No'}).set('transition', 'slide');
}