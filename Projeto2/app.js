let listaDeNumerosSorteados = []
let numeroLimite =10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas =1

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do numero secreto')
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10')
}
mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou')
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p',mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela ('p', 'o numero é menor' )
        }else{
            exibirTextoNaTela('p', 'o numero é maior')
        }
        tentativas++
        limparCampo()
    }
}
function gerarNumeroAleatorio (){
    let numeroEscolhido =  parseInt (Math.random() * numeroLimite + 1)
    let quantidadeDeelemtosNaLista=listaDeNumerosSorteados.length

    if(quantidadeDeelemtosNaLista==numeroLimite){
        listaDeNumerosSorteados=[]
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}
function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    tentativas=1
    mensagemInicial()
    document.getElementById('reiniciar'). setAttribute('disabled',true)
}