const urlApiBase = 'http://localhost:8000';
const urlApiLogin = '/security/login';
var isNotifyMouseMove = false;
const webPlatform = 'WEB';
const ipUser = '0.0.0.0';
const usernameDefault = 'VMT-Dev-User';
const passwordDefault = '123456.';


document.getElementById('myIdForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let dataForm = new FormData(this);
    let usuarioForm = dataForm.get('usuario');
    let passwordForm = dataForm.get('passwd')
    if ( usuarioForm == undefined || usuarioForm.length == 0){
        window.alert('El usuario es obligatorio');
        return;
    }
    if ( passwordForm == undefined || passwordForm.length == 0) {
        alert('La contraseña es obligatoria');
        return;
    }

    if(usuarioForm != usernameDefault || passwordForm != passwordDefault) {
        alert('Usuario o contraseña incorrecta');
        return;
    }
    dataForm.append('ip', '0.0.0.0');
    dataForm.append('platform', ipUser);
    if(dataForm.get('mantsesion') == 'on') {
        if(window.confirm('¿Está seguro de querer mantener su sesión activa?')) {
            window.localStorage.setItem('usuario', btoa(dataForm.get('usuario')));
            window.localStorage.setItem('statussesion', btoa(dataForm.get('mantsesion')));
        } 
    } else {
        window.sessionStorage.setItem('usuario-temp', btoa(dataForm.get('usuario')));
    }

    window.location.href = '../../04-html-css-ejercicios/pages/dashboard.html';

});

function clicLink() {
    if(!isNotifyMouseMove){
        console.info(`Click en link ${urlApiBase}`)
        isNotifyMouseMove = true;
    }
}