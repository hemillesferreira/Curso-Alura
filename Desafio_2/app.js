let hrdesafio = document.querySelector ('h1')
hrdesafio.innerHTML = 'Hora do Desafio';

function botaoclick() {
    console.log('o botao foi clicado')
}
function euamoJs(){
    alert('Eu amo Js')
}

function cidade(){
    let cidade = prompt('qual sua cidade')
    alert(`estive em ${cidade} e lembrei de voce`)
}
function soma(){
    let n1 = prompt('digite um numero')
    n1 = parseInt (n1)
    let n2 = prompt ('digite outro numero')
    n2 =  parseInt(n2)
    let soma = n1 + n2
    alert(`a soma dos numeros é ${soma}`)
}