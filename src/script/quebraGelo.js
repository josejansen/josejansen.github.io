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
  btnQuebraGelo.addEventListener('click', envia)
}

function evento(e) {
  
 
  let click = e.target;
  
  if (document.getElementById('nameYes').checked) {
    if (askName.classList.contains('noshow')) {
      show(askName);
      if (askCliente.classList.contains('noshow')) show(askCliente);
    }
    nameCliente = inputName.value;
   
    notaNome = 50;
    return notaNome;
  
}
  if (document.getElementById('nameNo').checked) {
    if (!askCliente.classList.contains('show')) {
    
      notaNome = 0;
      show(askCliente);
    }
    if (askName.classList.contains('show')) show(askName);
    if (!document.getElementById('nameYes').checked && !document.getElementById('nameNo').checked) {
   //   nameChecked = false;
      notaNome = 0;
    }
    notaNome = 0;
 // nameChecked = true;
 nameCliente = 'NÃO INFORMADO'
    return notaNome;
  }
 
}

function envia(e){
 
    e.preventDefault();
    notaQuebraGelo = 0;
    const radioSelect = inputRadioQuebraG();
    
    if (!nameCliente) {
      errorMsg(divQuebraGelo);
      return;
    }

    if (!radioSelect) return errorMsg(divQuebraGelo);

    notaTotalQuebraGelo = notaNome + notaQuebraGelo;
    if (!notaTotalQuebraGelo) notaTotalQuebraGelo = 0;
    notaValue.textContent = notaTotalQuebraGelo;
    notaValue.value = notaTotalQuebraGelo;
    notaColor(notaValue);
    infoQuebraGelo.Name = nameCliente;
    infoQuebraGelo.notaQuebra = notaTotalQuebraGelo;
    infoQuebraGelo.quebraQualForma = focoQuebra;
    creatQuebraGelo(infoQuebraGelo);
    show(formQuebraGelo);
  
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
    nameCliente = inputName.value;
    //nameChecked = 1;
    notaNome = 50;
    return notaNome;
  }
  if (name === document.getElementById('nameNo')) {
    if (!askName.classList.contains('show')) {

      notaNome = 0;
      show(askCliente);
    }
    if (askName.classList.contains('show')) show(askName);
    if (name !== document.getElementById('nameNo') && name !== document.getElementById('nameYes')) {

      notaNome = 0;
    }
    notaNome = 0;
 nameCliente = 'NÃO INFORMADO'
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
  notaRadio(radioSelect)
  return radioSelect;
}
//funçao para retornar o radio SELECIONADO

//funçao para retornar A NOTA DO RADIO SELECIONADO
function notaRadio(radio) {
  if (radio === 'sim') return (notaQuebraGelo = 50);
  if (radio === 'nao') return (notaQuebraGelo = 0);
}
//funçao para retornar A NOTA DO RADIO SELECIONADO

