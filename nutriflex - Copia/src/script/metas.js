


const btnMetaKcal = document.getElementById('btnMetaKcal');
const metaMacroProteina = document.getElementById('metaMacroProteina');
const metaMacroCarboidrato = document.getElementById('metaMacroCarboidrato');
const metaMacroGordura = document.getElementById('metaMacroGordura');

let metaValue;

//PEGA O VALOR DA METAKCAL
btnMetaKcal.addEventListener('click', (e) => {
  e.preventDefault();
  const metaKcal = document.getElementById('metaKcal');
  metaValue = metaKcal.value;
  calcMacros();
});
//FIM PEGA O VALOR DA METAKCAL

//CALCULA O VALOR DOS MACROS
let proteinaValue;
let carboidratoValue;
let gorduraValue;
let kcalTotal;

function calcMacros() {
  const metaCarboidrato = document.getElementById('metaCarboidrato');
  const metaProteina = document.getElementById('metaProteina');
  const metaGordura = document.getElementById('metaGordura');

  kcalTotal = metaValue; 

  carboidratoValue = ((metaValue * 50) / 100)/4;
  proteinaValue = ((metaValue * 30) / 100)/4;
  gorduraValue = ((metaValue * 20) / 100)/9;

  metaCarboidrato.textContent = parseInt(carboidratoValue);
  metaProteina.textContent = parseInt(proteinaValue);
  metaGordura.textContent = parseInt(gorduraValue);
  saveMeta();
}
//FIM CALCULA O VALOR DOS MACROS

const resultadoCarboidrato = document.getElementById('resultadoCarboidrato');
const resultadoProteina = document.getElementById('resultadoProteina');
const resultadoGordura = document.getElementById('resultadoGordura');
const resultadoKcal = document.getElementById('resultadoKcal');
const btnMetaKcalMacros = document.getElementById('btnMetaKcalMacros');

metaMacroProteina.addEventListener('input', (e) => {
  e.preventDefault();
  updateValues();
});
metaMacroCarboidrato.addEventListener('input', (e) => {
  e.preventDefault();
  updateValues();
});
metaMacroGordura.addEventListener('input', (e) => {
  e.preventDefault();
  updateValues();
});

const updateValues = () => {
  proteinaValue = metaMacroProteina.value;
  resultadoProteina.textContent = proteinaValue * 4;

  carboidratoValue = metaMacroCarboidrato.value;
  resultadoCarboidrato.textContent = carboidratoValue *4;

  gorduraValue = metaMacroGordura.value;
  resultadoGordura.textContent = gorduraValue *9;

  if (proteinaValue && carboidratoValue && gorduraValue) {
    resultadoKcal.textContent = (proteinaValue * 4) + (carboidratoValue *4) + (gorduraValue*9);
    kcalTotal = (proteinaValue * 4) + (carboidratoValue *4) + (gorduraValue*9);
  } else {
    resultadoKcal.textContent = 0; // ou qualquer valor padrão que você queira
  }
};

btnMetaKcalMacros.addEventListener('click', (e) => {
  e.preventDefault();
  saveMeta();
});

const saveMeta = () => {
  const showProteinas = document.getElementById('showProteinas');
  const showCarboidratos = document.getElementById('showCarboidratos');
  const showGorduras = document.getElementById('showGorduras');
  const showKcalTotal = document.getElementById('showKcalTotal');

  showProteinas.textContent = parseInt(proteinaValue);
  showCarboidratos.textContent = parseInt(carboidratoValue);
  showGorduras.textContent = parseInt(gorduraValue);
  showKcalTotal.textContent = parseInt(kcalTotal);

};
/// CALCULA O VALOR DAS KCAL COM BASE NOS MACROS


/// COMPARA CALORIAS DEFINIDAS COM ATINGIDAS

export function comparaCalorias(caloriasTotais, gorduraTotais, proteinaTotais, carboidratoTotais ){
  if(parseInt(kcalTotal)<=parseInt(caloriasTotais)){
console.log('MAIOR OU IGUAL')
  }
  console.log('CHEGAMOS NO COMPARA')
}

