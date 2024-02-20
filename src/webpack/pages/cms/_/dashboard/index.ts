import history from "history/browser";

const origin = window.location.origin;
const baseUrl = location.href.replace("/index.html", "");
const module = baseUrl.replace("/dashboard", "/module");

// 1. Crear el elemento iframe
const iframe = document.createElement("iframe");

// 2. Agregar el iframe al DOM, por ejemplo, al body del documento
document.body.appendChild(iframe);

updateSizeIFrame();

window.addEventListener("resize", updateSizeIFrame);

// Configurar la URL del iframe si es necesario, por ejemplo:
refreshIframe();

// 3. Agregar un manejador de eventos para escuchar mensajes del iframe
window.addEventListener("message", function (event) {
  const href = event.data.replace(module, baseUrl);

  history.push(href);
});

function updateSizeIFrame() {
  const { top } = iframe.getBoundingClientRect();

  const height = window.innerHeight - top;

  // Establecer atributos adicionales según sea necesario
  iframe.width = "100%";
  iframe.height = `${height}px`; // Ajusta esto según tus necesidades
}

function refreshIframe() {
  console.log("window");
  iframe.src = window.location.href.replace(baseUrl, module);
}

// Listen for changes to the current location.
let unlisten = history.listen((update) => {
  console.log("history");
  const { location } = update;

  const href = origin + location.pathname;

  iframe.src = href.replace(baseUrl, module);
});
