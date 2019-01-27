document.addEventListener("keydown", e => {
  if (e.shiftKey && e.key === "G") {
    document.body.classList.toggle("show-grid");
  }
});
