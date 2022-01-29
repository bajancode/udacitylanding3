const navbar = document.getElementById("navbar")
const navList = document.getElementById("nav_list");
const sections = Array.from(document.getElementsByTagName("section"));
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

//Helper Functions

//Checks if an element is in the viewport, see ReadMe for source
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

//Formats section ids for nav bar
function formatId(str) {
    let spacedString = str.slice(0,-1) + " " + str.slice(-1);
    return spacedString.toUpperCase()
 }


//Makes navigation bar <li> from section id names
function makeLi(sections) {
    for(let section of sections) {
        let li = document.createElement("li")
        //adds links and text to each newly created list item
        li.innerHTML += `<a class="menu_link" data=${section.id} href=#${section.id}>${formatId(section.id)}</a>`
        navList.appendChild(li)
    }
}

makeLi(sections);


//Makes the nav-bar stick to top of the page
window.onscroll = function() {
    stickyNav()
};

//Position of the navbar
const sticky = navbar.offsetTop;

//Add sticky class to navbar when reaching scroll position, and removes when you leave scroll
function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

//On scroll, adds active-class to section and nav item if section is in viewport
document.addEventListener('scroll', function () {
    for(let i=0; i < sections.length; i++) {
        let section = sections[i];

        if (isInViewport(section)) {
            section.classList.add("active-class");
            document.querySelector(`[data=${section.id}]`).classList.add("active-nav");
        } else {
            section.classList.remove("active-class");
            document.querySelector(`[data=${section.id}]`).classList.remove("active-nav")
        }
}})



