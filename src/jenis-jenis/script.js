const def1 = document.querySelector(".main-definition");
const def2 = document.querySelector(".main-definition-2");
const title = document.querySelector(".text-title");
const Toggle = document.querySelector(".toggle");

let active = false;

Toggle.addEventListener("click", () => {
  active = !active;
  if (active) {
    def1.style.display = "none";
    def2.style.display = "flex";
    title.innerHTML = "Jenis Deretan";
  } else {
    def1.style.display = "flex";
    def2.style.display = "none";
    title.innerHTML = "Jenis Barisan";
  }
});
