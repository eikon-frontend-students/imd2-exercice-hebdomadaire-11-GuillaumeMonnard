var toggleBtn = document.querySelector(".likeBtn");
var text = document.querySelector("buttonNbr");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("is-active");
  if (toggleBtn.classList.contains("is-active")) {
    text.textContent = 1000;
  }
});
