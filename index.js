// const cardOverlay = document.getElementsByClassName('card-img-overlay')[0];
// console.log(cardOverlay);
// const cardBottom = document.getElementsByClassName('card-img')[0];

// cardBottom.addEventListener('mousemove', function(e) {
//     if (cardOverlay.style.display === 'none') {
//     cardOverlay.style.display = 'block';
// } else {
//     cardOverlay.style.display = 'none';
// }

// });


$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
});

const flickitySlider = document.getElementsByClassName('flickity-slider')[0];
console.log(flickitySlider);
flickitySlider.style.transform = 'translateX(0)';

// const testiDataFlickity = document.getElementsByClassName('testimonial-cards')[0];
// console.log(testiDataFlickity);

// // function checkPosition(x) {
// //     if (x.matches) {
// //         console.log(testiDataFlickity);
// //         alert('test');    }
// // }

// // var x = window.matchMedia("(max-width: 768px)");
// // checkPosition(x);

// $(document).ready(function() {
//     if($(window).width() <= 768) {
//         testiDataFlickity.setAttribute('data-flickity', '{"wrapAround": true }');
//     }
// }); 