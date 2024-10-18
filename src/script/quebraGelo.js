import { show, notaColor, errorMsg } from './animation.js';
import { creatQuebraGelo, infoQuebraGelo } from './infoVenda.js';

const btnShowQuebraGelo = document.getElementById('btnShowQuebraGelo');
const formQuebraGelo = document.getElementById('formQuebraGelo');
const askName = document.getElementById('askName');
const askCliente = document.getElementById('askCliente');
const btnQuebraGelo = document.getElementById('btnQuebraGelo');
const notaValue = document.getElementById('notaQuebraGelo');
const inputName = document.getElementById('inputName');

const divQuebraGelo = document.getElementById('quebraGelo');
let notaQuebraGelo;
let nameCliente;
let notaNome;
let nameChecked;
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
    nameCliente = inputName.value;
    if (!nameChecked) return errorMsg(divQuebraGelo);
    if(nameChecked === 1) {
      if (!nameCliente) {
        errorMsg(divQuebraGelo);
        return;
      }
    }
    
    const radioSelect = inputRadioQuebraG();
    if (!radioSelect) return errorMsg(divQuebraGelo);


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
    nameChecked = 1;
    notaNome = 50;
    return notaNome;
  }
  if (name === document.getElementById('nameNo')) {
    if (!askName.classList.contains('show')) {
      nameChecked = true;
      notaNome = 0;
      show(askCliente);
    }
    if (askName.classList.contains('show')) show(askName);
    if (name !== document.getElementById('nameNo') && name !== document.getElementById('nameYes')) {
      nameChecked = false;
    }

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

//FUNCAO PARA VALIDAR
function validation() {
  if (!nameChecked) return errorMsg(divQuebraGelo);
  //if(nameChecked)
}
