function exemploToLowerCase(){
    let nome = prompt("Digite nome")
    let nomeMinusculo = nome.toLowerCase();
    alert(nomeMinusculo);
}

function exemploToUpperCase(){
    let nome = prompt("Digit nome")
    let nomeMaiusculo = nome.toUpperCase();
    alert(nomeMaiusculo)
}

function exemploLength(){
    let text = prompt("Digite um texto")
    let textLong = text.length;
    alert(textLong)
}
function exemploReplace(){
    let texto = prompt("Digite texto");
    texto = texto.replaceAll("A", "01000001");
    texto = texto.replaceAll("B", "01000010");
    texto = texto.replaceAll("C", "01000011");
    texto = texto.replaceAll("D", "01000100");
    texto = texto.replaceAll("E", "01000101");
    texto = texto.replaceAll("F", "01000110");
    texto = texto.replaceAll("G", "01000111");
    texto = texto.replaceAll("H", "01001000");
    texto = texto.replaceAll("I", "01001001");
    texto = texto.replaceAll("J", "01001010");
    texto = texto.replaceAll("K", "01001011");
    texto = texto.replaceAll("L", "01001100");
    texto = texto.replaceAll("M", "01001101");
    texto = texto.replaceAll("N", "01001110");
    texto = texto.replaceAll("O", "01001111");
    texto = texto.replaceAll("P", "01010000");
    texto = texto.replaceAll("Q", "01010001");
    texto = texto.replaceAll("R", "01010010");
    texto = texto.replaceAll("S", "01010011");
    texto = texto.replaceAll("T", "01010100");
    texto = texto.replaceAll("U", "01010101");
    texto = texto.replaceAll("V", "01010110");
    texto = texto.replaceAll("W", "01010111");
    texto = texto.replaceAll("X", "01011000");
    texto = texto.replaceAll("Y", "01011001");
    texto = texto.replaceAll("Z", "01011010");
    texto = texto.replaceAll("a", "01011011");
    texto = texto.replaceAll("b", "01011100");
    texto = texto.replaceAll("c", "01011101");
    texto = texto.replaceAll("d", "01011110");
    texto = texto.replaceAll("e", "01011111");
    texto = texto.replaceAll("f", "01100000");
    texto = texto.replaceAll("g", "01100001");
    texto = texto.replaceAll("h", "01100010");
    texto = texto.replaceAll("i", "01100011");
    texto = texto.replaceAll("j", "01100100");
    texto = texto.replaceAll("k", "01100101");
    texto = texto.replaceAll("l", "01100110");
    texto = texto.replaceAll("m", "01100111");
    texto = texto.replaceAll("n", "01101000");
    texto = texto.replaceAll("o", "01101001");
    texto = texto.replaceAll("p", "01101010");
    texto = texto.replaceAll("q", "01101011");
    texto = texto.replaceAll("r", "01101100");
    texto = texto.replaceAll("s", "01101101");
    texto = texto.replaceAll("t", "01101110");
    texto = texto.replaceAll("u", "01101111");
    texto = texto.replaceAll("v", "01110000");
    texto = texto.replaceAll("w", "01110001");
    texto = texto.replaceAll("x", "01110010");
    texto = texto.replaceAll("y", "01110011");
    texto = texto.replaceAll("z", "01110100");
    texto = texto.replaceAll("'", "00100111")
    alert(texto)
}
function removerEspaco(){
    let texto = prompt(" ");
    let textoSpaceless = texto.trim();
    alert(textoSpaceless)
}
function verificarSeComecaCom(){
    let texto = prompt("Asasa");
    if (texto.toUpperCase().startsWith("P") === true){
        alert("Acesso aceito")
    } else {
        alert("Acesso negado")
    }
}
function nomeIndice(){
    let nome = prompt("Digite nome e sobrenome");
    let indiceNome = nome.indexOf(" ");
    let primeiroNome = nome.slice(0, indiceNome);
    let sobrenome = nome.slice (indiceNome, 100)
    console.log("Nome completo: " + nome)
    console.log("Primeiro nome: " + primeiroNome)
    console.log("Sobrenome: " + sobrenome)
}
function descobrirIndiceCaracter(){
    let cartao = "3010 2039 2019 2030";
    let indice1Espaco = cartao.indexOf(" ")
    let primeiraParteCartao = cartao.slice(0, indice1Espaco)
    console.log("Cartão: " + cartao);
    console.log("Primeira parte: " + primeiraParteCartao)
}
function verCpf(){
    let cpf = prompt("Digite CPF"); // 61193
    console.log("CPF: " + cpf.padStart(8, "*"))
}
function g1(){
    let nome = prompt("Digite seu nome completo");
    let diaNasc = parseInt(prompt("Dia de nascimento"));
    let mesNasc = parseInt(prompt("Mês de nascimento"));
    let anoNasc = parseInt(prompt("Ano de nascimento"));
    let genero = prompt("Gênero");
    let indiceNome = nome.split(" ")
    let primeiroNome = indiceNome[0];
    let sobrenome1 = indiceNome[1];
    let sobrenome2 = indiceNome[2];
    let sobrenome3 = indiceNome[3];
    let sobrenome4 = indiceNome[4];
    let sobrenome5 = indiceNome[5];
    alert("Nome: " + primeiroNome + 
        "\nSobrenome: " + sobrenome1 + " " + sobrenome2 + " " + sobrenome3 + " " + sobrenome4 +
        "\nData de Nascimento: " + diaNasc + "/" + mesNasc + "/" + anoNasc +
        "\nGênero: " + genero
    )
}
function exemploRepeat(){
    
}