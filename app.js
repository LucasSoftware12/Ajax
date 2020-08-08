document.getElementById("cargar").addEventListener("click", cargarDatos);
function cargarDatos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "datos.txt", true);
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById(
        "listado"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };
  xhr.send();
}
