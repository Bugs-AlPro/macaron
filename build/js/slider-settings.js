var mainSlider = tns({
  container: '.mainSlider',
  mode: 'carousel',
  swipeAngle: false,
  loop: true,
  gutter: 15,
  mouseDrag: true,
  controls: false,
  nav: false,
  fixedWidth: 270,
});

var feedbackSlider = tns({
  container: '.feedbackSlider',
  mode: 'carousel',
  swipeAngle: false,
  loop: false,
  gutter: 5,
  arrowKeys: true,
  startIndex: 0,
  mouseDrag: false,
  controls: true,
  nav: false,
  // fixedWidth: 300,
  prevButton: '.slider-navigation__btn--left',
  nextButton: '.slider-navigation__btn--right',
});

var errors = tns({
  container: '.errors-img-sm',
  mode: 'carousel',
  swipeAngle: false,
  loop: true,
  gutter: 10,
  mouseDrag: true,
  controls: false,
  nav: false,
  fixedWidth: 200,
});
