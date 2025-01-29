let nombreusuario = document.getElementById('nombreusuario');

let valorSesion = window.localStorage.getItem('statussesion');
let valorUserSesion = window.sessionStorage.getItem('usuario-temp');
if(valorUserSesion == null) {
    if (valorSesion == null) {
        window.location.href = '../../05-html-css-frameworks/pages/01-bootstrap.html';
    }
}

let valorUser = window.localStorage.getItem('usuario') == null
            ? sessionStorage.getItem('usuario-temp')
            : localStorage.getItem('usuario');


let h5saludo = document.createElement('h5');
h5saludo.append('Bienvenido '+ atob(valorUser));
h5saludo.className = 'numero-indicador';

nombreusuario.append(h5saludo);