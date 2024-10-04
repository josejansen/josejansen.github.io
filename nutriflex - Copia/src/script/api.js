import { atualizaGrafico } from './grafico.js';
import { showInputNumber } from './animations.js';
import { comparaCalorias } from './metas.js';


//FUNÇÂO FAKE É PARA DESENVOLVIMENTO APENAS
const proteinasAtg = document.getElementById('showProteinasAtg');
const carboidratosAtg = document.getElementById('showCarboidratosAtg');
const gordurasAtg = document.getElementById('showGordurasAtg');
const kcalTotalAtg = document.getElementById('showKcalTotalAtg');
const showListaAlimentos = document.getElementById('showListaAlimentos');
const input = document.getElementById('inputFood');
const inputqtd = document.getElementById('inputQtd');
const formQtd = document.getElementById('formQtd');
const btnEnviar = document.getElementById('btn-enviar');
let nome;
let calorias;
let gordura;
let proteina;
let carboidrato;
let alimento;
let id;
let globalMacros = {
  nome,
  calorias,
  gordura,
  proteina,
  carboidrato,
  id,
};
let i = 0;
function fake() {
  i++;

  return (globalMacros = {
    nome: 'FRANGO',
    calorias: 150*i,
    gordura: 2,
    proteina: 25,
    carboidrato: 5,
    id: i,
  });
}
document.getElementById('btn-input').addEventListener('click', (e) => {
  e.preventDefault();
  noneFormAlimento();
  showInputNumber();
});
//CHAMA FUNÇÃO PARA ACHAR ALIMENTO NA API
/*document.getElementById('btn-input').addEventListener('click', async (e) => {
  e.preventDefault();
  let text = await translate();

  $.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + text,
    headers: { 'X-Api-Key': 'u/euWOZb7GAfZlMjLgiw9g==ZHyURRPqq2QiVG7y' },
    contentType: 'application/json',
    success: function (result) {
      let arrayFood = result.items;
      if (arrayFood.length === 0) console.log('sem resultado');
      if (arrayFood.length >= 1) resultado(arrayFood);
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    },
  });
});
document.getElementById('btn-input').addEventListener('click', (e) => {
  e.preventDefault();
  showInputNumber();
});*/

//FUNÇÃO PARA TRADUZIR O INPUT E BUSCAR NA API
async function translate() {
  let response = await fetch(
    `https://api.mymemory.translated.net/get?q=${input.value}!&langpair=pt-BR|en`
  );
  let data = await response.json();
  return data.responseData.translatedText;
}
//FIM FUNÇÃO PARA TRADUZIR O INPUT E BUSCAR NA API

// RECEBE VALORES DO ALIMENTO
function resultado(array) {
  let nome = array[0].name;
  let calorias = array[0].calories / 100;
  let gordura = array[0].fat_total_g / 100;
  let proteina = array[0].protein_g / 100;
  let carboidrato = array[0].carbohydrates_total_g / 100;
  let acucar = array[0].sugar_g / 100;

  showMacro(nome, calorias, gordura, proteina, carboidrato);

  showInputNumber();
}
// FIM RECEBE VALORES DO ALIMENTO



