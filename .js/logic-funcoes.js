let textList = "[ Carrinho ]";
let total = 0.0;
let produtos = [];
let precoUnidades = [];
let precoUnidadeTotais = [];
let quantidades = [];
let i = 0;
let opcao = -1;

function inicio() {
    mostrarMenu();
}

function mostrarMenu() {
    opcao = -1;
    while (opcao !== 0) {
        opcao = parseInt(prompt("1 - Registrar produto\n2 - Apresentar lista\n3 - Calcular total\n4 - Limpar\n0 - Sair"));
        if (opcao === 1) {
            registrarProduto();
        } else if (opcao === 2) {
            mostrarLista();
        } else if (opcao === 3) {
            calcularTotal();
        } else if (opcao === 4) {
            limparProdutos();
        }
    }
}

function registrarProduto() {
    let produto = prompt("Digite o produto");
    produtos.push(produto);
    let precoUnidade = parseFloat(prompt("Digite o preço unitário"));
    precoUnidades.push(precoUnidade);
    let quantidade = parseInt(prompt("Quantidade de unidades do produto"));
    quantidades.push(quantidade);
    let precoUnidadeTotal = precoUnidades[i] * quantidades[i];
    precoUnidadeTotais.push(precoUnidadeTotal);
    textList += "\n" + produtos[i] + " x" + quantidades[i] + " | R$" + precoUnidadeTotais[i].toFixed(2);
    i += 1;
}

function mostrarLista() {
    alert(textList);
}

function calcularTotal() {
    total = 0.0; // ← resetar antes de somar
    for (let turn = 0; turn < i; turn += 1) {
        total += precoUnidadeTotais[turn];
    }
    alert("Total:\nR$" + total.toFixed(2));
}
function limparProdutos(){
    textList = "[ Carrinho ]";
    produtos.splice(0,i);
    precoUnidades.splice(0,i);
    precoUnidadeTotais.splice(0,i);
    quantidades.splice(0,i)
}