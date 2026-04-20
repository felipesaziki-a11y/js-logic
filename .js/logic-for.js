function exemploFor(){
    // for (declaração de variável; condição, incrementar/decrementar)
    for(let index = 0; index < 4; index = index + 1){
        alert(index)
    }
}

//todo while pode virar um for? Depende
//quando tem repetições definidas (repetirá 10x por)
//todo for pode virar um while? Sim
function exemploJogo(){
    let total = 0;
    for(let index = 0; index < 3; index = index + 1){
        let nome = prompt("Digite o nome do jogo");
        let preco = parseFloat(prompt("Digite o preço"))
        total = total + preco
    }
    alert("Total: R$" + total)
}
function exemploForProduto(){
    let total = 0
    let quantidadePadaria = 0, quantidadeHortifruti = 0, quantidadeCarne = 0;
    for (let index = 1; index < 4; index = index + 1){
        let produto = prompt("Digite o produto");
        let categoria = prompt("Digite a categoria do produto:\n[Carne]\n[Hortifruti]\n[Padaria]").trim(" ");
        while (categoria.toLowerCase() !== "carne" && 
        categoria.toLowerCase() !== "hortifruti" && 
        categoria.toLowerCase() !== "padaria"){
            categoria = prompt("Erro, digite novamente\n[Carne]\n[Hortifruti]\n[Padaria]").trim(" ")
        }
        let preco = parseFloat(prompt("Digite o preço do produto"))
        if(categoria.toLowerCase() === "padaria"){
            quantidadePadaria = quantidadePadaria + 1;
        } else if(categoria.toLowerCase() === "hortifruti"){
            quantidadeHortifruti = quantidadeHortifruti + 1;
        } else if(categoria.toLowerCase() === "carne"){
            quantidadeCarne = quantidadeCarne + 1;
        }
        total = total + preco
    }
    alert("Quantidade de Padaria: " + quantidadePadaria 
        + "\nQuantidade de Hortifruti: " + quantidadeHortifruti
        + "\nQuantidade de Carnes: " + quantidadeCarne
    )
    alert("Total à pagar: R$" + total)
}
function contagem(){
    for(let index = 10; index > 0; index = index - 1){
        alert(index)
    }
}
function findEven(){
    let nPares = 0;
    let numeros = parseInt(prompt("Digite a quantidade de números"));
    for(let index = 0; index < numeros; index = index + 1){
        let numero = parseInt(prompt("Digite número"))
        if (numero % 2 === 0){
            nPares = nPares + 1
        }
    }
    alert("Quantidade de números pares: " + nPares)
}
function exercicio01MostrarNumeros(){
    for (let index = 1; index <= 5; index = index + 1){
        console.log(index)
    }
}
function exercicio02MostrarNomeVariasVezes(){
    let nome = prompt("Digite")
    for(let index = 0; index < 3; index = index + 1){
        console.log(nome)
    }
}
function exercicio03ContarAteDez(){
    for(let index = 1; index <= 10; index = index + 1){
        console.log(index)
    }
}
function exercicio04ContarRegressivo(){
    for(let index = 5; index >= 1; index = index - 1){
        console.log(index)
    }
}
function exercicio05SomarNumeros(){
    for(let index = 1; index <= 5; index = index + 1){
        total = 5 + index;
        console.log(total)
    }
}
function exercicio06MostrarNumerosPares(){
    for(let index = 0; index <= 10; index = index + 2){
        console.log(index)
    }
}
function exercicio07MostrarNumerosImpares(){
    for(let index = 1; index <= 9; index = index + 2){
        console.log(index)
    }
}
function exercicio08SolicitarTresNomes(){
    for(let index = 0; index < 3; index = index + 1){
        let nome = prompt("Digite o nome")
        console.log(nome)
    }
}
function exercicio09SomarTresIdades(){
    let total = 0;
    for(let index = 0; index < 3; index = index + 1){
        let idade = parseInt(prompt("Digite a idade"))
        total = total + idade;
    }
    console.log(total)
}
function exercicio10CalcularMediaSimples(){
    let total = 0;
    for(let index = 0; index < 4; index = index + 1){
        let nota = parseInt(prompt("Digite a nota (0-10)"))
        total = total + nota;
    }
    media = total / 4;
    console.log(media)
}
function exercicio11ContarMaioresDeIdade(){
    let maiores = 0;
    for(let index = 0; index < 5; index = index + 1){
        let idade = parseInt(prompt("Digite a idade"));
        if (idade >= 18){
            maiores = maiores + 1;
        }
    }
    console.log(maiores)
}
function exercicio12MostrarTabuada(){
    let numero = parseInt(prompt("Digite número"))
    for(let index = 1; index <= 10; index = index + 1){
        tabuada = numero * index;
        console.log(numero + " * " + index + " = " + tabuada)
    }

}
function exercicio13ContarLetrasNomes(){
    for(let index = 1; index <= 5; index = index + 1){
        let nome = prompt("Digite seu nome");
        
    }
}