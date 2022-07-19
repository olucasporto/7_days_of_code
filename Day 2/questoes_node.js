
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nome = "";
let idade = "";
let linguagem = "";
let gostoPelaLinguagem = "";

rl.on('close', )

rl.question("Qual é o seu nome?\n", function (nomeQ) {
  nome = nomeQ;
});
  
rl.question("Quantos anos você tem?\n", function (idadeQ) {
  idade = idadeQ;
});

rl.question("Qual linguagem de programação você está estudando?\n", function (linguagemQ) {
  linguagem = linguagemQ;
  console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
});

rl.question(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.\n`, function (gostoPelaLinguagemQ) {
  gostoPelaLinguagem = gostoPelaLinguagemQ;
  if(gostoPelaLinguagem == 1){
    console.log("Muito bom! Continue estudando e você terá muito sucesso!");
  } else {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
  }
  rl.close();
});