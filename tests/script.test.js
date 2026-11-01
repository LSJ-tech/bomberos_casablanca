const {
  ENDPOINTS_COMPANIA,
  initNavToggle,
  marcarEnlaceActivo,
  initFormularioVoluntario
} = require('../js/script.js');

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

  test('no falla si falta el botón o el nav', () => {
    document.body.innerHTML = '<nav class="main-nav"></nav>';
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

describe('initFormularioVoluntario', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="form-mensaje" style="display:none;"></div>
      <div id="form-pendiente" style="display:none;"></div>
      <div id="form-error" style="display:none;"></div>
      <form id="form-voluntario">
        <select name="compania">
          <option value="1">Primera</option>
        </select>
        <input type="text" name="nombre" value="Juan">
      </form>
    `;
    global.fetch = jest.fn();
  });

  afterEach(() => {
    ENDPOINTS_COMPANIA['1'] = null;
    jest.resetAllMocks();
  });

  test('no falla si no existe el formulario en la página', () => {
    document.body.innerHTML = '';
    expect(() => initFormularioVoluntario()).not.toThrow();
  });

  test('sin endpoint configurado, muestra el aviso de "correo pendiente" y no llama a fetch', () => {
    initFormularioVoluntario();
    document.getElementById('form-voluntario').dispatchEvent(new Event('submit', { cancelable: true }));

    expect(document.getElementById('form-pendiente').style.display).toBe('block');
    expect(document.getElementById('form-mensaje').style.display).toBe('none');
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test('con endpoint y respuesta exitosa, muestra el mensaje de confirmación y resetea el formulario', async () => {
    ENDPOINTS_COMPANIA['1'] = 'https://formspree.io/f/mock';
    global.fetch.mockResolvedValue({ ok: true });

    initFormularioVoluntario();
    var form = document.getElementById('form-voluntario');
    var resetSpy = jest.spyOn(form, 'reset');
    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(global.fetch).toHaveBeenCalledWith(
      'https://formspree.io/f/mock',
      expect.objectContaining({ method: 'POST' })
    );

    await new Promise(process.nextTick);

    expect(document.getElementById('form-mensaje').style.display).toBe('block');
    expect(resetSpy).toHaveBeenCalled();
  });

  test('con endpoint y respuesta de error del servidor, muestra el mensaje de error', async () => {
    ENDPOINTS_COMPANIA['1'] = 'https://formspree.io/f/mock';
    global.fetch.mockResolvedValue({ ok: false });

    initFormularioVoluntario();
    document.getElementById('form-voluntario').dispatchEvent(new Event('submit', { cancelable: true }));

    await new Promise(process.nextTick);

    expect(document.getElementById('form-error').style.display).toBe('block');
    expect(document.getElementById('form-mensaje').style.display).toBe('none');
  });

  test('si fetch falla por red, muestra el mensaje de error', async () => {
    ENDPOINTS_COMPANIA['1'] = 'https://formspree.io/f/mock';
    global.fetch.mockRejectedValue(new Error('network error'));

    initFormularioVoluntario();
    document.getElementById('form-voluntario').dispatchEvent(new Event('submit', { cancelable: true }));

    await new Promise(process.nextTick);

    expect(document.getElementById('form-error').style.display).toBe('block');
  });
});
