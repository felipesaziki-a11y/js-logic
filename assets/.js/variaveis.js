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