

Please note I got the isInViewport function from: 

https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/ 



document.addEventListener('scroll', function () {
    isInViewport(navList) ?
        console.log('The box is visible in the viewport') :
        console.log('The box is not visible in the viewport');

}, {
    //This is a passive listener which boosts performance in scrolling 
    passive: true
});