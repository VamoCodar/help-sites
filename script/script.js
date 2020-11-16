let contadorAnterior = 0;
let contador = 1;
let primeira = document.querySelector('.card0 ')
let proxima = document.querySelector(`.card${contador}`)
let anterior = document.querySelector(`.card${contadorAnterior}`);

//ida
function trocaDireito() {
    if (contador <= 2 && anterior.getAttribute("data-target", "block")) {
        anterior.setAttribute("data-target", "none")
        proxima.setAttribute("data-target", "block")
        contador += 1
        contadorAnterior += 1

    } else {
        anterior.setAttribute("data-target", "none")
        primeira.setAttribute("data-target", "block")
        contador = 1
        contadorAnterior = 0
    }
    proxima = document.querySelector(`.card${contador}`)
    anterior = document.querySelector(`.card${contadorAnterior}`);
    console.log(contador, contadorAnterior);
    conta();

}

//volta
function trocaEsquerda() {
    if (contadorAnterior > 0) {
        contador -= 1
        contadorAnterior -= 1
    }
    proxima = document.querySelector(`.card${contador}`)
    anterior = document.querySelector(`.card${contadorAnterior}`);
    anterior.setAttribute("data-target", "block")
    proxima.setAttribute("data-target", "none")
    console.log(contador, contadorAnterior);
    anterior.setAttribute("data-target", "animacao")


    conta();
}

//seleção dos botoes
const botaoDireito = document.querySelectorAll(".right");
const botaoEsquerdo = document.querySelectorAll(".left");


//counter
let counter = document.querySelector(".counter")

function conta() {
    counter.innerHTML = `${contador}/3`
}






//scrroll-baixo
function initScroolSuave() {
    const linksInternos = document.querySelector('.arrow ');
    const linksInternos2 = document.querySelector('.arrow-up ');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

    }

    linksInternos.addEventListener("click", scrollToSection);
    linksInternos2.addEventListener("click", scrollToSection);
}
initScroolSuave();



//scrroll-baixo
function initScroolSuave2() {
    const linksInternos2 = document.querySelectorAll('.menu-open ul li');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

    }
    linksInternos2.forEach((i) => i.addEventListener("click", scrollToSection));

}
initScroolSuave2();

//add class ativo 
let menu = document.querySelector('.menu ')
let body = document.querySelector('body')
let menuOpen = document.querySelector('.menu-open ')
let intro = document.querySelector('.intro ')


function active() {
    body.classList.toggle('ativo')
}

function fecha(click) {
    if (click.target != menuOpen && click.target != menu) {
        menuOpen.setAttribute("style", "animation: opaciti-volta2 300ms both ease;");


        setTimeout(() => {
            body.classList.remove('ativo')
            menuOpen.removeAttribute("style", "animation: opaciti-volta 400ms both ease;");
        }, 300);


    }

    console.log(click.target);
}




//scrroll-menu



//eventos
menu.addEventListener("click", active);
document.addEventListener("click", fecha);

botaoDireito.forEach((botao) => botao.addEventListener("click", trocaDireito));
botaoEsquerdo.forEach((botao) => botao.addEventListener("click", trocaEsquerda));