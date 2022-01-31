
let escolheuPrato = null;
let valorPrato = null;
let escolheuBebida = null;
let valorBebida = null;
let escolheuSobremesa = null;
let valorSobremesa = null;



function selecionarcomida(classebotao, precopratox) {
    const selecionado = document.querySelector(".container-comidas .selecionado");
    
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    };  

    const botao = document.querySelector("." + classebotao);
    botao.classList.add("selecionado");

    liberarbotao();
    soma();
    adcicongreen(botao);

    let valor = document.querySelector(".container-comidas .selecionado .preço ")
    valorPrato = parseFloat(precopratox);

    escolheuPrato = "sim"

}


function selecionarbebida(classebotaob, precopratoy) {
    const selecionado2 = document.querySelector(".container-bebidas .selecionado");
    if (selecionado2 !== null) {

        selecionado2.classList.remove("selecionado");
    
    }
    const botao = document.querySelector("." + classebotaob);
    botao.classList.add("selecionado");
    adcicongreen(botao);


    let valor = document.querySelector(".container-bebidas .selecionado .preço")
    valorBebida = parseFloat(precopratoy);


    escolheuBebida = "sim"
    liberarbotao();
    soma();
}

function selecionarsobremesa(classebotaos, precopratoz) {
    const selecionado3 = document.querySelector(".container-sobremesas .selecionado");
    if (selecionado3 !== null) {
        selecionado3.classList.remove("selecionado");
    }
    const botao = document.querySelector("." + classebotaos)
    botao.classList.add("selecionado");
    adcicongreen(botao);


    let valor = document.querySelector(".sobremesas .selecionado .preço ")
    valorSobremesa = parseFloat(precopratoz);


    escolheuSobremesa = "sim"
    liberarbotao();
    soma();
}


function liberarbotao() {
    let finalizar = document.querySelector(".BFs")
    if (escolheuPrato == "sim" && escolheuBebida == "sim" && escolheuSobremesa == "sim") {
        let botaoliberado = document.querySelector('.BFs');
        botaoliberado.style.backgroundColor = '#32B72F';
        botaoliberado.innerHTML = '<p class="roboto">Fechar Pedido</p>';
    }
}
function soma() {
    valorTotal = ((valorPrato) + (valorBebida) + (valorSobremesa)).toFixed(2)

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


    let mensagem = `Olá, gostaria de fazer o pedido:\n   - Prato: ${pratoEscolhido.innerHTML}\n   - Bebida: ${bebidaEscolhida.innerHTML}\n   - Sobremesa: ${sobremesaEscolhida.innerHTML}\n   Total: R$ ${valorTotal}\n
    Nome: ${nome}\n    Endereço: ${endereco}`
    window.open("https://wa.me/+5521989607893?text=" + encodeURIComponent(mensagem))
}


function adcicongreen(botao) {
    const icon = document.createElement('img')
    icon.setAttribute('src', './vector.svg')
    icon.classList.add('iconstyle')

    botao.appendChild(icon)
}
