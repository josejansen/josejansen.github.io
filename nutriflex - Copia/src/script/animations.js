export function animations(){

const btnPlus = document.getElementById('btnPlus');
const inputAlimento = document.getElementById('inputAlimento');
const formAlimento = document.getElementById('formAlimento');
const formQuant = document.getElementById('formQtd');

// BTN PARA ADICIONAR COMIDA, RETIRA E COLOCA O D-FLEX/D-NONE FORM E INPUT ALIMENTOS////
btnPlus.addEventListener('click', (e) => {
  e.preventDefault();
  inputAlimento.classList.add('d-flex');
  inputAlimento.classList.remove('d-none');
  formAlimento.classList.add('d-flex');
  formAlimento.classList.remove('d-none');

  if (formQuant.classList.contains('d-flex')) {
    formQuant.classList.remove('d-flex');
    formQuant.classList.add('d-none');
  } else {
    formQuant.classList.add('d-flex');
    formQuant.classList.remove('d-none');
  }
});
//FIM  BTN PARA ADICIONAR COMIDA, RETIRA E COLOCA O D-FLEX/D-NONE FORM E INPUT ALIMENTOS////

// BTN PARA FECHAR FORM E INPÙT ALIMENTOS////
const btnCloseForm = document.getElementById('btnCloseForm');

btnCloseForm.addEventListener('click', (e) => {
  e.preventDefault();
  inputAlimento.classList.add('d-none');
  inputAlimento.classList.remove('d-flex');

  if (formAlimento.classList.contains('d-flex')) {
    formAlimento.classList.remove('d-flex');
    formAlimento.classList.add('d-none');
  }
});
//FIM BTN PARA FECHAR FORM E INPÙT ALIMENTOS////

window.displayRef = function(button) {
  const idUl = button.value;

  let ul = document.getElementById(idUl);
  if (ul.classList.contains('d-none')) {
    ul.classList.add('d-flex');
    ul.classList.remove('d-none');
  } else {
    ul.classList.remove('d-flex');
    ul.classList.add('d-none');
  }
}

// BTN PARA ABRIR METAS////
const btnMetas = document.getElementById('btnMetas');
const metaKcalForm = document.getElementById('meta-kcal-form');
const containerMacrosMeta = document.getElementById('containerMacrosMeta');
const btnKcalMacros = document.getElementById('btnKcalMacros');

btnMetas.addEventListener('click', () => {
  const inputMetas = document.getElementById('inputMetas');
  const btnCloseMetas = document.getElementById('btnCloseMetas');
  const metaKcalForm = document.getElementById('meta-kcal-form');

  btnKcalMacros.classList.add('d-flex');
  btnKcalMacros.classList.remove('d-none');

  inputMetas.classList.remove('d-none');
  inputMetas.classList.add('d-flex');

  metaKcalForm.classList.remove('d-flex');
  metaKcalForm.classList.add('d-none');

  containerMacrosMeta.classList.add('d-none');
  containerMacrosMeta.classList.remove('d-flex');

  btnCloseMetas.addEventListener('click', () => {
    inputMetas.classList.add('d-none');
    inputMetas.classList.remove('d-flex');
  });
});

window.showMetaKcal = function() {
  metaKcalForm.classList.remove('d-none');
  metaKcalForm.classList.add('d-flex');
  btnKcalMacros.classList.add('d-none');
}

window.showMetaMacro = function() {
  containerMacrosMeta.classList.remove('d-none');
  containerMacrosMeta.classList.add('d-flex');
  btnKcalMacros.classList.add('d-none');
}
// FIM BTN PARA ABRIR METAS////

// BTN GRAFICO //
const btnGrafico = document.getElementById('btnGrafico');
let clickGrafico = false;
btnGrafico.addEventListener('click', (e) => {
  e.preventDefault();
  const showGrafico = document.getElementById('grafico');

  if (clickGrafico) {
    showGrafico.classList.remove('chart-container');
    showGrafico.classList.add('hidden');
    clickGrafico = false;
  } else if (!clickGrafico) {
    showGrafico.classList.remove('hidden');
    showGrafico.classList.add('chart-container');
    clickGrafico = true;
  }
});

// FIM BTN GRAFICO //

window.noneFormAlimento = function() {
  const formAlimento = document.getElementById('formAlimento');
  formAlimento.classList.add('d-none');
};
window.noneInputAlimento = function() {
  const inputAlimento = document.getElementById('inputAlimento');
  inputAlimento.classList.add('d-none');
  formQtd.classList.add('d-none');
};

//SCRIPT JS
const btnShowDetails = document.getElementById("btn-show-details");
const divShow = document.getElementById("div-show");
const divCarousel = document.getElementById("depoimentos");
const divDownload = document.getElementById("download");
const btnTestar = document.getElementById("btnTestar");
const btnClose = document.getElementById("btnClose");


const btn = document.createElement("button");
btn.classList.add("btn-lg");
btn.classList.add("position-fixed");
btn.classList.add("btn-app");
btn.textContent = "NUTRIFLEX";



btnTestar.addEventListener("click", (e) => {
  e.preventDefault();
  const sectionMacros = document.getElementById("sectionMacros");
  sectionMacros.classList.add("d-flex");
  sectionMacros.classList.remove("d-none");
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  const sectionMacros = document.getElementById("sectionMacros");
  sectionMacros.classList.remove("d-flex");
  sectionMacros.classList.add("d-none");

  divDownload.appendChild(btn);
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const sectionMacros = document.getElementById("sectionMacros");
  sectionMacros.classList.add("d-flex");
  sectionMacros.classList.remove("d-none");
});

btnShowDetails.addEventListener("click", (e) => {
  e.preventDefault();

  divShow.classList.add("d-lg-flex");
  document.querySelector(".btn-close").addEventListener("click", () => {
    divShow.classList.remove("d-lg-flex");
    divShow.classList.add("d-none");
  });
});

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.75,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      showDiv();
    }
  });
}, options);

