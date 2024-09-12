/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que 
cada estado teve dentro do valor total mensal da distribuidora.  */

const faturamento_por_Estado = {

    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    OUTROS: 19849.53
}

//total do faturamento

let totalFaturamento = 0;

for (const estado in faturamento_por_Estado){
    totalFaturamento += faturamento_por_Estado[estado];
       
}
console.log(totalFaturamento);

//exibir o percentual de cada estado:

for (const estado in faturamento_por_Estado){
    const porcentagem = (faturamento_por_Estado[estado]/ totalFaturamento) * 100;
    console.log(`${estado} : ${porcentagem.toFixed(2)} % `);
}