// Cuerpo de Bomberos de Casablanca - interacciones básicas

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Marca el enlace activo según la página actual
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });

  // Formulario de voluntario: mensaje de confirmación simple (sin backend aún)
  var form = document.getElementById('form-voluntario');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-mensaje');
      if (msg) {
        msg.style.display = 'block';
        form.reset();
      }
    });
  }
});
