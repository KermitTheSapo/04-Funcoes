//1 - crie uma função que exiba uma mensagem no console

function mensagem() {
    console.log("Bom dia professor!")
}

mensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nome(nome) {
    console.log(`O meu nome é ${nome}`)
}

nome("Robert")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function informacoes(name, idade, musica) {
    console.log(`O meu nome é ${name}, e minha idade é ${idade} e eu gosto mais de ${musica}`)
}

informacoes("Robert", "18", "Musica internacional")
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function filmeMusica(filme,musica) {
    console.log(`O meu filme favorito é ${filme} e minha musica favorita é ${musica}`)
}

filmeMusica("O jogo da imitação", "2022 em uma musica")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numero, multiplicar) {
    let multiplicacao = numero * multiplicar
    console.log(`O numero ${numero} vezes ${multiplicar} é igual à ${multiplicacao}`)
}

triplo(3,2)