const observerDep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      showDep();
    }
  });
}, options);

observerDep.observe(divCarousel);
observer.observe(divDownload);

function showDep() {
  const divDep = document.getElementById("showCarousel");

  divDep.classList.remove("d-none");
  divDep.classList.add("d-flex");
}

function showDiv() {
  const divImg = document.getElementById("container-Img");
  const divTextDownload = document.getElementById("container-text-download");

  divImg.classList.add("d-sm-block");
  divTextDownload.classList.remove("d-none");
  divTextDownload.classList.add("d-flex");
}
//SCRIPT JS

//SHOW LISTA DE ALIMENTOS
const containerLista = document.getElementById('container-listas');
const btnListaAlimentos = document.getElementById('imgListaAlimentos');
let clickBtnLista = false;
btnListaAlimentos.addEventListener('click', (e) =>{
  e.preventDefault();
  console.log('CLICOU BTN LISTA')
  if(!clickBtnLista){
  containerLista.classList.add('d-block');
  containerLista.classList.remove('d-none');
    clickBtnLista = true;
  }
  else if(clickBtnLista){
    containerLista.classList.add('d-none');
    containerLista.classList.remove('d-block');
  clickBtnLista = false;
  }
})

//FIM SHOW LISTA DE ALIMENTOS



}

// INCLUE CLASSES PARA APARECER A TABELA/ANIMAÇÕES

const formQtd = document.getElementById('formQtd');

export function showInputNumber() {
  let showAnimation = document.getElementById('showAnimation');
  showAnimation.classList.remove('d-none');
  showAnimation.classList.add('d-flex');
  showAnimation.classList.add('z-3');
  setTimeout(() => {
    showAnimation.classList.remove('d-flex');
    showAnimation.classList.add('d-none');
    showAnimation.classList.remove('z-3');
  }, 3500);

  formQtd.classList.remove('d-none');
  formQtd.classList.add('d-flex');
}

// FIM INCLUE CLASSES PARA APARECER A TABELA/ANIMAÇÕES
