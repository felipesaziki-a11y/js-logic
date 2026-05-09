let textList = "";
let precos = [];
let total = 0.0;
let produtos = [];
let precoUnidades = [];
let precoUnidadeTotais = [];
let quantidades = [];
let i = 0;
let opcao = -1;

function inicio(){
    mostrarMenu()
    opcao = -1;
}

function mostrarMenu(){
    debugger
    while(opcao !== 0){
    opcao = parseInt(prompt("1 - Registrar produto \n2 - Apresentar lista \n3 - Calcular total \n0 - Sair"));
    if (opcao === 1){
        registrarProduto();
    } else if (opcao === 2){
        mostrarLista();
    } else if (opcao === 3){
        calcularTotal();
    }}
}
function registrarProduto(){
    let produto = prompt("Digite o produto");
    produtos.push(produto);
    let precoUnidade = parseFloat(prompt("Digite o preco unitário"));
    precoUnidades.push(precoUnidade);
    let quantidade = parseInt(prompt("Quantidade de unidades do produto"))
    quantidades.push(quantidade)
    let precoUnidadeTotal = precoUnidades[i] * quantidades[i];
    precoUnidadeTotais.push(precoUnidadeTotal);
    textList = textList + produtos[i] + " x" + quantidades[i] + " | R$" + precoUnidadeTotais[i].toFixed(2) + "\n";
    i += 1;
    mostrarMenu2();
}
function mostrarLista(){
    alert(textList)
    mostrarMenu2();
}
function calcularTotal(){
    for(let turn = 0; turn <= i; turn += 1){
        total = total + precoUnidadeTotais[turn];
    }
    alert("Total:\nR$" + total.toFixed(2))
    mostrarMenu2();
}
function mostrarMenu2(){
    while(opcao !== 0){
    opcao = parseInt(prompt("1 - Registrar produto \n2 - Apresentar lista \n3 - Calcular total \n0 - Sair"));
    if (opcao === 1){
        registrarProduto();
    } else if (opcao === 2){
        mostrarLista();
    } else if (opcao === 3){
        calcularTotal();
    }}
}