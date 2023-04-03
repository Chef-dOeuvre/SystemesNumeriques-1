window.onload = function() {

    // Lorsque l'utilisateur fait défiler la page, montrer ou masquer le bouton
    window.onscroll = function() {
      const topBtn = document.getElementById("top-btn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          topBtn.style.display = "block";
      } else {
          topBtn.style.display = "none";
      }
    };
    
    // Lorsque l'utilisateur clique sur le bouton, remonter en haut de la page
    document.getElementById("top-btn").addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });  
    });
    };
    
    window.addEventListener('DOMContentLoaded', function(){
      let toggle = document.querySelector('.toggle');
      let body = document.querySelector('body');
      
      console.log(toggle);
      console.log(body);
      
      if (toggle && body) {
      toggle.addEventListener('click', function(){
      console.log('Toggle clicked');
      body.classList.toggle('open');
      });
      }
      });
      
const popupLink = document.querySelector('.popup-link');
const popupOverlay = document.querySelector('.popup-overlay');

popupLink.addEventListener('click', function() {
    popupOverlay.style.display = 'block';
  });

  popupOverlay.addEventListener('click', function(event) {
    if (event.target === popupOverlay) {
      popupOverlay.style.display = 'none';
    }
  });
  