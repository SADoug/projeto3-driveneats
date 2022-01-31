let escolheuPrato
let valorPrato
let escolheuBebida
let valorBebida 
let escolheuSobremesa
let valorSobremesa



function selecionarcomida(classebotao) {
    const selecionado = document.querySelector(".container-comidas .selecionado");
    
    if(selecionado !== null){ 
        selecionado.classList.remove("selecionado");} ;

    const botao = document.querySelector("." +classebotao);
    botao.classList.add("selecionado");
    liberarbotao();
    let valor = document.querySelector(".container-comidas .selecionado .preço ")
    valorPrato = parseInt(valor.innerHTML)
    
    escolheuPrato = "sim"
  
    }


function selecionarbebida(classebotaob) {
    const selecionado2 = document.querySelector(".container-bebidas .selecionado");
    if( selecionado2 !== null){
        selecionado2.classList.remove("selecionado");}
    const botao = document.querySelector("." +classebotaob);
    botao.classList.add("selecionado");

    let valor = document.querySelector(".container-bebidas .selecionado .preço")
    valorBebida = parseInt(valor.innerHTML)
    
    escolheuBebida = "sim"
    liberarbotao();
}

function selecionarsobremesa(classebotaos) {
    const selecionado3 = document.querySelector(".container-sobremesas .selecionado");
    if( selecionado3 !== null){
        selecionado3.classList.remove("selecionado");}
    const botao = document.querySelector("." +classebotaos)
    botao.classList.add("selecionado");

     
    let valor = document.querySelector(".sobremesas .selecionado .preço ")
    valorSobremesa = parseInt(valor.innerHTML)


    escolheuSobremesa = "sim"
    liberarbotao();
}
/*

function liberarbotao() {
    const comida = document.querySelector(".container-comidas .selecionado")
    const bebida = document.querySelector(".container-bebidas .selecionado");
    const sobremesa = document.querySelector(".container-sobremesas .selecionado");



    if (comida !== null && bebida !== null && sobremesa !== null) {
        let botaoliberado = document.querySelector('.BFs');
        botaoliberado.style.backgroundColor = '#32B72F';
        botaoliberado.innerHTML = '<p class="roboto">Fechar Pedido</p>'; 
               finalizarPedido();

    }
}*/

function liberarbotao() {
    let finalizar = document.querySelector(".BFs")
    if (escolheuPrato == "sim" && escolheuBebida == "sim" && escolheuSobremesa == "sim") {
        let botaoliberado = document.querySelector('.BFs');
        botaoliberado.style.backgroundColor = '#32B72F';
        botaoliberado.innerHTML = '<p class="roboto">Fechar Pedido</p>';
    }
}

function finalizarPedido() {
    let pratoEscolhido = document.querySelector(".container-comidas .selecionado h1")
    let bebidaEscolhida = document.querySelector(".container-bebidas .selecionado h1")
    let sobremesaEscolhida = document.querySelector(".container-sobremesas .selecionado h1")
    
    let nome
    let endereco
    if (escolheuPrato == "sim" && escolheuBebida == "sim" && escolheuSobremesa == "sim") {
        nome = prompt("Qual o seu nome?")
        endereco = prompt("Qual o seu endereço?")
    }
    
    let valorTotal = (parseFloat(valorPrato) + parseFloat(valorBebida) + parseFloat(valorSobremesa)).toFixed(2)

    let mensagem =`Olá, gostaria de fazer o pedido:\n   - Prato: ${pratoEscolhido.innerHTML}\n   - Bebida: ${bebidaEscolhida.innerHTML}\n   - Sobremesa: ${sobremesaEscolhida.innerHTML}\n   Total: R$ ${valorTotal}\n
    Nome: ${nome}\n    Endereço: ${endereco}`
    window.open("https://wa.me/+5521989607893?text=" + encodeURIComponent(mensagem))
}


/*
function adicionaricone(opção) {
    const icon = document.createElement('img')
    icon.setAttribute
    icon.setAttribute
    icon.classList.add('card')
    
    card.appendChild(icon)
}*/ 
