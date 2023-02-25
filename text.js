let password = document.querySelector(".pass");
let confirms = document.querySelector(".conf");
let button = document.querySelector("button");
let wrong = document.querySelector(".wrong");
let right = document.querySelector(".right");
let showand = document.querySelectorAll(".click span");
let values = "";
window.addEventListener("input", function () {
  values = password.value;
  if (password.value.length >= 8) {
    button.style.background = "green";
    button.style.cursor = "pointer";
    button.style.pointerEvents = "visible";
  } else {
    button.style.background = " #00800096";
    button.style.cursor = "none";
    button.style.pointerEvents = "none";
  }
  if (confirms.value.length > 0) {
    confirms.classList.add("cli");
  } else {
    confirms.classList.remove("cli");
  }

  showand.forEach((e) => {
    e.addEventListener("click", (l) => {
      if (l.target.dataset.btn == "show") {
        confirms.type = "text";
        password.type = "text";
        showand.forEach((ele) => {
          ele.style.transform = "translateY(-28px)";
        });
      } else {
        confirms.type = "password";
        password.type = "password";

        showand.forEach((el) => {
          el.style.transform = "translateY(0px)";
        });
      }
    });
  });

  button.addEventListener("click", () => {
    if (confirms.value == values) {
      right.style.display = "flex";
      wrong.style.display = "none";
    } else {
      wrong.style.display = "flex";
      right.style.display = "none";
    }
  });
});
