import { show } from "./animation.js";

const infoUlAbordagem = document.getElementById('infoUlAbordagem');
const infoUlQuebraGelo = document.getElementById('infoUlQuebraGelo');
const infoName = document.getElementById('infoName');
const infoUl = document.getElementById('infoUl');

let ProntoparaCliente;
let recepcaoCliente;
let notaAbordagem
export const infoAbordagem = {ProntoparaCliente : '', recepcaoCliente: '', notaAbordagem: '' }
export const infoQuebraGelo= {Name : '', quebraQualForma: '', notaQuebra: '' }
export function creatQuebraGelo(infoQuebraGelo){
    let li = `<li> O nome do cliente é: ${infoQuebraGelo.Name}</li>
    <li> Quebrou a o gelo com: ${infoQuebraGelo.quebraQualForma}</li>
    <li> A nota do quebra de gelo é:  ${infoQuebraGelo.notaQuebra}</li>
    `;
    infoUlQuebraGelo.innerHTML += li;
}

export function creatAbordagem(infoAbordagem){

    let li = `<li>Estava pronto para receber ${infoAbordagem.ProntoparaCliente}</li>
    <li>Como foi a recepção do cliente ${infoAbordagem.recepcaoCliente} </li>
    <li> Nota da Abordagem: ${infoAbordagem.notaAbordagem}</li>`;
    infoUlAbordagem.innerHTML += li;
}

infoName.addEventListener('click', ()=> show(infoUl));
