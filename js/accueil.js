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

  $(document).ready(function(){
    $(window).scroll(function(){
      let scroll = $(window).scrollTop();
      let offset = $("#element-id").offset().top;
      if (scroll >= offset) {
        $("section.imageP").css("opacity", 1 - (scroll - offset) / 400);
        $("section.projet").css("opacity", (scroll - offset) / 400);
      }
    });
  });
  