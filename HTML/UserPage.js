const modal = document.getElementById("loginModal");
const loginLink = document.getElementById("loginLink");
const closeBtn = document.getElementsByClassName("close")[0];

// Обработчик события для открытия модального окна при клике на ссылку
loginLink.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "block";
});

// Обработчик события для закрытия модального окна при клике на крестик
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Обработчик события для закрытия модального окна при клике за его пределами
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});