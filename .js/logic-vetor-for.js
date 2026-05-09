function exemplo03(){
    let colaboradores = [];
    let horas = [];
    let valores = [];
    let salarios = [];
    let quantidade = parseInt(prompt("Digite a quantidade de colaboradores."));
    for(let i = 0; i < quantidade; i += 1){
        let nome = prompt("Digite o nome do colaborador");
        let quantidadeHora = parseInt(prompt("Digite a quantidade de horas"));
        let valorHora = parseFloat(prompt("Digite o valor por hora"));

        colaboradores.push(nome);
        horas.push(quantidadeHora);
        valores.push(valorHora);
    }
    for(let i = 0; i < quantidade; i += 1){
        let quantidadeHora = horas[i];
        let valorHora = valores[i];
        let salario = quantidadeHora * valorHora;
        salarios.push(salario);
    }
    let maiorValorHora = 0
    for(let i = 1; i < quantidade; i += 1){
        let valorHora = horas[i];
        if(valorHora > maiorValorHora){
            maiorValorHora = valorHora;
        }
    }
    let maiorSalario = 0;
    let colabMaiorSalario = "";
    for(let i = 0; i < quantidade; i += 1){
        let salario = salarios[i];
        if (salario > maiorSalario){
            maiorSalario = salario;
            colabMaiorSalario = colaboradores[i];
        }
    }
    let menorNome = "1111111111111111111111111111111111111111111111111";
    for(let i = 0; i < quantidade; i += 1){
        let nome = colaboradores[i];
        if(nome.length < menorNome.length){
            menorNome = nome
        }
    }
    alert("Maior valor pago: R$" + maiorValorHora + 
        "\nColaborador com maior salário: " + colabMaiorSalario + 
        "\nColaborador com menor nome: " + menorNome
    )
}
function exemploMenu(){
    debugger
    let numeros = [];
    let opcao = parseInt(prompt(`1 - Cadastrar
2 - Listar todos
3 - Apresentar maior
10 - Sair`));
        while(opcao !== 10){
            if(opcao === 1){
                let numero = parseInt(prompt("Digite um número"));
                numeros.push(numero)
                alert("Número cadastrado com sucesso")
            } else if (opcao === 2){
                let texto = "Números cadastrados:\n"
                for(let i = 0; i < numeros.length; i += 1){
                    let numero = numeros[i];
                    texto = texto + numero + "\n";
                }
                alert(texto)
            } else if (opcao === 3){
                let maiorNumero = 0
                for (let i = 0; i < numeros.length; i += 1){
                    if (numeros[i] > maiorNumero){
                        maiorNumero = numeros[i]
                    }
                }
                alert("O maior número é " + maiorNumero)
            }
            opcao = parseInt(prompt(`1 - Cadastrar
2 - Listar todos
3 - Apresentar maior
10 - Sair`));
        }
}
function exercicio01(){
    let nomes = [];
    let texto = "";
    for(let i = 0; i < 3; i += 1){
        let nome = prompt("Digite um nome três vezes");
        nomes.push(nome);
        texto = texto + nomes[i] + "\n";
    }
    alert(texto)
}
function exercicio02(){
    let idades = [];
    let texto = "";
    for(let i = 0; i < 4; i += 1){
        let idade = parseInt(prompt("Digite uma idade quatro vezes"));
        idades.push(idade);
        texto = texto + idades[i] + " anos\n";
    }
    alert(texto)
}
function exercicio03(){
    let cidades = [];
    let texto = "";
    for(let i = 0; i < 5; i += 1){
        let cidade = prompt("Digite uma cidade cinco vezes");
        cidades.push(cidade);
        texto = texto + cidades[i] + "\n";
    }
    alert(texto);
    alert("Número cadastrado: " + cidades.length)
}
function exercicio04(){
    let numeros = [];
    for(let i = 0; i < 5; i += 1){
        let numero = parseInt(prompt("Digite 5 números"));
        numeros.push(numero)
    }
    let soma = 0;
    for(let i = 0; i < 5; i += 1){
        soma = soma + numeros[i]
    }
    alert("Soma dos números: " + soma)
}
function exercicio05(){
    let notas = [];
    for(i = 0; i < 4; i += 1){
        let nota = parseInt(prompt("Digite as 4 notas do aluno"));
        notas.push(nota)
    }
    let somaNotas = 0;
    for(i = 0; i < 4; i += 1){
        somaNotas = somaNotas + notas[i]
    }
    let mediaNotas = somaNotas / 4
    alert("Média das notas: " + mediaNotas.toFixed(2))
}
function exercicio06(){
    let produtos = [];
    for(let i = 0; i < 4; i += 1){
        let produto = prompt("Digite 4 produtos");
        produtos.push(produto)
    }
    alert("- " + produtos[0] +
        "\n- " + produtos[1] +
        "\n- " + produtos[2] +
        "\n- " + produtos[3]
    )
    produtos[2] = prompt("Edite o terceiro produto");
    alert("- " + produtos[0] +
        "\n- " + produtos[1] +
        "\n- " + produtos[2] +
        "\n- " + produtos[3]
    )
}
function exercicio07(){
    let temperaturas = [];
    for(let i = 0; i < 5; i += 1){
        let temperatura = parseInt(prompt("Digite uma temperatura"));
        temperaturas.push(temperatura);
    }
    let maiorTemp = 0;
    for(let i = 0; i < 5; i += 1){
        if (temperaturas[i] > maiorTemp){
            maiorTemp = temperaturas[i]
        }
    }
    alert("Maior temperatura: " + maiorTemp + "C")
}
function exercicio08(){
    let precos = [];
    for(let i = 0; i < 4; i += 1){
        let preco = parseFloat(prompt("Digite um preço"));
        precos.push(preco);
    }
    let menorPreco = 99999;
    for(let i = 0; i < 4; i += 1){
        if (precos[i] < menorPreco){
            menorPreco = precos[i]
        }
    }
    alert("Menor preço: R$" + menorPreco)
}
function exercicio09(){
    let numeros = [];
    for(let i = 0; i < 6; i += 1){
        let numero = parseFloat(prompt("Digite um número"));
        numeros.push(numero);
    }
    let pares = 0;
    for(let i = 0; i < 6; i += 1){
        if (numeros[i] % 2 == 0){
            pares = pares + 1
        }
    }
    alert("Há " + pares + " pares")
}