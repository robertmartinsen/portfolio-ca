var navbar = document.getElementById("nav-container");
var stick = document.getElementById("menu");

window.onscroll = function() {
    if(window.pageYOffset >= stick.offsetTop) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky")
    }
};

const navElements = document.querySelectorAll("nav ul li");
const navIndicator = document.querySelector(".indicator");

navElements.forEach( element => {
    element.addEventListener("mouseover", () => {
        positionNavIndicator(element.offsetLeft, element.offsetWidth)
    });
});


const positionNavIndicator = (left, width) => {
    navIndicator.style.left = left + "px";
    navIndicator.style.width = width + "px";
};

window.addEventListener("DOMContentLoaded", () => {
    positionNavIndicator(navElements[0].offsetLeft, navElements[0].offsetWidth)
});

window.addEventListener("resize", () => {
    positionNavIndicator(navElements[0].offsetLeft, navElements[0].offsetWidth)
});