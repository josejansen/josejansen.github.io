import { show, notaColor } from './animation.js';
import { creatFechamento, infoFechamento } from './infoVenda.js';

const btnFechamento = document.getElementById('btnFechamento');
const formFechamento = document.getElementById('formFechamento');
const btnEnviarFechamento = document.getElementById('btnEnviarFechamento');
const textFechamento = document.getElementById('textFechamento');
const inputTextFechamento = document.getElementById('inputTextFechamento');
const fechamentoDeuCerto = document.getElementById('fechamentoDeuCerto');
const fechamentoCerto = document.getElementById('fechamentoCerto');
const fechamentoErrado = document.getElementById('fechamentoErrado');
const fechamentoSim = document.getElementById('fechamentoSim');
const fechamentoNao = document.getElementById('fechamentoNao');
const notaFechamento = document.getElementById('notaFechamento');
let notaTeveFechamento;
let notaFechamentoDeuCerto;
let fecha;
let fechaConcluido;
let inputText;
export let notaTotalFechamento;

export function fechamento() {
  btnFechamento.addEventListener('click', () => show(formFechamento));
  formFechamento.addEventListener('click', form);
  btnEnviarFechamento.addEventListener('click', enviarValores);
}

function form(e) {
  if (e.target === fechamentoSim) {
    fechamentoDeuCerto.classList.contains('noshow') ? show(fechamentoDeuCerto) : null;
    textFechamento.classList.contains('noshow') ? show(textFechamento) : null;
    notaTeveFechamento = 50;
    fecha = 'Sim';
  } else if (e.target === fechamentoNao) {
    fechamentoDeuCerto.classList.contains('show') ? show(fechamentoDeuCerto) : null;
    textFechamento.classList.contains('show') ? show(textFechamento) : null;
    notaTeveFechamento = 0;
    fecha = 'Não';
  }
}
function enviarValores(e) {
  e.preventDefault();
  notaFechamentoDeuCerto = 0;
  if (fechamentoCerto.checked) {
    notaFechamentoDeuCerto = 50;
    fechaConcluido = 'Sim';
  } else if (fechamentoErrado.checked) {
    notaFechamentoDeuCerto = 0;
    fechaConcluido = 'Não';
  }
  notaTotalFechamento = notaTeveFechamento + notaFechamentoDeuCerto;
  notaFechamento.textContent = notaTotalFechamento;
  notaFechamento.value = notaTotalFechamento;
  notaColor(notaFechamento);
  inputText = inputTextFechamento.valeu;
  show(formFechamento);
  infoFechamento.fechamento = fecha;
  infoFechamento.sucesso = fechaConcluido;
  infoFechamento.nota = notaTotalFechamento;
  infoFechamento.textFechamento = inputText;
  creatFechamento(infoFechamento);
}
