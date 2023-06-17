const userNameElement = document.querySelector('#userName');
const modal = document.querySelector('#cuerpoModal');

const userName = localStorage.getItem('nombre');
if (userName) {
    userNameElement.textContent = `${userName}`;
}

const saldo = localStorage.getItem('saldo');
if (saldo) {
    modal.textContent = `Disponible $${saldo}`;
}
