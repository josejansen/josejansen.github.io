

//FUNÇÃO PARA CHAMAR/ATUALIZAR O GRAFICO
export function atualizaGrafico(
    kcalProteinaPorcentagem,
    kcalGorduraPorcentagem,
    kcalCarboidratoPorcentagem,
    caloriasTotais
  ) {
    const proteina = document.getElementById('proteina');
    const carboidrato = document.getElementById('carboidrato');
    const gordura = document.getElementById('gordura');
    const calorias = document.getElementById('calorias');
  
    proteina.style.height = `${kcalProteinaPorcentagem}%`;
    proteina.textContent = `PROTEINAS: ${kcalProteinaPorcentagem.toFixed(2)}%`;
  
    carboidrato.style.height = `${kcalCarboidratoPorcentagem}%`;
    carboidrato.textContent = `CARBOIDRATOS: ${kcalCarboidratoPorcentagem.toFixed(2)}%`;
  
    gordura.style.height = `${kcalGorduraPorcentagem}%`;
    gordura.textContent = `GORDURAS: ${kcalGorduraPorcentagem.toFixed(2)}%`;
  
    calorias.textContent = `KCAL TOTAL: ${caloriasTotais.toFixed(2)}`;
  }
  //FIM FUNÇÃO PARA CHAMAR/ATUALIZAR O GRAFICO