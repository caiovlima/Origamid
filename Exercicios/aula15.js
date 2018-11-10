//para selecionar um item no html, utiliza o document

//nomeie 3 propriedades ou métodos de string
var nome = 'Caio';
//nome.fixed
// nome.indexOf
//nome.split


//nomeie 5 porpriedades ou elementos do dom
var btn = document.querySelector('.btn'); //coloca o . para ele pegar a classe
//btn.addEventListener
// btn.appendChild
// btn.innerHTML

//ARRAY
var videogame = ['Switch', 'Ps4', 'Xbox'];

//adicionar elemento
videogame.push('ps vita');

//tirar elemento, por padrão ele tira o ultimo
videogame.pop();

//loop
for (let index = 0; index < 10; index++) {
    console.log(index);
    
}


//array + loop
for (let index = 0; index < videogame.length; index++) {
    console.log(videogame[index]);
    
}

videogame.forEach(function(item)  {
    console.log(item);
});
