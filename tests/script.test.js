const { initNavToggle, marcarEnlaceActivo } = require('../js/script.js');

function setLocationPath(pathname) {
  window.history.pushState({}, '', pathname);
}

describe('initNavToggle', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button class="nav-toggle">Menú</button>
      <nav class="main-nav"></nav>
    `;
  });

  test('abre el menú al hacer clic (agrega la clase open)', () => {
    initNavToggle();
    document.querySelector('.nav-toggle').click();
    expect(document.querySelector('.main-nav').classList.contains('open')).toBe(true);
  });

  test('cierra el menú en el segundo clic (quita la clase open)', () => {
    initNavToggle();
    var boton = document.querySelector('.nav-toggle');
    boton.click();
    boton.click();
    expect(document.querySelector('.main-nav').classList.contains('open')).toBe(false);
  });

  test('no falla si falta el botón', () => {
    document.body.innerHTML = '<nav class="main-nav"></nav>';
    expect(() => initNavToggle()).not.toThrow();
  });

  test('no falla si falta el nav', () => {
    document.body.innerHTML = '<button class="nav-toggle">Menú</button>';
    expect(() => initNavToggle()).not.toThrow();
  });
});

describe('marcarEnlaceActivo', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="main-nav">
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="historia.html">Historia</a></li>
          <li><a href="companias.html">Compañías</a></li>
        </ul>
      </nav>
    `;
  });

  test('marca como activo solo el enlace que coincide con la página actual', () => {
    setLocationPath('/historia.html');
    marcarEnlaceActivo();

    var enlaces = document.querySelectorAll('.main-nav a');
    expect(enlaces[0].classList.contains('active')).toBe(false);
    expect(enlaces[1].classList.contains('active')).toBe(true);
    expect(enlaces[2].classList.contains('active')).toBe(false);
  });

  test('usa index.html cuando la ruta termina en /', () => {
    setLocationPath('/');
    marcarEnlaceActivo();

    expect(document.querySelector('a[href="index.html"]').classList.contains('active')).toBe(true);
  });
});

describe('cableado en DOMContentLoaded', () => {
  test('al disparar DOMContentLoaded, se inicializa el toggle y se marca el enlace activo', () => {
    document.body.innerHTML = `
      <button class="nav-toggle">Menú</button>
      <nav class="main-nav">
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="historia.html">Historia</a></li>
        </ul>
      </nav>
    `;
    setLocationPath('/historia.html');

    document.dispatchEvent(new Event('DOMContentLoaded'));
    document.querySelector('.nav-toggle').click();

    expect(document.querySelector('.main-nav').classList.contains('open')).toBe(true);
    expect(document.querySelector('a[href="historia.html"]').classList.contains('active')).toBe(true);
  });
});
