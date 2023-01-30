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

document.addEventListener("DOMContentLoaded", function() {
  var menuToggle = document.querySelector('.menu-toggle');
  var menuHorizontal = document.querySelector('.menu-horizontal');

  menuToggle.addEventListener('click', function() {
    menuHorizontal.classList.toggle('active');
  });
});
