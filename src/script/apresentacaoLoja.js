//MELHORAR NA QUESTAO DA NOTA

import { show } from './animation.js';
import { creatApresentacao, infoApresentacao } from './infoVenda.js';

const btnShowApresentacaoLoja = document.getElementById('btnShowApresentacaoLoja');
const formApresentacaoLoja = document.getElementById('formApresentacaoLoja');
const askApresenta = document.getElementById('askApresenta');
const labelText = document.getElementById('labelText');
const btnApresentacaoLoja = document.getElementById('btnApresentacaoLoja');
const inputTextArea = document.getElementById('inputTextArea');


let apresentou;
let notaApresentou;
let notaTextArea;
let notaTotal;

export function apresentacaoLoja() {
  btnShowApresentacaoLoja.addEventListener('click', () => show(formApresentacaoLoja));
  askApresenta.addEventListener('click', inputChecked);
  btnApresentacaoLoja.addEventListener('click', btnEnviar);
}

function inputChecked(e) {
  if (e.target.id === 'askApresentaSim') {
    apresentou = e.target.value;
    notaApresentou = 100;
    labelText.classList.contains('noshow') ? show(labelText) : null;
  } else if (e.target.id === 'askApresentaNao') {
    apresentou = e.target.value;
    notaApresentou = 0;
    labelText.classList.contains('show') ? show(labelText) : null;
  }
}

function btnEnviar(e) {
  e.preventDefault();
  let textAreaValue = inputTextArea.value;
  infoApresentacao.apresentou = apresentou;
  infoApresentacao.textArea = textAreaValue;
  infoApresentacao.nota = notaApresentou;
  creatApresentacao(infoApresentacao);
  show(formApresentacaoLoja);
  //textAreaValue === '' ? (notaTextArea = 0) : (notaTextArea = 50);
 // notaTotal = notaTextArea + notaApresentou;
 
}
