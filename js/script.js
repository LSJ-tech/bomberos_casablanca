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

  // Formulario de voluntario: cada compañía recibe sus postulaciones en su
  // propio correo. Para activar un correo real, reemplaza su valor acá por
  // el endpoint de Formspree de esa compañía (https://formspree.io/f/XXXXXXX).
  var ENDPOINTS_COMPANIA = {
    '1': null,        // PENDIENTE: Formspree de la Primera Compañía
    '2': null,        // PENDIENTE: Formspree de la Segunda Compañía
    '3': null,        // PENDIENTE: Formspree de la Tercera Compañía
    '4': null,        // PENDIENTE: Formspree de la Cuarta Compañía
    'brigada': null   // PENDIENTE: Formspree de la Brigada Las Dichas
  };

  var form = document.getElementById('form-voluntario');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var mensajeOk = document.getElementById('form-mensaje');
      var mensajePendiente = document.getElementById('form-pendiente');
      var mensajeError = document.getElementById('form-error');
      [mensajeOk, mensajePendiente, mensajeError].forEach(function (el) {
        if (el) el.style.display = 'none';
      });

      var compania = form.elements['compania'].value;
      var endpoint = ENDPOINTS_COMPANIA[compania];

      if (!endpoint) {
        if (mensajePendiente) mensajePendiente.style.display = 'block';
        return;
      }

      fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      })
        .then(function (response) {
          if (response.ok) {
            if (mensajeOk) mensajeOk.style.display = 'block';
            form.reset();
          } else if (mensajeError) {
            mensajeError.style.display = 'block';
          }
        })
        .catch(function () {
          if (mensajeError) mensajeError.style.display = 'block';
        });
    });
  }
});
