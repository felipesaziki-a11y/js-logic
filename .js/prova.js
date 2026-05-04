function sistemaCadastroValidado(){
    let quantidade = parseInt(prompt("Digite a quantidade de registros"));
    let atendentes = 0, vendedores = 0, gerentes = 0;
    let somaSalario = 0;
    let maiorSalario = 0, menorSalario = 9999;
    let maiorEmpregado = "", menorEmpregado = "";
    let maiores = 0, menores = 0;
    for (let i = 0; i < quantidade; i = i + 1){
        let nome = prompt("Digite o nome do funcionário").trim();
        while ((nome.length = 0) || (nome.length < 3)){
            nome = prompt("Nome inválido\nDigite o nome do funcionário novamente");
        }
        let idade = parseInt(prompt("Digite a idade do funcionário"));
        while ((idade < 16) || (idade > 100)){
            idade = parseInt(prompt("Idade inválida, precisa ter pelo menos 16 anos e menos de 100 anos\nDigite a idade do funcionário novamente"));
        }
        if (idade >= 18){
            maiores = maiores + 1;
        } else if (idade < 18){
            menores = menores + 1;
        }
        let cargo = prompt("Digite o cargo do funcionário");
        while ((cargo.toLowerCase() ==! "atendente") || (cargo.toLowerCase() ==! "gerente") || (cargo.toLowerCase ==! "vendedor")){
            cargo = prompt("Cargo inválido\nDigite o cargo do funcionário novamente");
        }
        if (cargo.toLowerCase() === "atendente"){
            atendentes = atendentes + 1;
        } else if (cargo.toLowerCase() === "vendedor"){
            vendedores = vendedores + 1;
        } else if (cargo.toLowerCase() === "gerente"){
            gerentes = gerentes + 1;
        }
        let salario = parseFloat(prompt("Digite o salário do funcionário"));
        while (salario <= 0){
            salario = parseFloat(prompt("Salário não pode ser menor que R$0\nDigite o salário do funcionário novamente"))
        }
        if (salario > maiorSalario){
            maiorSalario = salario;
            maiorEmpregado = nome;
        }
        if (salario < menorSalario){
            menorSalario = salario;
            menorEmpregado = nome;
        }
        somaSalario = somaSalario + salario;
    }
    mediaSalario = somaSalario / quantidade;
    alert("Quantidade de funcionários registrados: " + quantidade +
        "\nQuantidade de funcionários gerentes: " + gerentes +
        "\nQuantidade de funcionários atendentes: " + atendentes +
        "\nQuantidade de funcionários vendedores: " + vendedores +
        "\nQuantidade de funcionários maiores de idade: " + maiores +
        "\nQuantidade de funcionários menores de idade: " + menores +
        "\nSoma total dos salários: " + somaSalario +
        "\nMédia salarial: " + mediaSalario.toFixed(4) +
        "\nFuncionário com maior salário: " + maiorEmpregado + " com R$" + maiorSalario +
        "\nFuncionário com menor salário: " + menorEmpregado + " com R$" + menorSalario
    )
}