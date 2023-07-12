const googleMapsIframe = document.getElementById('GoogleMaps');

function updateIframeSize(mq) {
  if (mq.matches) {
    // Media query coincide: tamaño para dispositivos móviles
    googleMapsIframe.style.width = '90%';
    googleMapsIframe.style.height = '400px';
  } else {
    // Media query no coincide: tamaño para pantallas más grandes
    googleMapsIframe.style.maxWidth = '660px';
    googleMapsIframe.style.height = '400px';
  }
}

// Registrar el media query y agregar el listener
const mediaQuery = window.matchMedia('(max-width: 600px)');
updateIframeSize(mediaQuery); // Aplicar tamaño inicial
mediaQuery.addListener(updateIframeSize); // Actualizar tamaño en cambios

