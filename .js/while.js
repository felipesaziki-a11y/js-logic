// Se index = 0 + 1 = 1, logo se index = index + 1 = 2

function exemplo01(){
    // mostrar mensagem X vezes. Breakpoint
    debugger
    let index = 0;
    while (index <= 2){
        let numero = parseInt(prompt("Digite número"));
        index = index + 1;
        numero = numero * 2;
    } 
}
function dadosPaciente(){
    let index = 0;

    while (index < 3){
        let nome = prompt("Digite seu nome").trim();
        let anoNasc = parseInt(prompt("Digite seu ano de Nascimento"));
        let mesNasc = parseInt(prompt("Digite seu mês de Nascimento"));
        let diaNasc = parseInt(prompt("Digite seu dia de Nascimento"));
        idade = 2026 - anoNasc
        index = index + 1
        alert("Paciente " + index + 
            "\nNome: " + nome + 
            "\nIdade: " + idade + 
            "\nData de Nascimento: " + diaNasc + "/" + mesNasc + "/" + anoNasc +
            "\n")
    }
}

function clock(){
    let index = 10;
    while (index >= 0){
        console.log(index);
        index = index - 1;
    }
}
function calcJogo(){
    let index = 0;
    let total = 0;

    while (index < 3){
        let nome = prompt("Nome do jogo");
        let preco = parseFloat(prompt("Digite o preço"));
        total = total + preco;
        index = index + 1;
    }
    alert("Preco total: R$" + total)
}
function findQuantity(){
    let index = 0;
    let minorsQuantity = 0;
    while (index < 3){
        let nome = prompt("Digite nome");
        let idade = parseInt(prompt("Digite idade"));
        if (idade <= 17){
        minorsQuantity = minorsQuantity + 1;
    }
    index = index + 1;
    }
    alert("Quantidades de menores de 18 anos: " + minorsQuantity)
}
function maiorAltura(){
    debugger
    let index = 0;
    let maiorAltura = 0;
    let segMaiorAltura = 0;
    let tercMaiorAltura = 0;
    while(index < 3){
        let altura = parseFloat(prompt("Digite a altura"));
        if (altura < maiorAltura && altura < segMaiorAltura){
            tercMaiorAltura = altura
        } else if (altura < maiorAltura){
            segMaiorAltura = altura
        } else if (altura > maiorAltura){
            maiorAltura = altura
        }
        index = index + 1
    }
    alert(maiorAltura + "\n" + segMaiorAltura + "\n" + tercMaiorAltura)
}
function menorVic(){
    let index = 0;
    let menorNumVic = 99;

    while (index < 3){
        let nome = prompt("Digite nome")
        let numVic = parseInt(prompt("Digite quantidade de vitórias"))
        if (numVic < menorNumVic){
            menorNumVic = numVic;
        }
        index = index + 1;
    }
    alert("Menor quantidade de vitórias: " + menorNumVic)
}
function maiorBonificacao(){
    let index = 0;
    let maiorBonificacao = 0;
    let colabMaiorBoni = 0;

    while (index < 3){
    let collab = prompt("Nome do colaborador");
    let bonificacao = parseFloat(prompt("Digite Bonificação"));

    if (bonificacao > maiorBonificacao){
        maiorBonificacao = bonificacao
        colabMaiorBoni = collab
    }
    index = index + 1;
    }
    alert(colabMaiorBoni)
}