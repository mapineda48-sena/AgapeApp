document.addEventListener("DOMContentLoaded", function () {
  // Encuentra todos los enlaces en el documento
  document.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();

      const href = (e as any)?.target?.href;

      window.parent.postMessage(href, "*");
    });
  });
});

