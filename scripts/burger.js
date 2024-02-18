const burger = document.querySelector(".burger");
const menu__list = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu__list.classList.toggle("active");
})

document.querySelectorAll(".menu__list-el").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    menu__list.classList.remove("active");
}))