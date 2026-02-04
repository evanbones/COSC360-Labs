document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.setAttribute("novalidate", true);
  const requiredFields = form.querySelectorAll("[required]");

  const showError = (field) => {
    field.classList.add("input-error");
    const nextSibling = field.nextElementSibling;
    if (!nextSibling || !nextSibling.classList.contains("error-msg")) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-msg";
      errorDiv.textContent = "This field is required";
      field.after(errorDiv);
    }
  };

  requiredFields.forEach((field) => {
    field.addEventListener("input", () => {
      if (field.value.trim() !== "") {
        clearError(field);
      }
    });

    field.addEventListener("change", () => {
      if (field.value.trim() !== "") {
        clearError(field);
      }
    });
  });

  const clearError = (field) => {
    field.classList.remove("input-error");
    const nextSibling = field.nextElementSibling;
    if (nextSibling && nextSibling.classList.contains("error-msg")) {
      nextSibling.remove();
    }
  };

  form.addEventListener("submit", (e) => {
    let isValid = true;
    requiredFields.forEach((field) => {
      if (field.value.trim() === "") {
        showError(field);
        isValid = false;
      } else {
        clearError(field);
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });
});
