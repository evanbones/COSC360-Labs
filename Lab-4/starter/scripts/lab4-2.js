document.addEventListener("DOMContentLoaded", () => {
  const bodyElement = document.querySelector("body");

  const traverseAndLabel = (node) => {
    if (node.nodeType !== 3) {
      const span = document.createElement("span");
      span.className = "hoverNode";

      span.innerHTML = node.tagName;
      node.appendChild(span);

      node.childNodes.forEach((child) => {
        if (child !== span) {
          traverseAndLabel(child);
        }
      });
    }
  };

  traverseAndLabel(bodyElement);
});
