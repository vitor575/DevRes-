let carinho = document.querySelector(".carinho-chamar");

carinho.addEventListener('click', function () {
    let carinho__container = document.querySelector(".carinho");
    carinho__container.classList.remove("carinho__invisivel");
})

let carinho_out = document.querySelector(".carinho__button");

carinho_out.addEventListener('click', function () {
    let carinho__container = document.querySelector('.carinho');
    carinho__container.classList.add("carinho__invisivel");
})