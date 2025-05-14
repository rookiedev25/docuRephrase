// Placeholder for JS logic
document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileInput");
  const uploadBox = document.querySelector(".upload-box");

  uploadBox.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
      alert(
        `You selected: ${file.name}\n\n(Parsing and AI functionality coming soon!)`
      );
      // Future: Parse file, extract text, show in left panel
    }
  });
});
