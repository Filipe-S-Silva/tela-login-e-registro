const switcher = document.querySelector('.validacao')

function login() {
return document.getElementById('login').value;
    
}

function senha() {
    return document.getElementById('senha').value;

}

switcher.addEventListener('click', function () {

    if (login() == "Filipe" && senha() == "123") {
        window.location.href = "../home.html";
    } else {
        document.getElementById('login').value = "";
        document.getElementById('senha').value = "";
        alert("ACESSO NEGADO\nTENTE NOVAMENTE");
    }
})
