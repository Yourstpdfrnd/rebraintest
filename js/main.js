"use strict";

var menuBtn = document.querySelector('.menu-icon-wrapper');
var menuIcon = document.querySelector('.menu-icon');
var menuMobile = document.querySelector('.header__nav-mobile');
menuBtn.addEventListener('click', function () {
  menuIcon.classList.toggle('active');
  menuMobile.classList.toggle('active');
});
"use strict";

var accordions = document.querySelectorAll('.faq-accordion');
accordions.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var self = e.currentTarget;
    var control = self.querySelector('.faq-accordion__control');
    var content = self.querySelector('.faq-accordion__content');
    self.classList.toggle('open'); // если открыт аккордеон

    if (self.classList.contains('open')) {
      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
      content.style.maxHeight = null;
    }
  });
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
