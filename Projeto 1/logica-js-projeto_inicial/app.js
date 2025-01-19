alert('Boas vindas ao jogo do mundo secreto');
let numeroSecreto = 4;
console.log(numeroSecreto)

let chute = prompt('Escolha um numero entre 1 e 30');
console.log(chute)


if (chute == numeroSecreto) {
    alert('Isso aí! Você descobriu o número secreto: ' + numeroSecreto);
} else {
    alert('Você errou!');
}