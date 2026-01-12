var toggleBtn = document.querySelector(".likeBtn");
let number = 147;

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("is-active");
  if (toggleBtn.classList.contains("is-active")) {
    number++;
  } else {
    number--;
  }
});
