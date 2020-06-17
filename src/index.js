import './sass/main.scss';

// horizontal scroll
var blocks = document.getElementsByClassName('block');
var container = document.getElementsByClassName('container');
var hs = new HorizontalScroll.default({
    blocks : blocks,
    container: container,
    isAnimated: true,
    springEffect: 0.8,
    skewReducer: 35
});


// animation

const heroTl = gsap.timeline();
heroTl
    .from('.brand-logo', {
        xPercent: -100,
        opacity: 0,
    })
    .from('.hero__heading, .paragraph, .cta', {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,

    })
    .from('.hero img', {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 2
    })



