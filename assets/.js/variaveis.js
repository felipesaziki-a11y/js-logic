function exemploMensagem(){
    alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
}
function exemploString(){
    let name = "Elias"; //Criando variável
    let surname = "Otto8";
    surname = "Otto"; //Altera valor da variável
    alert(name) //Apresenta variável
    alert(surname); 
}
function exemploStringConcatenacao(){
    let produtoNome = "Sabão";
    let marcaProduto = "Omo";
    let text = produtoNome + " " + marcaProduto; //Concatenação: junta uma string (texto) com outra coisa;
                                                 //Concatenação do nomeProduto e o espaço
    alert(text);
}
function exemploNumeroInteiro(){
    let product = "PC Gamer";
    let quantity = 16;
    let pentesRam = 4;
    let pentesRamBuy = quantity * pentesRam;
    //"\n" quebra linha
    alert("Produto: " + product + "\nQuantidade: " + quantity + "\nMemória Ram: " + pentesRam + "\nPentes Por PC: " + pentesRamBuy);
}
function exemploFloat(){
    let endereco = "Rua 7"
    let largura = 12.20;
    let comprimento = 45.50;
    let metroQuadrado = largura * comprimento;
    alert("Metros do Terreno: " + metroQuadrado)
}
function calcularSalario(){
    let colaborador = "Judith";
    let email = "judithsila@gmail.com";
    let valorHora = 160.30;
    let horasPorMes = 50;
    let donate = 3500.98;

    let salarioBruto = valorHora * horasPorMes
    let salarioLiq = salarioBruto + donate
    alert(
        "Colaborador: " + colaborador + 
        "\nEmail: " + email +
        "\nValor por Hora: R$" + valorHora.toFixed(2) +
        "\nHoras por mês: " + horasPorMes +
        "\nSalário bruto: R$" + salarioBruto.toFixed(2) +
        "\nDonate: R$" + donate.toFixed(2) + 
        "\nSalário líquido: R$" + salarioLiq.toFixed(2)
    )
}