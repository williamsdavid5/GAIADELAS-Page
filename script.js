window.addEventListener("scroll", function () {

    const scrollPos = window.scrollY;
    const elemento = document.getElementById("efeitoMenu");

    if (scrollPos > 2000) {
        elemento.style.left = "520px";
    } else if (scrollPos > 1200) {
        elemento.style.left = "375px";
    } else if (scrollPos > 200) {
        elemento.style.left = "230px";
    } else {
        elemento.style.left = "100px";
    }

    if (scrollPos > 2600) {
        elemento.style.opacity = 0;
    } else {
        elemento.style.opacity = 1;
    }

    const links = document.querySelectorAll(".menu-superior ul li a");

    if (scrollPos > 1500) {
        links.forEach(link => link.style.color = "rgb(0, 0, 0)");
    } else {
        links.forEach(link => link.style.color = "rgb(255, 255, 255)");
    }

});

// Inicializa o slide visível com base no rádio marcado
document.addEventListener('DOMContentLoaded', () => {
    const checkedRadio = document.querySelector('#radioButtons input:checked');
    if (checkedRadio) {
        const index = Array.from(document.querySelectorAll('#radioButtons input')).indexOf(checkedRadio);
        const initialSlide = document.querySelector(`#slide${index + 1}`);
        if (initialSlide) {
            initialSlide.classList.add('active');
        }
    }
});

// Configura o evento de troca para exibir o slide correspondente
document.querySelectorAll('#radioButtons input').forEach((radio, index) => {
    radio.addEventListener('change', () => {
        // Oculta todos os slides
        document.querySelectorAll('.slide').forEach(slide => {
            slide.classList.remove('active');
        });

        // Exibe o slide correspondente ao índice do rádio selecionado
        const selectedSlide = document.querySelector(`#slide${index + 1}`);
        if (selectedSlide) {
            selectedSlide.classList.add('active');
        }
    });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const radios = document.querySelectorAll('#radioButtons input');

function changeSlideAutomatically() {
    currentIndex = (currentIndex + 1) % slides.length;

    radios.forEach(radio => radio.checked = false);

    radios[currentIndex].checked = true;

    radios[currentIndex].dispatchEvent(new Event('change'));
}

setInterval(changeSlideAutomatically, 3000);