function name() {
    return document.getElementById('name_').value
}

function telephone() {
    return document.getElementById('telephone_').value
}

function email() {
    return document.getElementById('email_').value
}

function login() {
    return document.getElementById('login_').value
}

function password() {
    return document.getElementById('password_').value
}

function checkPassword() {
    return document.getElementById('passwordConfirm_').value
}

document.querySelector('.btn').addEventListener('click', function () {

    const name_ = name();
    const telephone_ = telephone();
    const email_ = email();
    const login_ = login();
    const password_ = password();
    const checkPassword_ = checkPassword();

    do {

        if (password_ != checkPassword_) {
            alert("Senhas diferentes");
            document.getElementById('password_').value = '';
            document.getElementById('passwordConfirm_').value = '';
        } else {
            // link para banco para mandar os dados (colocar)

            //imitação de banco
            const user = {
                nome: name_,
                telephone: telephone_,
                email: email_,
                login: login_,
                password: password_,
            }
            // comando push para
        }

    } while (condition);


})