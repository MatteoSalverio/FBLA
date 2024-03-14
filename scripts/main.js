const header = document.getElementsByTagName("header")[0];
const navMenu = header.getElementsByTagName("navMenu")[0];
let parallaxElements = document.getElementsByClassName("parallax");

document.addEventListener("scroll", function () { // Checks for scrolling
    onScroll();
});

// Manages the parallax effect on all parallax class elements and the header color
let lastY = 0;
function onScroll() {
    changeHeaderColor();
    let y = window.scrollY;
    let diff = y - lastY;
    for (let i = 0; i < parallaxElements.length; i++) {
        let startPos = parallaxElements[i].style.backgroundPositionY.replace("vw", "") * 1;
        parallaxElements[i].style.backgroundPositionY = `${startPos + (diff * 0.035)}vw`;
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

// Runs all compresstion actions when the screen width is smaller than 1000px
function resize() {
    if (window.innerWidth <= 1000) {
        try {
            setColumnsToVertical();
        } catch {
            // No Columns Found
        }
        compressNav(true);
    }
    else {
        try {
            setColumnsToHorizontal();
        } catch {
            // No Columns Found
        }
        compressNav(false);
    }
}
resize();

window.addEventListener("resize", function () {
    resize();
});