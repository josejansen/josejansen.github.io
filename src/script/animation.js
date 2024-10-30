//FUNÇÃO PARA RECEBER OU NÃO O CLIQUE//

export function show(element) {
  if (element.classList.contains('noshow')) {
    element.classList.remove('noshow');
    element.style.display = 'flex';
    element.classList.add('show');
  } else if (element.classList.contains('show')) {
    element.classList.remove('show');
    element.classList.add('noshow');
  }
}

//FUNÇÃO PARA RECEBER OU NÃO O CLIQUE//

//FUNÇÃO COLOCAR MSG ERRO//

export function errorMsg(element) {
  element.classList.add('erro');
  setTimeout(() => {
    element.classList.remove('erro');
  }, 3000);
}

export function notaColor(element){
    element.classList.remove('notaGreen', 'notaYellow', 'notaRed')
    if(element.value >= 75) element.classList.add('notaGreen');
    if(element.value < 75 && element.value >=50) element.classList.add('notaYellow');
    if(element.value < 50) element.classList.add('notaRed');
    element.classList.add('show');

}