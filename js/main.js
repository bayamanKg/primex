const modal = document.querySelector(".modal");
const connectBtn = document.querySelector(".connect-btn");
const x = document.querySelector(".x");

//Модальное окно
connectBtn.addEventListener("click", () => {
  modal.classList.add("modal-open");
});

x.addEventListener("click", () => {
  modal.classList.remove("modal-open");
});

document.body.addEventListener("keydown", (klava) => {
  if (klava.key === "Escape") {
    modal.classList.remove("modal-open");
  }
});

// Бургер
const burger = document.querySelector(".burger");
const link = document.querySelector(".link");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-open");
  link.classList.toggle("link-open");
});