//CALCULA OS MACROS
function showMacro(nome, calorias, gordura, proteina, carboidrato) {
  let inputNome = document.getElementById('foodNome');
  let inputProteina = document.getElementById('foodProteina');
  let inputGordura = document.getElementById('foodGordura');
  let inputCarboidrato = document.getElementById('foodCarboidrato');
  let inputCaloria = document.getElementById('foodCaloria');

  inputNome.textContent = nome;

  inputProteina.textContent = `PROTEINAS: ${proteina * inputqtd.value}`;
  inputGordura.textContent = `GORDURAS: ${gordura * inputqtd.value}`;
  inputCarboidrato.textContent = `CARBOIDRATOS: ${
    carboidrato * inputqtd.value
  }`;
  inputCaloria.textContent = `CALORIAS: ${calorias * inputqtd.value}`;

  /*
  SÒ PARA TESTESSSS
  globalMacros = {
    nome: nome,
    calorias: calorias * inputqtd.value,
    gordura: gordura * inputqtd.value,
    proteina: proteina * inputqtd.value,
    carboidrato: carboidrato * inputqtd.value,
  };*/

  //CALCULA O VALOR DOS MACROS E EXIBE EM TELA, INPUT NUMBER
  inputqtd.addEventListener('change', () => {
    inputProteina.textContent = `PROTEINAS: ${parseFloat(
      proteina * inputqtd.value
    ).toFixed(2)}`;
    inputGordura.textContent = `GORDURAS: ${parseFloat(
      gordura * inputqtd.value
    ).toFixed(2)}`;
    inputCarboidrato.textContent = `CARBOIDRATOS: ${parseFloat(
      carboidrato * inputqtd.value
    ).toFixed(2)}`;
    inputCaloria.textContent = `CALORIAS: ${parseFloat(
      calorias * inputqtd.value
    ).toFixed(2)}`;

    /*
  SÒ PARA TESTESSSS
  globalMacros = {
    nome: nome,
    calorias: calorias * inputqtd.value,
    gordura: gordura * inputqtd.value,
    proteina: proteina * inputqtd.value,
    carboidrato: carboidrato * inputqtd.value,
  };*/
  });

  inputqtd.addEventListener('input', () => {
    inputProteina.textContent = `PROTEINAS: ${parseFloat(
      proteina * inputqtd.value
    ).toFixed(2)}`;
    inputGordura.textContent = `GORDURAS: ${parseFloat(
      gordura * inputqtd.value
    ).toFixed(2)}`;
    inputCarboidrato.textContent = `CARBOIDRATOS: ${parseFloat(
      carboidrato * inputqtd.value
    ).toFixed(2)}`;
    inputCaloria.textContent = `CALORIAS: ${parseFloat(
      calorias * inputqtd.value
    ).toFixed(2)}`;

    /*
  SÒ PARA TESTESSSS
  globalMacros = {
    nome: nome,
    calorias: calorias * inputqtd.value,
    gordura: gordura * inputqtd.value,
    proteina: proteina * inputqtd.value,
    carboidrato: carboidrato * inputqtd.value,
  };*/
  });
}
//FIM CALCULA O VALOR DOS MACROS E EXIBE EM TELA, INPUT NUMBER

//EVENTO INPUT PARA CHAMAR FUNÇÃO DE EXIBIR INFORMAÇÕES NA TABELA E PEGAR O VALOR
btnEnviar.addEventListener('click', () => {
  fake();
  totalRef(globalMacros);
  noneInputAlimento();
});
//EVENTO INPUT PARA CHAMAR FUNÇÃO DE EXIBIR INFORMAÇÕES NA TABELA E PEGAR O VALOR

//FUNÇÃO QUE SOMA OS ALIMENTOS E CHAMA O GRAFICO
let totalRefeicoes = [];

function totalRef(globalMacros) {
  totalRefeicoes.push(globalMacros);
  inputRefeicao(globalMacros);
  criaLista();
  calcCalorias();
 
}



//FUNÇÃO PARA SOMAR AS CALORIAS DO GRAFICO E ENVIAR
export function calcCalorias(){
let caloriasTotais = totalRefeicoes.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual.calorias;
}, 0);

let gorduraTotais = totalRefeicoes.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual.gordura;
}, 0);

let proteinaTotais = totalRefeicoes.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual.proteina;
}, 0);

let carboidratoTotais = totalRefeicoes.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual.carboidrato;
}, 0);



kcalTotalAtg.textContent=caloriasTotais;
gordurasAtg.textContent=gorduraTotais;
carboidratosAtg.textContent=carboidratoTotais;
proteinasAtg.textContent=proteinaTotais;

let kcalGorduraPorcentagem = (gorduraTotais * 9 * 100) / caloriasTotais;
let kcalProteinaPorcentagem = (proteinaTotais * 4 * 100) / caloriasTotais;
let kcalCarboidratoPorcentagem =
  (carboidratoTotais * 4 * 100) / caloriasTotais;

atualizaGrafico(
  kcalProteinaPorcentagem,
  kcalGorduraPorcentagem,
  kcalCarboidratoPorcentagem,
  caloriasTotais
);

comparaCalorias(caloriasTotais, gorduraTotais, proteinaTotais, carboidratoTotais );


}
//FIM FUNÇÃO PARA SOMAR AS CALORIAS DO GRAFICO E ENVIAR

///FUNÇÃO PARA SELECIONAR EM QUAL REFEIÇÃO FOI O ALIMENTO
let cafeManha = [];
let almoco = [];
let janta = [];
let lanche = [];

function inputRefeicao(globalMacros) {
  const refeicao = document.getElementById('refeicao');

  if (refeicao.value === 'cafe-da-manha') cafeManha.push(globalMacros);
  if (refeicao.value === 'almoco') almoco.push(globalMacros);
  if (refeicao.value === 'janta') janta.push(globalMacros);
  if (refeicao.value === 'lanche') lanche.push(globalMacros);
}
///FIM FUNÇÃO PARA SELECIONAR EM QUAL REFEIÇÃO FOI O ALIMENTO

