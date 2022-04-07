function iluminacion(x) {
  var btn_encendido = document.getElementById("btn_encendido");
  var btn_apagado = document.getElementById("btn_apagado");
  switch (x.toLowerCase()) {
    case "encender":
      var http = new XMLHttpRequest();
      http.open("GET", "http://192.168.12.236:1880/request?bombeta=true");
      http.send();

      document.getElementById("luz").innerHTML = '<span id="luz" class="status"><span class="status-circle green"></span>Encendido</span>';
  
      btn_encendido.classList.add("oculto");
      btn_apagado.classList.remove("oculto");
      break;
    case "apagar":
      var http = new XMLHttpRequest();
      http.open("GET", "http://192.168.12.236:1880/request?bombeta=false");
      http.send();

      document.getElementById("luz").innerHTML = '<span id="luz" class="status"><span class="status-circle"></span>Apagado</span>';

      btn_apagado.classList.add("oculto");
      btn_encendido.classList.remove("oculto");
      break;
  }
}

function persiana(x) {
  var btn_arriba = document.getElementById("btn_arriba");
  var btn_abajo = document.getElementById("btn_abajo");
  switch (x.toLowerCase()) {
    case "arriba":
      var http = new XMLHttpRequest();
      http.open("GET", "http://192.168.12.236:1880/request?persiana=arriba");
      http.send();

      document.getElementById("persiana").innerHTML = '<span id="persiana" class="status"><span class="status-circle green"></span>Abierta</span>';
  
      btn_abajo.classList.remove("oculto");
      btn_arriba.classList.add("oculto");
      break;
    case "abajo":
      var http = new XMLHttpRequest();
      http.open("GET", "http://192.168.12.236:1880/request?persiana=abajo");
      http.send();

      document.getElementById("persiana").innerHTML = '<span id="persiana" class="status"><span class="status-circle"></span>Cerrada</span>';

      btn_arriba.classList.remove("oculto");
      btn_abajo.classList.add("oculto");
      break;
  }
}
