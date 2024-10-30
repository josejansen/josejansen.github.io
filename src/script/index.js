import { abordagem } from './abordagem.js';
import { apresentacaoLoja } from './apresentacaoLoja.js';
import { fechamento } from './fechamento.js';
import { objecao } from './objecao.js';
import { quebraGelo } from './quebraGelo.js';
apresentacaoLoja();
quebraGelo();
abordagem();
objecao();
fechamento();

const noShow = document.querySelectorAll('.noshow');
noShow.forEach((element) => {
  element.addEventListener('animationend', () => {
    if (element.classList.contains('noshow')) {
      element.style.display = 'none';
    }
  });
});
