const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
let direction = -1;
const numSlides = slider.childElementCount;

let translateAmount = `${100/numSlides}%`;


carousel.style.cssText = `
                         width:100%;
                         height: 100%;
                         display: grid;
                         grid-template: 1fr / 100%;
                         position: relative;
                         justify-items = start;
                         overflow: hidden;
                        `;

slider.style.cssText = `
                      height: 100%;
                      width: ${numSlides * 100}%;
                      display: grid;
                      grid-template-columns: repeat(${numSlides}, ${1/numSlides}fr);
                      transition: all 0.5s;
                      `;

slider.addEventListener('click', (e) => {
  const next = e.target.classList.contains('next');
  const prev = e.target.classList.contains('prev');

  if (next) {

      if (direction === 1) {
        slider.prepend(slider.lastElementChild);
        carousel.style.justifyItems = 'start';
      }
      direction = -1;
      slider.style.transform = `translateX(-${translateAmount})`;

  } else if (prev) {

      if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
        carousel.style.justifyItems = 'end';
      }
      slider.style.transform = `translateX(${translateAmount})`;

  }
});


slider.addEventListener('transitionend', function() {
  if (direction === 1) {
    //move the last element to the start
    slider.prepend(slider.lastElementChild);
  } else {
     //move the first element to the end
     console.log('about to add first child');
     slider.appendChild(slider.firstElementChild);
  }

  //stops animating the transition back to 0
  slider.style.transition = 'none';
  //reset the slider element to the starting position
  slider.style.transform = 'translate(0)';

  //delay the setting of the transition
  setTimeout(function() {
    //add back the animation of the slider
    slider.style.transition = 'all 0.5s';
  })

}, false);