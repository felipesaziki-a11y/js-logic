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
        console.log(nome + " tem " + nome.length)
    }
}
function exercicio14MaiorNumero(){
    let maiorN = 0;
    for(let index = 1; index <= 5; index = index + 1){
        let number = parseInt(prompt("Digite número"));
        if (number > maiorN){
            maiorN = number
        }
    }
    console.log(maiorN)
}
function exercicio15MenorNumero(){
    let menorN = 9999;
    for(let index = 1; index <= 5; index = index + 1){
        let number = parseInt(prompt("Digite número"));
        if (number < menorN){
            menorN = number
        }
    }
    console.log(menorN)
}
function exercicio16ContarPositivos(){
    let maiorZero = 0;
    for(let index = 0; index <= 5; index = index + 1){
        let number = parseInt(prompt("Digite número"));
        if (number > maiorZero){
            maiorZero = maiorZero + 1
        }
    }
    console.log("Quantidade números positivos: " + maiorZero)
}
function exercicio17SomarPares(){
    debugger
    for(let index = 0; index <= 5; index = index + 1){
        let somar1 = 1;
        let somar2 = 1;
        let n1 = parseInt(prompt("Digite o primeiro número"));
        if (n1 % 2 === 0){
            somar1 = somar1 + n1 - 1
        }
        let n2 = parseInt(prompt("Digite o segundo número"))
        if (n2 % 2 === 0){
            somar2 = somar2 + n2 - 1
        }
        if (somar1 % 2 === 0 && somar2 % 2 === 0){
            result = somar1 + somar2
            console.log(somar1 + " + " + somar2 + " = " + result)
        } else {
            console.log("Não há números pares / Há apenas um número par")
        }
    }
}
function exercicio18MostrarMultiplosDeTres(){
    for (let index = 1; index <= 30; index = index + 1){
        let multiplo = index;
        resultado = 3 * multiplo;
        console.log(resultado)
    }
}
function exercicio19CadastrarProdutos(){
    for (let index = 1; index <= 3; index = index + 1){
        let produto = prompt("Digite um produto")
    }
    console.log("Produtos cadastrados com sucesso")
}
function exercicio20RelatorioSimples(){
    let somaIdade = 0;
    let cadastrados = 0;
    for (let index = 1; index <= 3; index = index + 1){
        let nome = prompt("Digite seu nome");
        let idade = parseInt(prompt("Digite sua idade"));
        somaIdade = somaIdade + idade;
        cadastrados = cadastrados + 1;
    }
    mediaIdade = somaIdade / cadastrados;
    console.log("Número de pessoas cadastradas: " + cadastrados + 
        "\nSoma das idades: " + somaIdade +
        "\nMédia das idades: " + mediaIdade
    )
}
function exercicio21MostrarNumerosParesIntervalo(){
    let inicio = parseInt(prompt("Digite o número de início"))
    let fim = parseInt(prompt("Digite o número de fim"))
    let turnos = fim - inicio
    let somaTotal = 0
    for (let index = 0; index < turnos; index = index + 1){ 
        while (somaTotal === 0){
            if (inicio % 2 === 0){
            console.log(inicio)
            }
            somaTotal = inicio + 1
        }
        if (somaTotal % 2 === 0){
            console.log(somaTotal)
        }
        somaTotal = somaTotal + 1;
    }
}
function exercicio22SomarNumerosIntervalo(){
    debugger
    let inicio = parseInt(prompt("Digite o número de início"))
    let fim = parseInt(prompt("Digite o número de fim"))
    let turnos = fim - inicio
    let somaTotal = 0
    let addition = somaTotal + 1
    for (let index = 0; index < turnos; index = index + 1){
        while (somaTotal <= 0 && addition <= 1){
        somaTotal = inicio;
        addition = inicio + 1;
        }
        somaTotal = somaTotal + addition;
        addition = addition + 1;
    }
    console.log(somaTotal)
}
function exercicio23ContarNumerosNegativos(){
    let quantidadeNegativo = 0;
    for (let index = 0; index < 6; index = index + 1){
        let numero = parseInt(prompt("Digite um número"));
        if (numero <= -1){
            quantidadeNegativo = quantidadeNegativo + 1;
        }
    }
    console.log(quantidadeNegativo + " números negativos")
}
function exercicio24CalcularMediaAlturas(){
    let totalAltura = 0.00
    for (let index = 0; index < 5; index = index + 1){
        let altura = parseFloat(prompt("Digite a altura da pessoa"));
        totalAltura = totalAltura + altura;
    }
    mediaAltura = totalAltura / 5;
    console.log(mediaAltura + " é a média de alturas das pessoas")
}
function exercicio25ContarNotasAcimaSete(){
    let totalAcima7 = 0;
    for (let index = 0; index < 8; index = index + 1){
        let nota = parseInt(prompt("Digite suas notas"));
        if (nota >= 7){
            totalAcima7 = totalAcima7 + 1;
        }
    }
    console.log("Você tem " + totalAcima7 + " notas acima da média.")
}
function exercicio26MaiorEMenorNumero(){
    debugger
    let maiorNumero = 0;
    let menorNumero = 999;
    for (let index = 0; index < 7; index = index + 1){
        let numero = parseInt(prompt("Digite um número"));
        if (numero > maiorNumero){
            maiorNumero = numero;
        } else if (numero < menorNumero){
            menorNumero = numero
        }
    }
    console.log("O maior número é " + maiorNumero + ", e o menor número é " + menorNumero)
}
function exercicio27SomarIdadesMaioresDeIdade(){
    let somaMaiorIdade = 0;
    for (let index = 0; index < 5; index = index + 1){
        let idade = parseInt(prompt("Digite a idade"));
        if (idade >= 18){
            somaMaiorIdade = somaMaiorIdade + idade;
        }
    }
    console.log("Soma das idades: " + somaMaiorIdade);
}
function exercicio28ContarHomensEMulheres(){
    let homens = 0;
    let mulheres = 0;
    for(let index = 0; index < 6; index = index + 1){
        let nome = prompt("Digite seu nome");
        let genero = prompt("Digite seu gênero \n[F] / [M] / [O]");
        if (genero.toLowerCase() === "m"){
            homens = homens + 1;
        } else if (genero.toLowerCase() === "f"){
            mulheres = mulheres + 1;
        }
    }
    console.log("Quantidade de homens: " + homens + "\nQuantidade de mulheres: " + mulheres)
}
function exercicio29ValidarNota(){
    let somaNota = 0;
    for(let index = 0; index < 6; index = index + 1){
        let nota = parseInt(prompt("Digite a nota"));
        while ((nota < 0) || (nota > 10)){
            nota = parseInt(prompt("Nota inválida, digite a nota novamente"))
        }
        somaNota = somaNota + nota
    }
    mediaNota = somaNota / 6;
    console.log("Média das notas \n" + mediaNota)
}
function exercicio30TabuadasCompletas(){
    let numero = 1;
    let multiplicador = 1;
    for(let index = 0; index < 5; index = index + 1){
        for(let index = 1; index <= 10; index = index + 1){
        console.log(numero * multiplicador)
        numero = numero + 1;
        if (numero === 11 || numero === 21 || numero === 31 || numero === 41){
            multiplicador = multiplicador + 1;
            numero = 1;
        }
        }
    }
}
function exercicio31ContarAprovadosReprovados(){
    let text = "";
    for(let index = 0; index < 6; index = index + 1){
        let status = "Neutro";
        nome = prompt("Digite o nome");
        let nota = parseInt(prompt("Digite a nota"))
        if (nota >= 7){
            status = "Aprovado"
        } else {
            status = "Reprovado"
        }
        text = text + "Nome: " + nome + "\nNota: " + nota + "\nStatus: " + status + "\n-----------\n";
    }
    console.log(text)
}
function exercicio32SomarValoresPositivos(){
    let soma = 0;
    for(let index = 0; index < 8; index = index + 1){
        let numero = parseInt(prompt("Digite número"));
        if (numero > 0){
            soma = soma + numero
        }
    }
    console.log(soma)
}
function exercicio33EncontrarNomeMaisLongo(){
    let maiorNome = "";
    for(let index = 0; index < 6; index = index + 1){
        let nome = prompt("Digite um nome").trim(" ");
        if (nome.length > maiorNome.length){
            maiorNome = nome
        }
    }
    console.log("O maior nome é " + maiorNome + " com " + maiorNome.length + " letras")
}
function exercicio34CalcularFatorial(){
    let numero = parseInt(prompt("Digite um número"));
    let fatorial = 1;
    for(let i = 1; i <= numero; i = i + 1){
        fatorial = fatorial * i;
    }
    console.log(fatorial)
}
function exercicio35ContagemRegressivaPersonalizada(){
    for(let i = parseInt(prompt("Digite um número")); i > 0; i = i - 1){
        alert(i)
    }
    console.log("Time out")
}
function exercicio36ContarNotasEmFaixas(){
    let zeroQuatro = 0;
    let cincoSeis = 0;
    let seteOito = 0;
    let noveDez = 0;
    for(let i = 0; i < 8; i = i + 1){
        let nota = parseInt(prompt("Digite a nota"));
        if (nota >= 0 && nota <= 4){
            zeroQuatro = zeroQuatro + 1;
        } else if (nota >= 5 && nota <= 6){
            cincoSeis = cincoSeis + 1;
        } else if (nota >= 7 && nota <= 8){
            seteOito = seteOito + 1;
        } else {
            noveDez = noveDez + 1;
        }
    }
    console.log("Notas\n0-4: " + zeroQuatro + "\n5-6: " + cincoSeis + "\n7-8: " + seteOito + "\n9-10: " + noveDez)
}