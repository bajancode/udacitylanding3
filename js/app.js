const navList = document.getElementById("nav_list");
const sections = Array.from(document.getElementsByTagName("section"));
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

function isInViewport(element) {
    const rectangle = element.getBoundingClientRect();
    return (
        //If the element is in the viewport, its top and left are always greater than or equal zero
        rectangle.top >= 0 &&
        rectangle.left >= 0 &&
        //If element is in viewport, its distance from the right is less than or equal to the width of the viewport
        rectangle.bottom <= viewportHeight &&
        //If element is in viewport, its distance from the bottom is less than or equal to the height of the viewport
        rectangle.right <= viewportWidth
    )

}

//This only says "section not visible"
document.addEventListener('scroll', function () {
    for(let i=0; i < sections.length; i++) {
        let section = sections[i]
        isInViewport(section) ? 
        console.log("Section visible") :
        console.log("Section not visible")
}})

//This works
document.addEventListener('scroll', function () {
    isInViewport(navList) ?
        console.log('The box is visible in the viewport') :
        console.log('The box is not visible in the viewport');

}, {
    //This is a passive listener which boosts performance in scrolling 
    passive: true
});


function formatId(str) {
   let spacedString = str.slice(0,-1) + " " + str.slice(-1)
   return spacedString.toUpperCase()
}

function makeLi(sections) {
    for(let section of sections) {
        let li = document.createElement("li")
        li.innerHTML += `<a class="menu_link" href=#${section.id}>${formatId(section.id)}</a>`
        navList.appendChild(li)
    }
}

makeLi(sections)
