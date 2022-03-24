function calefacion(sala) {
  switch (sala) {
    case "comedor":
      document.getElementById('pop-up').classList.add('visible');
      break;
    case "cocina":
      break;
    case "lavabo":
      break;
  }
}

function close() {
  document.getElementById('pop-up').className == 'pop-up';
}