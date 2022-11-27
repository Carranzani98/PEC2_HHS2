/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import 'bootstrap';
import Glide from "@glidejs/glide"

/**
 * Write any other JavaScript below
 */

  //Inicialización y configuración del carrusel
  window.addEventListener('load', () => {
    new Glide('.carousel', {
      type: 'carousel',
      autoplay: 3000,
      perView: 3,
      focusAt: 'center',
      breakpoints: {
        1340: {
          perView: 3,
        },
        900: {
          perView: 2,
        },
        600: {
          perView: 1,
        },
      },
    }).mount()
  })