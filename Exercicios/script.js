//crie uma função para verificar se o valor é truth
function truthy(valor){
    return !!valor;
}

//crie uma função quye retorne o perímetro de um quadrado
function perimetro(lado){
    return lado*4;
}

//crie uma função que retorne seu nome completo
function pessoa(nome, sobrenome){
   return nome + sobrenome;
}

//crie uma função que retorne se um número é par
function efalso(tipo){
    if(tipo % 2 == 0){
        console.log(" o tipo do número é par");
    }
    else{
        console.log(" o tipo do número é impar");
    }
}


//use o tupe of para retornar na função o tipo do valor
function type(tipo){
    return typeof(tipo);
}

//crie uma função, que ao dar scroll apareça seu nome
addEventListener('scroll', function(){
    console.log('Caio Vinicius');
});
