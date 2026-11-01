// Cuerpo de Bomberos de Casablanca - interacciones básicas

function initNavToggle() {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
}

function marcarEnlaceActivo() {
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initNavToggle();
  marcarEnlaceActivo();
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initNavToggle: initNavToggle,
    marcarEnlaceActivo: marcarEnlaceActivo
  };
}
