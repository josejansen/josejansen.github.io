import { notaColor, errorMsg, show } from './animation.js';
import { creatAbordagem, infoAbordagem } from './infoVenda.js';


const divAbordagem = document.getElementById('abordagem');
const recepcaoSim = document.getElementById('recepcaoSim');
const recepcaoNao = document.getElementById('recepcaoNao');
const recepcaoQuente = document.getElementById('recepcaoQuente');
const recepcaoFria = document.getElementById('recepcaoFria');
const formAbordagem = document.getElementById('formAbordagem');
const btnShowAbordagem = document.getElementById('btnShowAbordagem');
const showDiv = document.getElementById('showDiv');
const btnAbordagem = document.getElementById('btnAbordagem');
const notaValue = document.getElementById('notaAbordagem');

let prontoparaCliente;
let recepcaoCliente;
export let notaTotalAbordagem;

export function abordagem() {
  divAbordagem.addEventListener('click', evento);
  btnAbordagem.addEventListener('click', valores);
}
function evento(e) {
  let element = e.target;
  if (e.target === btnShowAbordagem) {
    show(formAbordagem);
  }
  if (recepcaoSim === element) {
    show(showDiv);
  }
  if (recepcaoNao === element) {
    if (showDiv.classList.contains('noshow')) return;
    else {
      show(showDiv);
    }
  }
}

//FUNÇÃO PARA RECEBER OS VALORES DO FORM
function valores(e) {
  e.preventDefault();
  if (!recepcaoSim.checked && !recepcaoNao.checked)
    return errorMsg(divAbordagem);
  if (recepcaoSim.checked) {
    if (recepcaoQuente.checked) {
      prontoparaCliente = 'Sim';
      recepcaoCliente = 'recepção quente';
      notaTotalAbordagem = 100;
    } else if (recepcaoFria.checked) {
      prontoparaCliente = 'Sim';
      recepcaoCliente = 'recepção fria';
      notaTotalAbordagem = 75;
    }
    if (!recepcaoFria.checked && !recepcaoQuente.checked)
      return errorMsg(divAbordagem);
  } else if (recepcaoNao.checked) {
    notaTotalAbordagem = 0;
    prontoparaCliente = 'Não';
    recepcaoCliente = 'Não teve recepcao'
  }

  show(formAbordagem);
  notaValue.textContent = notaTotalAbordagem;
  notaValue.value = notaTotalAbordagem;
  notaColor(notaValue);

  infoAbordagem.ProntoparaCliente = prontoparaCliente;
  infoAbordagem.notaAbordagem = notaTotalAbordagem;
  infoAbordagem.recepcaoCliente = recepcaoCliente
  creatAbordagem(infoAbordagem);
}
//FUNÇÃO PARA RECEBER OS VALORES DO FORM

