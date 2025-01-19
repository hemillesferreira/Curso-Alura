
alert('Boas vindas ao jogo do mundo secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * 10 +1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

//enquanto chute nao for igual
while( chute != numeroSecreto){
    chute=prompt(`Escolha um numero entre 1 e ${numeroMaximo}` );
    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {

    } else{
        if(chute > numeroSecreto){
            alert(`o numero é menor que ${chute}`);
        }else{
            alert(`o numero secreto é maior que ${chute}`);
        }
       // tentativas = tentativas + 1;
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'

/*
if(tentativas >1 ){
    alert('Isso aí! Você descobriu o número secreto: ' + numeroSecreto + ' com ' + tentativas + ' tentativas');
}else{
    alert('Isso aí! Você descobriu o número secreto: ' + numeroSecreto + ' com ' + tentativas + ' tentativa');
}*/
