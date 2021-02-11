const menuIcons = document.querySelector(".menu-icons")
menuIcons.addEventListener('click', () => toggleClasses())

const toggleClasses = () => {
  document.querySelector(".header__nav").classList.toggle("open");
  document.getElementById("hamburger").classList.toggle("is-hidden");
  document.getElementById("cross").classList.toggle("is-hidden");
}