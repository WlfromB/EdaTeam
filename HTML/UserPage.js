const modal = document.getElementById("loginModal");
const loginLink = document.getElementById("loginLink");
const closeBtn = document.getElementsByClassName("close")[0];
const loginFormContainer = document.getElementsByClassName("modal-content")[0];
const siginLink = document.getElementById("signinLink");

siginLink.addEventListener("click", (event)=>{
  event.preventDefault();
  loginFormContainer.style.transform = 'translateY(0rem)';
    setTimeout(()=>{
      loginFormContainer.style.transform = 'translateY(-36rem)';
    }, 10);
    setTimeout(()=>{modal.style.display = "none"},510);
})

// Обработчик события для открытия модального окна при клике на ссылку
loginLink.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "block";
  loginFormContainer.style.transform = 'translateY(-36rem)';
  setTimeout(()=>{
    loginFormContainer.style.transform = 'translateY(0rem)';
  }, 10);
});

// Обработчик события для закрытия модального окна при клике на крестик
closeBtn.addEventListener("click", () => {  
  loginFormContainer.style.transform = 'translateY(0rem)';
  setTimeout(()=>{
    loginFormContainer.style.transform = 'translateY(-36rem)';
  }, 10);
  setTimeout(()=>{modal.style.display = "none"},510);
});

// Обработчик события для закрытия модального окна при клике за его пределами
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    loginFormContainer.style.transform = 'translateY(0rem)';
    setTimeout(()=>{
      loginFormContainer.style.transform = 'translateY(-36rem)';
    }, 10);
    setTimeout(()=>{modal.style.display = "none"},510);
  }
});

