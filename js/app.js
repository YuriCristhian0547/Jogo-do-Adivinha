let numeroSecreto;
let limite;

let tentativasMaximas = 8;
let tentativasRestantes = 8;

let historico = [];

function iniciarJogo() {

    limite = Number(
        document.getElementById("dificuldade").value
    );

    numeroSecreto =
        Math.floor(Math.random() * limite) + 1;

    tentativasRestantes = tentativasMaximas;

    historico = [];

    document.getElementById("tentativas").textContent =
        "Tentativas: " + tentativasRestantes + " / 8";

    document.getElementById("feedback").textContent =
        "Jogo iniciado! Tente adivinhar.";

    document.getElementById("historico").innerHTML = "";

}

function verificarChute() {

    if (!numeroSecreto) {
        alert("Clique em Iniciar Jogo primeiro!");
        return;
    }

    let chute = Number(
        document.getElementById("chute").value
    );

    if (!chute) {
        alert("Digite um número!");
        return;
    }

    tentativasRestantes--;

    historico.push(chute);

    atualizarHistorico();

    document.getElementById("tentativas").textContent =
        "Tentativas: " + tentativasRestantes + " / 8";

    if (chute === numeroSecreto) {

        document.getElementById("feedback").textContent =
            "🎉 Você acertou!";

        numeroSecreto = null;
        return;
    }

    if (chute > numeroSecreto) {

        document.getElementById("feedback").textContent =
            "O número é MENOR";

    } else {

        document.getElementById("feedback").textContent =
            "O número é MAIOR";

    }

    if (tentativasRestantes === 0) {

        document.getElementById("feedback").textContent =
            "Fim de jogo! O número era " + numeroSecreto;

        numeroSecreto = null;

    }

}

function atualizarHistorico() {

    let lista =
        document.getElementById("historico");

    lista.innerHTML = "";

    for (let i = 0; i < historico.length; i++) {

        let item =
            document.createElement("li");

        item.textContent =
            "Tentativa " + (i + 1) +
            ": " + historico[i];

        lista.appendChild(item);

    }

}

function reiniciarJogo() {

    numeroSecreto = null;

    tentativasRestantes =
        tentativasMaximas;

    historico = [];

    document.getElementById("tentativas").textContent =
        "Tentativas: 8 / 8";

    document.getElementById("feedback").textContent =
        "Jogo reiniciado.";

    document.getElementById("historico").innerHTML = "";

    document.getElementById("chute").value = "";

}

document
    .getElementById("chute")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            verificarChute();

        }

    });
