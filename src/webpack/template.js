const path = require("path");
const glob = require("glob");
const fs = require("fs-extra");

const outDir = path.resolve("../main/resources/static");
const templateDir = path.resolve("../main/resources/template");

const pages = glob.sync("**/*.html", { cwd: outDir });

const prom = pages.map((page) => moveIfTemplate(page));

async function moveIfTemplate(html) {
  const filename = path.join(outDir, html);

  const data = await fs.readFile(filename, "utf8");

  if (data.includes('xmlns:th="http://www.thymeleaf.org"')) {
    return;
  }

  await fs.move(filename, filename.replace(outDir, templateDir));
}
