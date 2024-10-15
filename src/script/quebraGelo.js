import { show, notaColor } from './animation.js';
import { creatQuebraGelo, infoQuebraGelo } from './infoVenda.js';

const btnShowQuebraGelo = document.getElementById('btnShowQuebraGelo');
const formQuebraGelo = document.getElementById('formQuebraGelo');
const askName = document.getElementById('askName');
const askCliente = document.getElementById('askCliente');
const btnQuebraGelo = document.getElementById('btnQuebraGelo');
const notaValue = document.getElementById('notaQuebraGelo');
const inputName = document.getElementById('inputName');

let notaQuebraGelo;
let nameCliente;
let notaNome;
export let notaTotalQuebraGelo;
let radioSelect;
let focoQuebra;
export function quebraGelo() {
  btnShowQuebraGelo.addEventListener('click', () => show(formQuebraGelo));
  formQuebraGelo.addEventListener('click', evento);
}

function evento(e) {
  notaQuebraGelo = 0;
  let click = e.target;
  eName(click);
  if (click === btnQuebraGelo) {
    e.preventDefault();
    const radioSelect = inputRadioQuebraG();
    notaRadio(radioSelect);
    notaTotalQuebraGelo = notaNome + notaQuebraGelo;
    if (!notaTotalQuebraGelo) notaTotalQuebraGelo = 0;
    notaValue.textContent = notaTotalQuebraGelo;
    notaValue.value = notaTotalQuebraGelo;
    notaColor(notaValue);
    nameCliente = inputName.value;
    infoQuebraGelo.Name = nameCliente;
    infoQuebraGelo.notaQuebra = notaTotalQuebraGelo;
    infoQuebraGelo.quebraQualForma = focoQuebra;
    creatQuebraGelo(infoQuebraGelo);
    show(formQuebraGelo);
  }
}

function eName(name) {
  if (name === document.getElementById('nameYes')) {
    if (askName.classList.contains('noshow')) {
      show(askName);
      show(askCliente);
      if (askCliente.classList.contains('noshow')) show(askCliente);
    } else {
      show(askCliente);
      show(askName);
    }
    notaNome = 50;
    return notaNome;
  }
  if (name === document.getElementById('nameNo')) {
    if (!askName.classList.contains('show')) {
      show(askCliente);
    }
    if (askName.classList.contains('show')) show(askName);
    notaNome = 0;
    return notaNome;
  }
}

//funçao para retornar o radio SELECIONADO
function inputRadioQuebraG() {
  const radios = document.getElementsByName('askCliente');
  for (const radio of radios) {
    if (radio.checked) {
      if (radio.id === 'focoCliente') {
        focoQuebra = 'Foco no cliente';
      } else if (radio.id === 'focoProduto') {
        focoQuebra = 'Foco no Produto';
      } else if (radio.id === 'naoConseguiu') {
        focoQuebra = 'Não atingido';
      }
      radioSelect = radio.value;
      break;
    }
  }
  return radioSelect;
}
//funçao para retornar o radio SELECIONADO

//funçao para retornar A NOTA DO RADIO SELECIONADO
function notaRadio(radio) {
  if (radio === 'sim') return (notaQuebraGelo = 50);
  if (radio === 'nao') return (notaQuebraGelo = 0);
}
//funçao para retornar A NOTA DO RADIO SELECIONADO
