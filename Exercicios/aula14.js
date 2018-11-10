//crie um objeto pessoa, deve possuir pelo menos duas propriedades
var pessoa = {
    nome: 'Caio',
    sobrenome : 'Vinicius',
    idade : 23
}
//crie um método no objeto anterior que mostre seus dados
pessoa.dados = function(){
    return  `${this.nome} ${this.sobrenome} ${this.idade}`;
}

//crie um objeto carro
var carro = {
    preco : 1000,
    cor : "vermelho",
    marca : 'Ferrari',
}
//modifique a propriedade preco para 3000
carro.preco = 3000

//crie um objeto cachorro, de cor preta, labrador, 10 anos
//que late ao ver um homem
var cachorro = {
    raca: 'labrador',
    idade: 10,
    cor : 'preto',

    latir(pessoa){
        if(pessoa === "homem"){
            return 'Latindo';
        }
        else{
            return 'Não late';
        }
    }
}
