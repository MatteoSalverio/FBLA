let header = document.getElementsByTagName("header")[0];
let parallaxElements = document.getElementsByClassName("parallax");
let navMenu = header.getElementsByTagName("navMenu")[0];

document.addEventListener("scroll", function () { // Checks for scrolling
    onScroll();
});

// Manages the parallax effect on all parallax class elements
let lastY = 0;
function onScroll() {
    changeHeaderColor();
    let y = window.scrollY;
    let diff = y - lastY;
    for (let i = 0; i < parallaxElements.length; i++) {
        let startPos = parallaxElements[i].style.backgroundPositionY.replace("px", "") * 1;
        parallaxElements[i].style.backgroundPositionY = `${startPos + (diff * 0.35)}px`;
    }
    lastY = y;
}
onScroll();

// Changes opacity of the header element based on how far down you are on the page
function changeHeaderColor() {
    if (window.scrollY > 20)
        header.style.backgroundColor = "var(--Warm-White)";
    else
        header.style.backgroundColor = "var(--Warm-White-Transparent)";
}

// Changes the orientation of the columns on pages based on the width of the screen to keep content visisble
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

// Shrinks the nav menu in the header down to a button that toggles a menu
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

// Toggles the visibility of the navigation menu
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

// Closes the nav menu when you click somewhere else
document.addEventListener("click", function (e) {
    // Check if the click was not on the button and hide the nav menu
    if (e.target.classList[0] != "preventClose") {
        if (navMenu.style.visibility != "hidden")
            toggleNavMenu();
    }
});

// Runs all compresstion actions when the screen width is smaller than 1000px
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