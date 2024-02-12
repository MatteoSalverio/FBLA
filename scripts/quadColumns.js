// Changes the orientation of the columns on pages based on the width of the screen to keep content visisble
let quadColumnContainers = document.getElementsByClassName("quadColumnContainer");
let quadColumns = document.getElementsByClassName("quadColumn");

function setColumnsToVertical() {
    for (let i = 0; i < quadColumnContainers.length; i++)
        quadColumnContainers[i].style.display = "unset";
    for (let i = 0; i < quadColumns.length; i++)
        quadColumns[i].style.width = "60%";
}

function setColumnsToHorizontal() {
    for (let i = 0; i < quadColumnContainers.length; i++)
        quadColumnContainers[i].style.display = "flex";
    for (let i = 0; i < quadColumns.length; i++)
        quadColumns[i].style.width = "20%";
}