import { notaTotalAbordagem } from './abordagem.js';
import { notaColor, show } from './animation.js';
import { notaTotalApresentacao } from './apresentacaoLoja.js';
import { notaTotalFechamento } from './fechamento.js';
import { notaTotalObjecao } from './objecao.js';
import { notaTotalQuebraGelo } from './quebraGelo.js';

const infoUlAbordagem = document.getElementById('infoUlAbordagem');
const infoUlQuebraGelo = document.getElementById('infoUlQuebraGelo');
const infoName = document.getElementById('infoName');
const infoUl = document.getElementById('infoUl');
const infoUlApresentacao = document.getElementById('infoUlApresentacao');
const infoUlObj = document.getElementById('infoUlObj');
const infoUlFechamento = document.getElementById('infoUlFechamento');
const notaTotalAtendimento = document.getElementById('notaTotalAtendimento');

export const infoAbordagem = { ProntoparaCliente: '', recepcaoCliente: '', notaAbordagem: '' };
export const infoQuebraGelo = { Name: '', quebraQualForma: '', notaQuebra: '' };
export const infoApresentacao = { apresentou: '', textArea: '', nota: '' };
export const infoObj = { obj: '', qualObj: '', conseguiuContornar: '', nota: '' };
export const infoFechamento = { fechamento: '', textFechamento: '', sucesso: '', nota: '' };

export function creatQuebraGelo(infoQuebraGelo) {
  let li = `<li> O nome do cliente é: ${infoQuebraGelo.Name}</li>
    <li> Quebrou a o gelo com: ${infoQuebraGelo.quebraQualForma}</li>
    <li> A nota do quebra de gelo é:  ${infoQuebraGelo.notaQuebra}</li>
    `;
  infoUlQuebraGelo.innerHTML = li;
  infoUl.classList.add('lishow');
}

export function creatAbordagem(infoAbordagem) {
  let li = `<li>Estava pronto para receber ${infoAbordagem.ProntoparaCliente}</li>
    <li>Como foi a recepção do cliente ${infoAbordagem.recepcaoCliente} </li>
    <li> Nota da Abordagem: ${infoAbordagem.notaAbordagem}</li>`;
  infoUlAbordagem.innerHTML = li;
  infoUl.classList.add('lishow');
}

export function creatApresentacao(infoApresentacao) {
  let li = `<li>Apresentou a loja: ${infoApresentacao.apresentou}</li>
    <li>Comentarios de como foi:${infoApresentacao.textArea} </li>
    <li> Nota da Apresentação: ${infoApresentacao.nota}</li>`;
  infoUlApresentacao.innerHTML = li;
  infoUl.classList.add('lishow');
}

export function creatObj(infoObj) {
  let li = `<li>Cliente teve objeções?: ${infoObj.obj}</li>
      <li>Quais foram as objeções?${infoObj.qualObj} </li>
      <li>Conseguiu contornar as objeções?${infoObj.conseguiuContornar} </li>
      <li> Nota do contorno das objeções: ${infoObj.nota}</li>`;
  infoUlObj.innerHTML = li;
  infoUl.classList.add('lishow');
}

export function creatFechamento(infoFechamento) {
  let li = `<li>Teve iniciativa de fazer o fechamento? ${infoFechamento.fechamento}</li>
      <li>Qual foi o fechamento:${infoFechamento.textFechamento} </li>
      <li>Fechamento deu certo?${infoFechamento.sucesso} </li>
      <li> Nota do fechamento ${infoFechamento.nota}</li>`;
  infoUlFechamento.innerHTML = li;
  infoUl.classList.add('lishow');
}

function calculoTotal(e) {
  e.preventDefault();
  const notatext = document.getElementById('notatotal');
  notatext.textContent =
    (notaTotalApresentacao +
      notaTotalAbordagem +
      notaTotalFechamento +
      notaTotalObjecao +
      notaTotalQuebraGelo) /
    5;
    notatext.value =  (notaTotalApresentacao +
      notaTotalAbordagem +
      notaTotalFechamento +
      notaTotalObjecao +
      notaTotalQuebraGelo) /
    5;
    notaColor(notatext);
}

notaTotalAtendimento.addEventListener('click', calculoTotal);
infoName.addEventListener('click', () =>{ 
  if(infoUl.classList.contains('lishow')) show(infoUl);
  
  });
