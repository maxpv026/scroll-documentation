document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".click-to-zoom").forEach((element) => {
    element.addEventListener("click", () => {
      if (element.classList.contains("expanded")) return;

      const imgSrc = element.src;
      const wrapper = createImageWrapper(imgSrc);

      const closePreview = () => {
        wrapper.remove();
        element.classList.remove("expanded");
        document.removeEventListener("click", closePreview);
        document.removeEventListener("keyup", closeOnEscape);
      };

      const closeOnEscape = (e) => {
        if (e.key === "Escape") {
          closePreview();
        }
      };

      document.addEventListener("click", closePreview);
      document.addEventListener("keyup", closeOnEscape);

      element.insertAdjacentElement("afterend", wrapper);
    });
  });
});

function createImageWrapper(imgSrc) {
  const wrapper = document.createElement("div");
  wrapper.id = "expanded-image-wrapper";

  const img = document.createElement("img");
  img.src = imgSrc;
  img.className = "expanded";
  img.id = "expanded-image-preview";
  wrapper.appendChild(img);

  return wrapper;
}
