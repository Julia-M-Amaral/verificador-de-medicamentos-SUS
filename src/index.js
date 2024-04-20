const fs = require("fs");
const listaUbs = require("./listaUbs")
const regiaoEscolhidaUsuario = "Zona Norte";
const remedioEscolhidoUsuario = "Paracetamol";

function retornaOpcoesUbs(regiao, remedio, callback) {
  console.log(
    "Aguarde um momento, enquanto buscamos as informações para você."
  );

  setTimeout(function () {
    const ubsNaRegiao = listaUbs.filter((item) => item.regiao === regiao);
    const ubsComRemedio = ubsNaRegiao.filter((item) =>
      item.remedios.includes(remedio)
    );

      if (ubsComRemedio.length === 0) {
        console.log("O SUS infelizmente não disponibiliza esse remédio.");
        return;
      }

    console.log(
      `O ${remedioEscolhidoUsuario}, está disponível nas seguintes UBS: `
    );

    for (let i = 0; i < ubsComRemedio.length; i++) {
      const item = ubsComRemedio[i];
      console.log(`Unidade: ${item.unidade}
          Região: ${item.regiao}
          -----------------------`);
    }

    const dadosJson = JSON.stringify(ubsComRemedio);

    const nomeDoArquivo =
      "./src/arquivos/saida-dados.json";

    fs.writeFile(nomeDoArquivo, dadosJson, (err) => {
      if (err) {
        console.error("Ocorreu um erro na criação do arquivo JSON.", err);
        return;
      }
      console.log("Arquivo JSON criado com sucesso.");
      callback();
    });
  }, 10000);

  setTimeout(function () {
    console.log("Continue aqui.");
  }, 4000);
}

retornaOpcoesUbs(regiaoEscolhidaUsuario, remedioEscolhidoUsuario, function () {
  console.log("Busca concluída.");
});
