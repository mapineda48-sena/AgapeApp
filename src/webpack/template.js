const path = require("path");
const glob = require("glob");
const fs = require("fs-extra");
const chokidar = require("chokidar");

const isDevelopment = true;

const outDir = path.resolve("../main/resources/static");
const templateDir = path.resolve("../main/resources/templates");

if (isDevelopment) {
  // Inicializa un observador sobre un directorio y filtra por archivos HTML
  const watcher = chokidar.watch(outDir, {
    ignored: /(^|[\/\\])\../, // ignora archivos punto
    persistent: true,
  });

  // Evento para agregar archivos
  watcher.on("add", moveIfTemplate);

  // Evento para cambios en los archivos
  watcher.on("change", moveIfTemplate);

  // Eventos para estar listo
  watcher.on("ready", () =>
    console.log("Iniciando el monitoreo de archivos...")
  );
} else {
  const pages = glob
    .sync("**/*.html", { cwd: outDir })
    .map((html) => path.join(outDir, html));

  const prom = pages.map((page) => moveIfTemplate(page));
}

async function moveIfTemplate(filename) {
  if (!filename.endsWith(".html")) {
    return;
  }

  try {
    const data = await fs.readFile(filename, "utf8");

    if (!data.includes('xmlns:th="http://www.thymeleaf.org"')) {
      return;
    }

    await fs.move(filename, filename.replace(outDir, templateDir));
  } catch (error) {
    console.error(error);
  }
}
