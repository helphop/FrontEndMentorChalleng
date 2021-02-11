const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const header__nav = document.querySelector(".header__nav");
console.log(header__nav);

hamburger.addEventListener('click', () => {
  toggleClasses();
})

cross.addEventListener('click', () => {
  toggleClasses();
})

const toggleClasses = () => {
  header__nav.classList.toggle("open");
  hamburger.classList.toggle("is-hidden");
  cross.classList.toggle("is-hidden");
}