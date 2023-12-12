let header = document.getElementsByTagName("header")[0];
let parallaxElements = document.getElementsByClassName("parallax");
let navMenu = header.getElementsByTagName("navMenu")[0];

document.addEventListener("scroll", function () {
    onScroll();
});

function onScroll() {
    changeHeaderColor();
    for (let i = 0; i < parallaxElements.length; i++)
        parallaxElements[i].style.backgroundPositionY = `${window.scrollY * 0.25 - 200}px`;
}
onScroll();

function changeHeaderColor() {
    if (window.scrollY > 20)
        header.style.backgroundColor = "var(--Warm-White)";
    else
        header.style.backgroundColor = "var(--Warm-White-Transparent)";
}

let quadColumnContainers = document.getElementsByClassName("quadColumnContainer");
let quadColumns = document.getElementsByClassName("quadColumn");
function setColumsToVertical() {
    for (let i = 0; i < quadColumnContainers.length; i++)
        quadColumnContainers[i].style.display = "unset";
    for (let i = 0; i < quadColumns.length; i++)
        quadColumns[i].style.width = "60%";
}
function setColumsToHorizontal() {
    for (let i = 0; i < quadColumnContainers.length; i++)
        quadColumnContainers[i].style.display = "flex";
    for (let i = 0; i < quadColumns.length; i++)
        quadColumns[i].style.width = "20%";
}

function compressNav(isCompressed) {
    if (isCompressed) {
        header.getElementsByTagName("nav")[0].style.visibility = "hidden";
        header.getElementsByTagName("navButton")[0].style.visibility = "unset";
    }
    else {
        header.getElementsByTagName("nav")[0].style.visibility = "unset";
        header.getElementsByTagName("navButton")[0].style.visibility = "hidden";
    }
}

function toggleNavMenu() {
    if (navMenu.style.visibility == "hidden") { // Show Nav Menu
        navMenu.style.visibility = "unset";
        navMenu.classList.remove("slideUp");
        navMenu.classList.add("slideDown");
        header.style.backgroundColor = "var(--Warm-White)";
    }
    else { // Hide Nav Menu
        navMenu.classList.remove("slideDown");
        navMenu.classList.add("slideUp");
        setTimeout(function () { navMenu.style.visibility = "hidden"; }, 750);
        changeHeaderColor();
    }
}

document.addEventListener("click", function (e) {
    // CHECK if the click was not on the button and hide the nav menu
    //setTimeout(function () { navMenu.style.visibility = "hidden"; }, 750);
});

function resize() {
    if (window.innerWidth <= 1000) {
        setColumsToVertical();
        compressNav(true);
    }
    else {
        setColumsToHorizontal();
        compressNav(false);
    }
}
resize();

window.addEventListener("resize", function () {
    resize();
});