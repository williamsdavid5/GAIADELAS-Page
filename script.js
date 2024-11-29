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
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll("#slider .slide");
    const radios = document.querySelectorAll("#radioButtons input[type='radio']");

    // Função para exibir o slide correspondente
    const updateSlides = () => {
        slides.forEach((slide, index) => {
            slide.style.display = radios[index].checked ? "flex" : "none";
        });
    };

    // Atualiza os slides ao mudar o estado dos botões de rádio
    radios.forEach(radio => radio.addEventListener("change", updateSlides));

    // Mostra o primeiro slide ao carregar
    updateSlides();
});
