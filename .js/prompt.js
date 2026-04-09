function exemplo1(){
    let nome = prompt("Digite seu nome:");
    let sobrenome = prompt("Digite seu sobrenome:");
    let nomeCompleto = (nome + " " + sobrenome);
    alert(nomeCompleto);
}
function conversaoStringInt(){
    let numero1 = parseInt("8"); //parseInt converte String em Int
    let numero2 = parseInt("12");
    let soma = numero1 + numero2;
    alert ("soma: " + soma)
}
function conversaoStringIntAlt(){
    let numero1 = parseInt(prompt("Digite seu número 1:"));
    let numero2 = parseInt(prompt("Digite seu número 2:"));
    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}
function conversaoStringFloat(){
    let quantidadeHora = parseInt(prompt("Digite a quantidade de horas:"));
    let valorHora = parseFloat(prompt("Digite o valor por hora:"));
    let salarioBruto = (valorHora * quantidadeHora);
    alert("Horas trabalhadas: " + quantidadeHora + "h" + "\n" +
        "Valor por hora: " + "R$" + valorHora + ",00" + "\n" +
        "Salário bruto: " + "R$" + salarioBruto + ",00"
    );
}
function exemplo2(){
    let nome = prompt("Nome do atleta");
    let altura = parseFloat(prompt("Digite a altura"));
    let peso = parseFloat(prompt("Digite o peso"));
    let imc = peso / (altura * altura);
    alert("Nome: " + nome + "\n"
        + "Altura: " + altura + "m" + "\n"
        + "Peso: " + peso + "kg" + "\n"
        + "IMC: " + imc.toFixed(2) + "kg"
    )
}
function exemplo3(){
    let anoNasc = parseInt(prompt("Ano de nascimento"));
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNasc;
    alert("Idade: " + idade + " anos")
}
function conta(){
    let dia = parseInt(prompt("Digite dia"));
    let mes = parseInt(prompt("Digite mês"));
    let ano = parseInt(prompt("Digite ano"));
    let diaAt = new Date().getDay();
    let mesAt = new Date().getMonth();
    let dataDeNascimento = (dia + "/" + mes + "/" + ano)
    if (ano <= 2018 && mes <= mesAt && dia <= diaAt) {
        alert(dataDeNascimento + "\n" + "Olá")
    } else {
        alert(dataDeNascimento + "\n" + "Acesso negado")
    }
}
function sad(){
    let humor = parseInt(prompt("Seu humor de 1 à 10"));
    if (humor >= 6 && humor <= 10) {
        categoria = "Feliz :)"
    } else if (humor <= 5 && humor >= 1) {
        categoria = "Triste :("
    } else {
        alert("Insira um valor compatível")
    } 
    alert(categoria)
}

function exemploLoja(){
    let nome1 = prompt("Digite nome do jogo");
    let categoria1 = prompt("Digite a categoria do jogo");
    let precoBase1 = 200.99;

    let precoComDesconto1 = 0;
    let percentualDesconto1 = 0;
    let precoDesconto1 = 0;

    let nome2 = prompt("Digite nome do jogo 2");
    let categoria2 = prompt("Digite a categoria 2");
    let precoBase2 = 250.99;

    let precoComDesconto2 = 0;
    let percentualDesconto2 = 0;
    let precoDesconto2 = 0;

    if ((categoria1 === "Moba") || (categoria1 === "Fps")){
        percentualDesconto1 = 0.25;
        precoDesconto1 = precoBase1 * percentualDesconto1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    } else if ((categoria1 === "Aventura") || (categoria1 === "Rpg")){
        percentualDesconto1 = 0.20;
        precoDesconto1 = percentualDesconto1 * precoBase1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    } else if ((categoria1 === "Roguelike") || (categoria1 === "Soulslike")){
        percentualDesconto1 = 0.32;
        precoDesconto1 = precoBase1 * percentualDesconto1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    }

        if ((categoria2 === "Moba") || (categoria2 === "Fps")){
        percentualDesconto2 = 0.25;
        precoDesconto2 = precoBase2 * percentualDesconto2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    } else if ((categoria2 === "Aventura") || (categoria2 === "Rpg")){
        percentualDesconto2 = 0.20;
        precoDesconto2 = percentualDesconto2 * precoBase2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    } else if ((categoria2 === "Roguelike") || (categoria2 === "Soulslike")){
        percentualDesconto2 = 0.32;
        precoDesconto2 = precoBase2 * percentualDesconto2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    }
    
    let juros = 0.77;
    let precoTotal = precoComDesconto1 + precoComDesconto2 + juros;
    alert("Nome: " + nome1 + "\n"
        + "Categoria: " + categoria1 + "\n"
        + "Preço: " + "R$" + precoComDesconto1.toFixed(2)
    )
    alert("Nome: " + nome2 + "\n"
        + "Categoria: " + categoria2 + "\n"
        + "Preço: " + "R$" + precoComDesconto2.toFixed(2)
    )
    alert("Resumo de preço: " + "R$" + precoTotal)
}

/* Tabela 
V V = V
V F = F
F V = F
F F = F
*/

/* =: Igual
==: Igual a tipo
===: Igual a número e tipo
<=: Menor ou igual
>=: Maior ou igual
<: Menor que
>: Maior que
*/