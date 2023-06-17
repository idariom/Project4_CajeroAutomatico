const accounts = [
    { nombre: "Mali", saldo: 200, password: "MaliDevf" },
    { nombre: "Gera", saldo: 290, password: "GeraDevf" },
    { nombre: "Maui", saldo: 67, password: "MauiDevf" },
];

const form = document.querySelector('#loginForm');

form.addEventListener('submit', event => {
    event.preventDefault();

    if (form.checkValidity()) {
        if (validateCredentials(form)) {
            saveToLocalStorage(form);

            showLoaderAndRedirect({ url: './pages/inicio.html' });
        } else {
            showAlert({ message: 'Usuario o contraseña incorrectos' });
        }
    } else {
        event.stopPropagation(); 
    }
});

function showLoaderAndRedirect({ url }) {
    showLoader(); 

    setTimeout(() => {
        hideLoader(); 
        form.submit();
        window.location.href = url;
    }, 2000);
}


function validateCredentials({ userName, userPassword }) {
    const { value: user } = userName;
    const { value: pass } = userPassword;

    return accounts.some(acc => acc.nombre === user && acc.password === pass);
}

function saveToLocalStorage({ userName, userPassword }) {
    const { value: user } = userName;
    const { value: pass } = userPassword;
    const acc = accounts.find(acc => acc.nombre === user && acc.password === pass);


    for (prop in acc) {
        localStorage.setItem(prop, acc[prop]);
    }
}

function showAlert({ message }) {
    alert(message);
}

function showLoader() {
    document.querySelector('#loader').classList.remove('d-none');
    document.querySelector('#loader').classList.add('overlay');
}

function hideLoader() {
    document.querySelector('#loader').classList.add('d-none');
}