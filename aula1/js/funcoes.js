/*
//camelCase - Escrevemos uma declaração sem espaçoes, começando com minúsculo e alteranando entre maiúsculo e minúsculo
//ex: saudarUsuarioLogado


function saudarUsuario(nome){
    console.log('Olá, ' + nome);
};

saudarUsuario("Henrique");

function somar(n1,n2){
    return n1 + n2;
}

console.log('A soma dos dois números é '+ somar(5,10));




function corDoSemaforo(cor){
    if(cor === "verde"){
        return "Siga em frente";
    }else if(cor === "amarelo"){
        return "Atenção";
    }else if(cor === "vermelho"){
        return "pare";
    }else{
        return "cor inválida";
    };
}

console.log("Cor do semáforo", corDoSemaforo("verde"));
*/

//array - lista

let frutas = ["maça", "banana", "uva", "morango"];
console.log(frutas);

//ADICIONANDO UM ITEM NA LISTA. USAMOS push();
frutas.push("laranja");
console.log(frutas);

//ADICIONANDO UM ITEM NA LISTA AO INÍCIO. USAMOS unshifit();
frutas.unshift("pera");
console.log(frutas);

//REMOVENDO UM ITEM NA LISTA. USAMOS pop();
frutas.pop();
console.log(frutas);

//REMOVENDO UM ITEM NA LISTA NO INÍCIO. USAMOS pop();
frutas.shift();
console.log(frutas);

//DESCOBRINDO QUAL A POSIÇÃO DE UM ITEM NO ÍNDICE =  indexOf;
let indice = frutas.indexOf("banana");
console.log(indice);

//CONTANDO OS ITENS DA LISTA = length;
let numeroDeFrutas = frutas.length;
console.log(numeroDeFrutas);

//VERIFICANDO SE A LISTA ESTÁ VAZIA;
if (frutas.length === 0) {
  console.log("A lista está vazia");
} else {
  console.log("A lista está cheia");
}

//VERFICAIR SE UM ITEM CONTÉM UM DETERMINADO ELEMENTO = includes;
frutas.includes();

if (!frutas.includes("uva")) {
    console.log("Não tem uva na lista");
} else {
    console.log("Tem uva na lista");
}


function verificarAcesso(id){
    const idsAutorizados = [100,101,102,103,104,105];
    if(idsAutorizados.includes(id)){
        console.log("Acesso autorizado!");
    }else{
        console.log("Acesso negado!");
    }
}

verificarAcesso(105);