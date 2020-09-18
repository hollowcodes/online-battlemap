

function minMaxSidebar() {
    var minMaxButton = document.getElementById('minMaxButton');

    $(".sideBar").slideToggle();
    if (minMaxButton.textContent == "-") {
        minMaxButton.textContent = "+";
    }
    else {
        minMaxButton.textContent = "-";
    }
}

// disables all switched except one (when that 'one' is clicked)
function disableSwitches(exeptSwitch) {
    var allSwitches = ["hideSlider", "showSlider", "npcSlider"]
    for (let i=0; i<allSwitches.length; i++) {
        var switchName = allSwitches[i];
        if (switchName != exeptSwitch) {
            var checkBox = document.getElementById(switchName);
            checkBox.checked = false;
        }
    }
}

// activates the 'place NPC' switch when trying to choose a token image
function activateNpcSwitch() {
    var npcSwitch = document.getElementById('npcSlider');
    npcSwitch.checked = true;
}
