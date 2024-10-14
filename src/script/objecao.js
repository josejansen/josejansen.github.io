import { notaColor, show } from './animation.js';
import { creatObj, infoObj } from './infoVenda.js';

const motivoObjecoes = document.getElementById('motivoObjecoes');
const btnContornoObj = document.getElementById('btnContornoObj');
const formObj = document.getElementById('formObj');
const btnObjecoes = document.getElementById('btnObjecoes');
const conseguiuContornar = document.getElementById('conseguiuContornar');
const conseguiuContornarSim = document.getElementById('conseguiuContornarSim');
const conseguiuContornarNao = document.getElementById('conseguiuContornarNao');
const notaContornoObj = document.getElementById('notaContornoObj');

let objecoes;
let contorno;
let notaObjecao;
let motivacoes = [];

export function objecao() {
  btnContornoObj.addEventListener('click', () => show(formObj));
  formObj.addEventListener('click', clienteObj);
  btnObjecoes.addEventListener('click', enviaInfo);
}

function clienteObj(e) {
  const objecaoSim = document.getElementById('objecaoSim');
  const objecaoNao = document.getElementById('objecaoNao');

  if (e.target === objecaoSim) {
    motivoObjecoes.classList.contains('noshow') ? show(motivoObjecoes) : null;
    conseguiuContornar.classList.contains('noshow') ? show(conseguiuContornar) : null;
    objecoes = 'Sim';
    motivoObjecoes.addEventListener('click', motivacoesValue);
    conseguiuContornar.addEventListener('click', contornoObj);
  } else if (e.target === objecaoNao) {
    objecoes = 'Não';
    notaObjecao = 0;
    motivoObjecoes.classList.contains('show') ? show(motivoObjecoes) : null;
    conseguiuContornar.classList.contains('show') ? show(conseguiuContornar) : null;
  }
}

function motivacoesValue() {
  const motivacoesChecked = document.querySelectorAll('input[name="motivoObjecoes"]:checked');
  motivacoes = [];
  motivacoesChecked.forEach((element) => {
    motivacoes.push(element.value);
  });
}

function contornoObj(e) {
  /* e.target === conseguiuContornarSim ? (notaObjecao = 100) : null;
  e.target === conseguiuContornarSim
    ? motivacoes.length > 0
      ? (notaObjecao = 50)
      : null
    : (notaObjecao = 0);
  notaObjecao = 100 ? (contorno = 'Sim') : (contorno = 'Não');*/
  if (e.target === conseguiuContornarSim) {
    notaObjecao = 100;
    contorno = 'Sim';
  } else if (e.target === conseguiuContornarNao) {
    motivacoes.length > 0 ? (notaObjecao = 50) : (notaObjecao = 0);
    contorno = 'Não';
  }
}

function enviaInfo(e) {
  e.preventDefault();
  infoObj.obj = objecoes;
  infoObj.qualObj = motivacoes;
  infoObj.conseguiuContornar = contorno;
  infoObj.nota = notaObjecao;
  creatObj(infoObj);
  notaContornoObj.value = notaObjecao;
  notaContornoObj.textContent = notaObjecao;
  notaColor(notaContornoObj);
  show(notaContornoObj);
  show(formObj);
}
