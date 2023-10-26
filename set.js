const nomes = ["Ana", "Clara", "Joana", "Joana", "João", "João", "João"];

//const meuSet = new Set(nomes);

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);