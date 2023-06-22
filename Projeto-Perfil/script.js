//window.alert("Bem-vindo");
class Jogador{
    nome;
    poder;
    vilao;
    lugar;
}

nome = window.prompt("Digite seu nome");

frase = document.getElementById("frase");

frase.innerHTML = `<p>Olá ${nome}, seja bem-vindo</p>`;
