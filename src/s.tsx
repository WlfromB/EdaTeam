import React from 'react';

const TestPage = () => {
  return (
    <>
        <header>
        <img 
        src="/HTML/assets/FirstLogos/logoza 1.svg"         
        alt="Логотип фирмы: вилка и нож"
        />
        <div className="slogan">
            <a className="text-slogan">
                ГотовимЛегко                
            </a>
            <a className="text-slogan bottom" >
                Оп! И готово!                
            </a>            
        </div>
        
        <div className="login-signin">
            <a className="text-login-sigin" href="#">
                Вход/Регистрация
            </a>
        </div>        
    </header>
    <main>
        
        <section className="section-main">


            <div className="left-block">
                
                <div className="favorites-block">
                    <div className="dishes">
                    <h2>                        
                        История
                    </h2>
                    <div className="dish">
                        <p>
                            Блюдо1
                        </p>
                        <a href="#">Ссылка</a>    
                    </div>
                    <div className="dish">
                        <p>
                            Блюдо2
                        </p>
                        <a href="#">Ссылка</a>    

                    </div>
                    <div className="dish">
                        <p>
                            Блюдо3
                        </p>
                        <a href="#">Ссылка</a>    

                    </div>
                    </div>
                </div>
                

                <div className="add-recept-block">
                    <a href="#">
                        Добавить рецепт
                    </a>
                </div>
            </div>
            

            <div className="right-block">
                <img src="/HTML/assets/Icons/Аватарка профиля.svg  " alt="Аватарка профиля" className="image-profile"/>
                <p>Логин пользователя</p>
                <p>Зарегистрирован с ...</p>
                <img src="assets/Icons/heart-red-svgrepo-com.svg" alt="Переключатель на избранное: сердечко" className="image-favotites"/>
                <a href="#">История</a>
            </div>
        </section>       
    </main>
    <footer> 
        <div className="all-links-tg"> 
          <a href="#Al" className="link-tg"> 
            <img className="logo-tg" src="./assets/Icons/logo telegram.png" alt="Логотип телеграма"/> 
            <span className="link-tg-text">Саша</span> 
          </a> 
          <a href="#Ad" className="link-tg"> 
            <img className="logo-tg" src="./assets/Icons/logo telegram.png" alt="Логотип телеграма"/> 
            <span className="link-tg-text">Аделина</span> 
          </a> 
          <a href="#Na" className="link-tg"> 
            <img className="logo-tg" src="./assets/Icons/logo telegram.png" alt="Логотип телеграма"/> 
            <span className="link-tg-text">Надя</span> 
          </a> 
        </div> 
        <a href="#"> 
          <img className="logo-footer" src="./assets/Icons/logo img.png" alt="Логотип сайта"/> 
        </a> 
      </footer>
</>

  );
};

export default TestPage;

