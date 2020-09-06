


function minMaxSidebar() {
    var sideBar = document.getElementsByClassName('sideBar')[0];
    var minMaxButton = document.getElementById('minMaxButton');

    $(".sideBar").slideToggle();
    if (minMaxButton.textContent == "-") {
        minMaxButton.textContent = "+";
    }
    else {
        minMaxButton.textContent = "-";
    }
}
