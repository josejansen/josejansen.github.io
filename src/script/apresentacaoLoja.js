//MELHORAR NA QUESTAO DA NOTA

import { errorMsg, notaColor, show } from './animation.js';
import { creatApresentacao, infoApresentacao } from './infoVenda.js';

const btnShowApresentacaoLoja = document.getElementById('btnShowApresentacaoLoja');
const formApresentacaoLoja = document.getElementById('formApresentacaoLoja');
const askApresenta = document.getElementById('askApresenta');
const labelText = document.getElementById('labelText');
const btnApresentacaoLoja = document.getElementById('btnApresentacaoLoja');
const inputTextArea = document.getElementById('inputTextArea');
const notaApresentacao = document.getElementById('notaApresentacao');
const divApresentacao = document.getElementById('apresentacaoLoja');

let textAreaValue;
let apresentou;
let notaApresentou;
let notaTextArea;
let input;
export let notaTotalApresentacao;

export function apresentacaoLoja() {
  btnShowApresentacaoLoja.addEventListener('click', () => show(formApresentacaoLoja));
  askApresenta.addEventListener('click', inputChecked);
  btnApresentacaoLoja.addEventListener('click', btnEnviar);
}

function inputChecked(e) {
  if (e.target.id === 'askApresentaSim') {
    apresentou = e.target.value;
    notaApresentou = 50;
    input = true;
    labelText.classList.contains('noshow') ? show(labelText) : null;
  } else if (e.target.id === 'askApresentaNao') {
    apresentou = e.target.value;
    notaApresentou = 0;
    input = false;
    labelText.classList.contains('show') ? show(labelText) : null;
  }
}

function btnEnviar(e) {
  e.preventDefault();
  if (!apresentou) return errorMsg(divApresentacao);
  if (input) {
    textAreaValue = inputTextArea.value.trim();
    notaTextArea = 50;
    console.log('passou aqui no input')
    console.log(`a:${textAreaValue}`)
   if(textAreaValue === '') {
    console.log('passou aqui no vazio')
   return errorMsg(divApresentacao);}
  } else if(!input){
    textAreaValue = '';
    notaTextArea = 0;
  }
  


  //textAreaValue === '' ? (notaTextArea = 0) : (notaTextArea = 50);
  notaTotalApresentacao = notaTextArea + notaApresentou;
  infoApresentacao.apresentou = apresentou;
  infoApresentacao.textArea = textAreaValue;
  infoApresentacao.nota = notaTotalApresentacao;
  notaApresentacao.textContent = notaTotalApresentacao;
  notaApresentacao.value = notaTotalApresentacao;
  notaColor(notaApresentacao);
  show(notaApresentacao);
  show(formApresentacaoLoja);
  creatApresentacao(infoApresentacao);
  
}

