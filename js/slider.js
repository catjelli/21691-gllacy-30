const sliderButtonFirst = document.querySelector(".slider-controls-first");
const sliderButtonSecond = document.querySelector(".slider-controls-second");
const sliderButtonThird = document.querySelector(".slider-controls-third");
const sliderItemFirst = document.querySelector(".slider-item-first");
const sliderItemSecond = document.querySelector(".slider-item-second");
const sliderItemThird = document.querySelector(".slider-item-third");
const sliderBackground = document.querySelector(".slider-wrapper");

sliderButtonSecond.addEventListener("click", function(evt) {
  evt.preventDefault();
  sliderButtonFirst.classList.remove("slider-controls-current");
  sliderButtonThird.classList.remove("slider-controls-current");
  sliderItemFirst.classList.remove("slider-item-current");
  sliderItemThird.classList.remove("slider-item-current");
  sliderButtonSecond.classList.add("slider-controls-current");
  sliderItemSecond.classList.add("slider-item-current");
  sliderBackground.classList.add("slider-wrapper-second");
  sliderBackground.classList.remove("slider-wrapper-first");
  sliderBackground.classList.remove("slider-wrapper-third");
});

sliderButtonThird.addEventListener("click", function(evt) {
  evt.preventDefault();
  sliderButtonFirst.classList.remove("slider-controls-current");
  sliderButtonSecond.classList.remove("slider-controls-current");
  sliderItemSecond.classList.remove("slider-item-current");
  sliderItemFirst.classList.remove("slider-item-current");
  sliderButtonThird.classList.add("slider-controls-current");
  sliderItemThird.classList.add("slider-item-current");
  sliderBackground.classList.add("slider-wrapper-third");
  sliderBackground.classList.remove("slider-wrapper-first");
  sliderBackground.classList.remove("slider-wrapper-second");
});

sliderButtonFirst.addEventListener("click", function(evt) {
  evt.preventDefault();
  sliderButtonSecond.classList.remove("slider-controls-current");
  sliderButtonThird.classList.remove("slider-controls-current");
  sliderItemSecond.classList.remove("slider-item-current");
  sliderItemThird.classList.remove("slider-item-current");
  sliderButtonFirst.classList.add("slider-controls-current");
  sliderItemFirst.classList.add("slider-item-current");
  sliderBackground.classList.add("slider-wrapper-first");
  sliderBackground.classList.remove("slider-wrapper-second");
  sliderBackground.classList.remove("slider-wrapper-third");
});
