import { show } from "./animation.js";

const infoUlAbordagem = document.getElementById('infoUlAbordagem');
const infoUlQuebraGelo = document.getElementById('infoUlQuebraGelo');
const infoName = document.getElementById('infoName');
const infoUl = document.getElementById('infoUl');
const infoUlApresentacao = document.getElementById('infoUlApresentacao');


let ProntoparaCliente;
let recepcaoCliente;
let notaAbordagem
export const infoAbordagem = {ProntoparaCliente : '', recepcaoCliente: '', notaAbordagem: '' }
export const infoQuebraGelo= {Name : '', quebraQualForma: '', notaQuebra: '' }
export const infoApresentacao= {apresentou: '', textArea: '', nota: '' }
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

export function creatApresentacao(infoApresentacao){

    let li = `<li>Apresentou a loja: ${infoApresentacao.apresentou}</li>
    <li>Comentarios de como foi:${infoApresentacao.textArea} </li>
    <li> Nota da Abordagem: ${infoApresentacao.nota}</li>`;
    infoUlApresentacao.innerHTML += li;
}

infoName.addEventListener('click', ()=> show(infoUl));
