const text = document.querySelector(".text"),
  elForm = document.querySelector("#form"),
  elLeft = document.querySelector("#left"),
  elReset = document.querySelector("#reset"),
  elRight = document.querySelector("#right"),
  number = document.querySelector("#number");

let num = 0;
number.style.fontSize = "50px";

elLeft.addEventListener("click", function () {
  num--;
  number.textContent = num;
  number.style.color = "red";
});
elRight.addEventListener("click", function () {
  num++;
  number.textContent = num;
  number.style.color = "green";
});
elReset.addEventListener("click", function () {
  num = 0;
  number.textContent = num;
});
