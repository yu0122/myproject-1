import config from './config.js';

let index = 0;
const elems = [...config.targets];
const breakPoints = elems.map(item => item.offsetTop);
const aniTypes = ['fadeIn', 'move', 'zoom-in', 'zoom-out'];

function scrollHandler() {

  if (window.scrollY + this.innerHeight / 2 > breakPoints[index]) {
    const item = elems[index];

    aniTypes.forEach(type => {
      const value = item.classList.value.indexOf(type);

      if (value < 0) return;
      item.classList.add(`ani-${type}-active`);
    });

    index++;
  }
}

function setInit() {
  [...elems].forEach(item => {
    item.style.padding = `${config.padding}px`;
  });
}

function setEvent() {
  window.addEventListener('scroll', scrollHandler);
}

setInit();
setEvent();
