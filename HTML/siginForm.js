const signModal = document.getElementById("signinModal");
const signinLink = document.getElementById("signinLink");
const closeSignin = document.getElementsByClassName("close-signin")[0];
const siginFormContainer = document.getElementsByClassName("signin-modal-content")[0];

// Обработчик события для закрытия модального окна при клике на крестик
closeSignin.addEventListener("click", () => {  
    siginFormContainer.style.transform = 'translateY(0rem)';
    setTimeout(()=>{
        siginFormContainer.style.transform = 'translateY(-36rem)';
    }, 10);
    setTimeout(()=>{signModal.style.display = "none"},510);
  });

// Обработчик события для закрытия модального окна при клике за его пределами
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        siginFormContainer.style.transform = 'translateY(0rem)';
      setTimeout(()=>{
        siginFormContainer.style.transform = 'translateY(-36rem)';
      }, 10);
      setTimeout(()=>{signModal.style.display = "none"},510);
    }
  });

  // Обработчик события для открытия модального окна при клике на ссылку
signinLink.addEventListener("click", (event) => {
    event.preventDefault();
    signModal.style.display = "block";
    siginFormContainer.style.transform = 'translateY(-36rem)';
    setTimeout(()=>{
        siginFormContainer.style.transform = 'translateY(0rem)';
    }, 10);
  });
  