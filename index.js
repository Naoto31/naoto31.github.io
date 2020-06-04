// Testimonial Cards (Thanks to https://codepen.io/YousifW/pen/LKBxZX)

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 3;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 3 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 4) {
        next = 0;
    }

    if (prev == -1) {
        prev = 3;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

// Change testimonial cards depending on a screen size
jQuery(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww > 1024) {
            $('.items').removeClass('items');
            $('.testi-card').removeClass('item');
        } else if (ww <= 1023) {
            $('.testimonial-cards').addClass('items');
            $('.testi-card').addClass('item');
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});

// Shows SNS part by clicking the picture
const contactImg = document.querySelector('.contact-img img');
const snsPart = document.getElementsByClassName('sns')[0];

contactImg.addEventListener('click', (e) => {
    snsPart.style.display ='block';
});