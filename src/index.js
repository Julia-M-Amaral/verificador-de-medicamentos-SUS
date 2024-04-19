const fs = require("fs");

const listaUbs = [
  {
    id: 1,
    unidade: "UBS Sul",
    regiao: "Zona Sul",
    cidade: "São Paulo",
    remedios: [
      "Infralax",
      "Dipirona",
      "Paracetamol",
      "Amoxicilina",
      "Omeprazol",
      "Loratadina",
    ],
  },
  {
    id: 6,
    unidade: "UBS Centro",
    regiao: "Centro",
    cidade: "São Paulo",
    remedios: [
      "Ibuprofeno",
      "Cetoprofeno",
      "Ranitidina",
      "Dexametasona",
      "Clorfenamina",
      "Azitromicina",
    ],
  },
  {
    id: 2,
    unidade: "UBS Norte",
    regiao: "Zona Norte",
    cidade: "São Paulo",
    remedios: [
      "Paracetamol",
      "Amoxicilina",
      "Loratadina",
      "Dipirona",
      "Omeprazol",
      "Cetoprofeno",
    ],
  },
  {
    id: 3,
    unidade: "UBS Leste",
    regiao: "Zona Leste",
    cidade: "São Paulo",
    remedios: [
      "Dipirona",
      "Paracetamol",
      "Amoxicilina",
      "Ibuprofeno",
      "Ranitidina",
      "Cetoprofeno",
    ],
  },
  {
    id: 4,
    unidade: "UBS Santa Rita",
    regiao: "Zona Sul",
    cidade: "São Paulo",
    remedios: [
      "Paracetamol",
      "Ibuprofeno",
      "Amoxicilina",
      "Dipirona",
      "Omeprazol",
      "Loratadina",
    ],
  },
  {
    id: 5,
    unidade: "UBS São José",
    regiao: "Zona Norte",
    cidade: "São Paulo",
    remedios: [
      "Dipirona",
      "Cetoprofeno",
      "Ranitidina",
      "Dexametasona",
      "Clorfenamina",
      "Azitromicina",
    ],
  },
  {
    id: 7,
    unidade: "UBS Vila Nova",
    regiao: "Zona Oeste",
    cidade: "São Paulo",
    remedios: [
      "Paracetamol",
      "Amoxicilina",
      "Loratadina",
      "Dipirona",
      "Omeprazol",
      "Cetoprofeno",
    ],
  },
  {
    id: 8,
    unidade: "UBS Jardim das Flores",
    regiao: "Zona Leste",
    cidade: "São Paulo",
    remedios: [
      "Paracetamol",
      "Ibuprofeno",
      "Amoxicilina",
      "Dipirona",
      "Omeprazol",
      "Cetoprofeno",
    ],
  },
  {
    id: 9,
    unidade: "UBS Santo Antônio",
    regiao: "Zona Sul",
    cidade: "São Paulo",
    remedios: [
      "Ibuprofeno",
      "Cetoprofeno",
      "Ranitidina",
      "Dexametasona",
      "Clorfenamina",
      "Azitromicina",
    ],
  },
  {
    id: 10,
    unidade: "UBS Boa Vista",
    regiao: "Zona Norte",
    cidade: "São Paulo",
    remedios: [
      "Paracetamol",
      "Amoxicilina",
      "Loratadina",
      "Dipirona",
      "Omeprazol",
      "Cetoprofeno",
    ],
  },
  {
    id: 11,
    unidade: "UBS Vila Isabel",
    regiao: "Zona Oeste",
    cidade: "São Paulo",
    remedios: [
      "Dipirona",
      "Cetoprofeno",
      "Ranitidina",
      "Dexametasona",
      "Clorfenamina",
      "Azitromicina",
    ],
  },
  {
    id: 12,
    unidade: "UBS Parque das Árvores",
    regiao: "Zona Leste",
    cidade: "São Paulo",
    remedios: [
      "Paracetamol",
      "Ibuprofeno",
      "Amoxicilina",
      "Dipirona",
      "Omeprazol",
      "Ranitidina",
    ],
  },
  {
    id: 13,
    unidade: "UBS Jardim América",
    regiao: "Zona Sul",
    cidade: "São Paulo",
    remedios: [
      "Paracetamol",
      "Amoxicilina",
      "Loratadina",
      "Dipirona",
      "Omeprazol",
      "Cetoprofeno",
    ],
  },
  {
    id: 14,
    unidade: "UBS Centro de Saúde",
    regiao: "Centro",
    cidade: "São Paulo",
    remedios: [
      "Ibuprofeno",
      "Cetoprofeno",
      "Ranitidina",
      "Dexametasona",
      "Clorfenamina",
      "Azitromicina",
    ],
  },
  {
    id: 15,
    unidade: "UBS Nova Esperança",
    regiao: "Zona Norte",
    cidade: "São Paulo",
    remedios: [
      "Paracetamol",
      "Amoxicilina",
      "Loratadina",
      "Dipirona",
      "Omeprazol",
      "Cetoprofeno",
    ],
  },
  {
    id: 16,
    unidade: "UBS Rio Branco",
    regiao: "Zona Oeste",
    cidade: "São Paulo",
    remedios: [
      "Dipirona",
      "Cetoprofeno",
      "Ranitidina",
      "Dexametasona",
      "Clorfenamina",
      "Azitromicina",
    ],
  },
  {
    id: 17,
    unidade: "UBS Praia Grande",
    regiao: "Zona Sul",
    cidade: "São Paulo",
    remedios: [
      "Paracetamol",
      "Amoxicilina",
      "Loratadina",
      "Dipirona",
      "Omeprazol",
      "Cetoprofeno",
    ],
  },
];

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
      "./verificador-de-medicamentos-SUS/arquivos/saida-dados.json";

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
