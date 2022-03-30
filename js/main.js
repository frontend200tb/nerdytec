/*******************
Animation
*******************/

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
      change.target.classList.add('anim');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

/*******************
Translate internationalization
*******************/
import i18Obj from './translate.js';

const langs = document.querySelectorAll('.lang');
const langElements = document.querySelectorAll('[data-i18]');

langs.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    getTranslate(e.target.dataset.lang);
  });
  elem.addEventListener('click', changeLangClassActive);
})


function getTranslate(ln) {
  langElements.forEach((elem) => {
    let k = elem.dataset.i18;
    elem.textContent = i18Obj[ln][k];
    if (elem.placeholder) {
      elem.placeholder = i18Obj[ln][elem.dataset.i18];
      elem.textContent = '';
    }
  });
}

function changeLangClassActive(event) {
  langs.forEach((elem) => {
    elem.classList.remove('lang-active');
  });
  event.target.classList.add('lang-active');
}

