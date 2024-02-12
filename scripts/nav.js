// Shrinks the nav menu in the header down to a button that toggles a menu
function compressNav(isCompressed) {
    if (isCompressed) {
        header.getElementsByTagName("nav")[0].style.visibility = "hidden";
        header.getElementsByTagName("navButton")[0].style.visibility = "unset";
    } else {
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
    } else { // Hide Nav Menu
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