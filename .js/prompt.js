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