function criaLista() {
  showListaAlimentos.innerHTML = '';
  totalRefeicoes.forEach((e) => {
    let lista = `<li> ${e.nome}, ${e.calorias}, ${e.proteina}, ${e.carboidrato}, ${e.gordura}, ${e.id} </li>
    <button id='btn-excluir-alimento' onclick='excluir(${e.id})'>Excluir</button>`;
    showListaAlimentos.innerHTML += lista;
  });

  const alimentosCafe = document.getElementById('alimentos-cafe');
  alimentosCafe.innerHTML = '';
  cafeManha.forEach((e) => {
    let lista = `<li> ${e.nome}, ${e.calorias}, ${e.proteina}, ${e.carboidrato}, ${e.gordura}, ${e.id} </li>
    <button id='btn-excluir-alimento' onclick='excluir(${e.id})'>Excluir</button>`;
    alimentosCafe.innerHTML += lista;
  });

  const alimentosAlmoco = document.getElementById('alimentos-almoco');
  alimentosAlmoco.innerHTML = '';
  almoco.forEach((e) => {
    let lista = `<li> ${e.nome}, ${e.calorias}, ${e.proteina}, ${e.carboidrato}, ${e.gordura}, ${e.id} </li>
    <button id='btn-excluir-alimento' onclick='excluir(${e.id})'>Excluir</button>`;
    alimentosAlmoco.innerHTML += lista;
  });

  const alimentosJanta = document.getElementById('alimentos-janta');
  alimentosJanta.innerHTML = '';
  janta.forEach((e) => {
    let lista = `<li> ${e.nome}, ${e.calorias}, ${e.proteina}, ${e.carboidrato}, ${e.gordura}, ${e.id} </li>
    <button id='btn-excluir-alimento' onclick='excluir(${e.id})'>Excluir</button>`;
    alimentosJanta.innerHTML += lista;
  });

  const alimentosLanche = document.getElementById('alimentos-lanche');
  alimentosLanche.innerHTML = '';
  lanche.forEach((e) => {
    let lista = `<li> ${e.nome}, ${e.calorias}, ${e.proteina}, ${e.carboidrato}, ${e.gordura}, ${e.id} </li>
    <button id='btn-excluir-alimento' onclick='excluir(${e.id})'>Excluir</button>`;
    alimentosLanche.innerHTML += lista;
  });

  reduceRefeicoes();
}


window.excluir = function (id) {
  let index = totalRefeicoes.findIndex((e) => e.id === id);
  if (index !== -1) {
    totalRefeicoes.splice(index, 1);
    criaLista();
    calcCalorias();

  }

  index = cafeManha.findIndex((e) => e.id === id);
  if (index !== -1) {
    cafeManha.splice(index, 1);
    criaLista();
  }

  index = almoco.findIndex((e) => e.id === id);
  if (index !== -1) {
    almoco.splice(index, 1);
    criaLista();
  }

  index = janta.findIndex((e) => e.id === id);
  if (index !== -1) {
    janta.splice(index, 1);
    criaLista();
  }

  index = lanche.findIndex((e) => e.id === id);
  if (index !== -1) {
    lanche.splice(index, 1);
    criaLista();
  }
};

//SOMA AS CALORIAS TOTAIS PARA APARECER NA LISTA
function reduceRefeicoes() {
  const spanCafe = document.getElementById('kcal-cafe');
  let caloriasTotaisCafe = cafeManha.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.calorias;
  }, 0);
  spanCafe.textContent = caloriasTotaisCafe;

  const spanAlmoco = document.getElementById('kcal-almoco');
  let caloriasTotaisAlmoco = almoco.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.calorias;
  }, 0);
  spanAlmoco.textContent = caloriasTotaisAlmoco;

  const spanJanta = document.getElementById('kcal-janta');
  let caloriasTotaisJanta = janta.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.calorias;
  }, 0);
  spanJanta.textContent = caloriasTotaisJanta;

  const spanLanche = document.getElementById('kcal-lanche');
  let caloriasTotaisLanche = lanche.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.calorias;
  }, 0);
  spanLanche.textContent = caloriasTotaisLanche;

  const spanAlimentosTotal = document.getElementById('kcal-alimentos-total');
  let caloriasTotais = totalRefeicoes.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.calorias;
  }, 0);
  spanAlimentosTotal.textContent = caloriasTotais;
}
//FIM SOMA AS CALORIAS TOTAIS PARA APARECER NA LISTA


////////////////////ANIMAÇÃO ESTA SENDO CHAMADA DUAS VEZES/////////////////////////////

//////////////////////ERROOOOOO//////////////////////////
