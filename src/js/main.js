var toggleBtn = document.querySelector(".likeBtn");
let number = document.querySelector("#buttonNbr");
let count = Number(number.textContent);
toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("is-active");
  if (toggleBtn.classList.contains("is-active")) {
    count++;
    number.textContent = count;
  } else {
    count--;
    number.textContent = count;
  }
});
