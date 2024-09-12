/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.*/
const fs = require('fs');

function calcularFaturamento(dados) {
    let soma = 0;
    let diasComVendas = 0;
  
    dados.forEach(dia => {
      if (dia.valor > 0) {
        soma += dia.valor;
        diasComVendas++;
      }
    });
  
    return soma / diasComVendas;
  }
  
  function localizar_dia_menor_valor(dados) {
    return dados.reduce((menor, dia) => Math.min(menor, dia.valor), 0);
  }
  
  function localizar_dia_maior_valor(dados) {
    return dados.reduce((maior, dia) => Math.max(maior, dia.valor), 0);
  }
  
  function contar_dia_acima_media(dados, media) {
    return dados.filter(dia => dia.valor > media).length;
  }
  
  fs.readFile('faturamento.json', 'utf8', (erro, data) => {
    if (erro) {
      console.error('Erro ao ler o arquivo:', erro);
      return;
    }
  
    try {
      const dadosFaturamento = JSON.parse(data);
      const mediaMensal = calcularFaturamento(dadosFaturamento);
      const menorValor = localizar_dia_menor_valor(dadosFaturamento);
      const maiorValor = localizar_dia_maior_valor(dadosFaturamento).toFixed(2);
      const diasAcimaDaMedia = contar_dia_acima_media(dadosFaturamento, mediaMensal);
  
      console.log(`Menor valor de faturamento: R$ ${menorValor}`);
      console.log(`Maior valor de faturamento: R$ ${maiorValor}`);
      console.log(`Dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);
    } catch (error) {
      console.error('Erro ao processar os dados:', error);
    }
  });