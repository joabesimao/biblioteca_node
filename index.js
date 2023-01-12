import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "nao há arquivo no diretorio!"));
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.readFile(caminhoDoArquivo, encoding, (erro, text) => {
    if (erro) {
      trataErro(erro);
    }
    console.log(chalk.blue(text));
  });
}

pegaArquivo("./arquivos/texto.md");
