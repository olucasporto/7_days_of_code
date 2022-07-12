
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual é o seu nome?\n", function (nome) {
  rl.question("Quantos anos você tem?\n", function (idade) {
    rl.question("Qual linguagem de programação você está estudando?\n", function (linguagem) {
      console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

      rl.question(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.\n`, function (gostoPelaLinguagem) {
        if(gostoPelaLinguagem == 1){
          console.log("Muito bom! Continue estudando e você terá muito sucesso!");
        } else {
          console.log("Ahh que pena... Já tentou aprender outras linguagens?");
        }
      process.exit(0);
      });
    });
  });
});