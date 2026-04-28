function exemplo01(){
    let games = [];
    games.push("God of War Trilogy Remake");
    games.push("The Last of Us Remastered");
    games.push("Persona 5 Royale");
    games[2] = "Persona 5 Royal";
    console.log("Quantidade: " + games.length +
        "\n1: " + games[0] +
        "\n2: " + games[1] +
        "\n3: " + games[2]
    )
}
function exemplo02(){
    let paciente = prompt("Digite o nome do Paciente") ;
    let sintomas = [];
    for(let i = 0; i < 3; i = i + 1){
    sintomas.push(prompt("Digite os sintomas do paciente"))

}
    alert("Nome do paciente: " + paciente + "\nSintomas: " + sintomas[0] + ", " + sintomas[1] + ", " + sintomas[2])
}
function exercicio01(){
    let perfumes = [];
    perfumes.push("Perfume de Morango, ");
    perfumes.push("Perfume de Citro, ");
    perfumes.push("Perfume de Banana, ");
    perfumes.push("Perfume de Jasmim");
    console.log("Perfumes: " + perfumes[0] + perfumes[1] + perfumes[2] + perfumes[3]);
    perfumes[1] = "Perfume de Citrus, ";
    perfumes.push("Perfume de Sangria");
    perfumes[3] = "Perfume de Jasmim, "
    perfumes.splice(0, 1);
    console.log("Perfumes: " + perfumes[0] + perfumes[1] + perfumes[2] + perfumes[3]);
}
function exercicio02(){
    let materias = [];
    let cargaHoraria = [];
    let valoresHora = [];
    materias.push("Matemática");
    cargaHoraria.push(parseInt(prompt("Digite carga horária")));
    valoresHora.push(parseFloat(prompt("Digite o valor por hora")));
    materias.push("Inglês");
    cargaHoraria.push(parseInt(prompt("Digite carga horária")));
    valoresHora.push(parseFloat(prompt("Digite o valor por hora")));
    materias.push("Produção Textual");
    cargaHoraria.push(parseInt(prompt("Digite carga horária")));
    valoresHora.push(parseFloat(prompt("Digite o valor por hora")));
    console.log("Matéria: " + materias[0] + 
        "\nCarga Horária: " + cargaHoraria[0] + 
        "\nValor por Hora: R$" + valoresHora[0] +
        "\n\nMatéria: " + materias[1] + 
        "\nCarga Horária: " + cargaHoraria[1] + 
        "\nValor por Hora: R$" + valoresHora[1] +
        "\n\nMatéria: " + materias[2] + 
        "\nCarga Horária: " + cargaHoraria[2] + 
        "\nValor por Hora: R$" + valoresHora[2]
    )
    materias[1] = "Biologia";
    cargaHoraria[0] = 185;
    console.log("Matéria: " + materias[0] + 
        "\nCarga Horária: " + cargaHoraria[0] + 
        "\nValor por Hora: R$" + valoresHora[0] +
        "\n\nMatéria: " + materias[1] + 
        "\nCarga Horária: " + cargaHoraria[1] + 
        "\nValor por Hora: R$" + valoresHora[1] +
        "\n\nMatéria: " + materias[2] + 
        "\nCarga Horária: " + cargaHoraria[2] + 
        "\nValor por Hora: R$" + valoresHora[2]
    )
}
function exercicio03(){
    let destinosTuristicos = [];
    destinosTuristicos.push(prompt("Digite 4 destinos turísticos"));
    destinosTuristicos.push(prompt("Digite 4 destinos turísticos"));
    destinosTuristicos.push(prompt("Digite 4 destinos turísticos"));
    destinosTuristicos.push(prompt("Digite 4 destinos turísticos"));
    destinosTuristicos[1] = prompt("Edite o segundo destino turístico");
    destinosTuristicos.push(prompt("Digite outro destino turístico"));
    destinosTuristicos.splice(0, 1);
    console.log(destinosTuristicos[0] + ", " + destinosTuristicos[1] + ", " + destinosTuristicos[2] + ", " + destinosTuristicos[3])
}
function exercicio04(){
    let restaurantes = [];
    let cidades = [];
    let valoresMedios = [];
        restaurantes.push(prompt("Digite um restaurante"));
        cidades.push(prompt("Digite a cidade do restaurante"));
        valoresMedios.push(parseFloat(prompt("Digite o valor médio do restaurante")));
        restaurantes.push(prompt("Digite um restaurante"));
        cidades.push(prompt("Digite a cidade do restaurante"));
        valoresMedios.push(parseFloat(prompt("Digite o valor médio do restaurante")));
        restaurantes.push(prompt("Digite um restaurante"));
        cidades.push(prompt("Digite a cidade do restaurante"));
        valoresMedios.push(parseFloat(prompt("Digite o valor médio do restaurante")));
    console.log("\nRestaurante" + restaurantes[0] +
        "\nCidade: " + cidades[0] + 
        "\nValoresMedios: R$" + valoresMedios[0] +
        "\nRestaurante" + restaurantes[1] +
        "\nCidade: " + cidades[1] + 
        "\nValoresMedios: R$" + valoresMedios[1] +
        "\nRestaurante" + restaurantes[2] +
        "\nCidade: " + cidades[2] + 
        "\nValoresMedios: R$" + valoresMedios[2]
    )
    restaurantes[0] = prompt("Digite um novo nome para o primeiro restaurante");
    valoresMedios[2] = parseFloat(prompt("Digite o novo valor médio do terceiro restaurante"));
    console.log("\nRestaurante: " + restaurantes[0] +
        "\nCidade: " + cidades[0] + 
        "\nValoresMedios: R$" + valoresMedios[0] +
        "\nRestaurante: " + restaurantes[1] +
        "\nCidade: " + cidades[1] + 
        "\nValoresMedios: R$" + valoresMedios[1] +
        "\nRestaurante: " + restaurantes[2] +
        "\nCidade: " + cidades[2] + 
        "\nValoresMedios: R$" + valoresMedios[2]
    )
}
function exercicio05(){
    let filmes = [];
    let generos = [];
    let duracoes = [];
    let duracoesHoras = [];
    filmes.push(prompt("Digite 4 filmes"));
    generos.push(prompt("Digite os gêneros de 4 filmes"));
    duracoes.push(parseFloat(prompt("Digite a duração em minutos de 4 filmes")));
    filmes.push(prompt("Digite 4 filmes"));
    generos.push(prompt("Digite os gêneros de 4 filmes"));
    duracoes.push(parseFloat(prompt("Digite a duração em minutos de 4 filmes")));
    filmes.push(prompt("Digite 4 filmes"));
    generos.push(prompt("Digite os gêneros de 4 filmes"));
    duracoes.push(parseFloat(prompt("Digite a duração em minutos de 4 filmes")));
    filmes.push(prompt("Digite 4 filmes"));
    generos.push(prompt("Digite os gêneros de 4 filmes"));
    duracoes.push(parseFloat(prompt("Digite a duração em minutos de 4 filmes")));
    duracoesHoras.push(duracoes[0] / 60)
    duracoesHoras.push(duracoes[1] / 60)
    duracoesHoras.push(duracoes[2] / 60)
    duracoesHoras.push(duracoes[3] / 60)
    console.log("\nFilme: " + filmes[0] +
        "\nGênero: " + generos[0] +
        "\nDuração(min): " + duracoes[0] +
        "\nDuração(hr): " + duracoesHoras[0] +
        "\nFilme: " + filmes[1] +
        "\nGênero: " + generos[1] +
        "\nDuração(min): " + duracoes[1] +
        "\nDuração(hr): " + duracoesHoras[1] +
        "\nFilme: " + filmes[2] +
        "\nGênero: " + generos[2] +
        "\nDuração(min): " + duracoes[2] +
        "\nDuração(hr): " + duracoesHoras[2] +
        "\nFilme: " + filmes[3] +
        "\nGênero: " + generos[3] +
        "\nDuração(min): " + duracoes[3] +
        "\nDuração(hr): " + duracoesHoras[3]
    )
    generos[1] = prompt("Novo gênero");
    duracoes[0] = parseFloat(prompt("Nova duração"));
    duracoesHoras.push(duracoes[0] / 60);
    filmes.splice(3, 1);
    generos.splice(3, 1);
    duracoes.splice(3, 1);
    duracoesHoras.splice(3, 1);
    console.log("\nFilme: " + filmes[0] +
        "\nGênero: " + generos[0] +
        "\nDuração(min): " + duracoes[0] +
        "\nDuração(hr): " + duracoesHoras[0] +
        "\nFilme: " + filmes[1] +
        "\nGênero: " + generos[1] +
        "\nDuração(min): " + duracoes[1] +
        "\nDuração(hr): " + duracoesHoras[1] +
        "\nFilme: " + filmes[2] +
        "\nGênero: " + generos[2] +
        "\nDuração(min): " + duracoes[2] +
        "\nDuração(hr): " + duracoesHoras[2]
    )
}