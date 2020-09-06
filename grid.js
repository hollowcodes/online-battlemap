

function createGrid() {
    if (document.contains(document.getElementById("grid-overlay"))) {
        document.getElementById("grid-overlay").remove();
    } 
    
    var $gsize = document.getElementById('boxSize').value;

    var $src = $('#grid-source');
    var $wrap = $('<div id="grid-overlay"></div>');

    var imgWidth = $src.find('img').innerWidth();
    var imgHeight = $src.find('img').innerHeight();

    var $cols = Math.ceil($src.find('img').innerWidth() / $gsize);
    var $rows = Math.ceil($src.find('img').innerHeight() / $gsize);

    // create overlay
    var $tbl = $('<table id="tbl"></table>');
    for (var y = 1; y <= $rows; y++) {
        var $tr = $('<tr></tr>');

        for (var x = 1; x <= $cols; x++) {
            var $td = $('<td></td>');
            $td.css('width', $gsize+'px').css('height', $gsize+'px');
            $td.addClass('unselected');
            $tr.append($td);
        }
        $tbl.append($tr);
    }

    $src.css('width', $cols*$gsize+'px !important').css('height', $rows*$gsize+'px !important')
    $tbl.css('width', $cols*$gsize+'px')

    // attach overlay
    $wrap.append($tbl);
    $src.after($wrap);

    // creates hover effect
    $('#grid-overlay td').hover(function() {
        $(this).toggleClass('hover');
    });

    $('#grid-overlay td').one('mousedown', function() {
        var hideCheckBox = document.getElementById('hideSlider');
        var showCheckBox = document.getElementById('showSlider');

        // normals map click
        if (hideCheckBox.checked == false && showCheckBox.checked == false) {
            $(this).addClass('selected').toggleClass('unselected');
        }
        // hides areas
        else if(hideCheckBox.checked == true) {

            $(this).addClass('hidden').toggleClass('unselected');

            var isDown = false;
            $(document).one('mousedown', function() {
                isDown = true;
            })
            .one('mouseup', function() {
                isDown = false;
            });
            $('#grid-overlay td').one('mouseover', function() {
                if(isDown) {
                    $(this).addClass('hidden').toggleClass('unselected');
                }
            });
        }
        // shows previous hidden areas
        else if (showCheckBox.checked == true) {
            $(this).removeClass('hidden').addClass('unselected');

            var isDown = false;
            $(document).one('mousedown', function() {
                isDown = true;
            })
            .one('mouseup', function() {
                isDown = false;
            });
            $('#grid-overlay td').one('mouseover', function() {
                if(isDown) {
                    $(this).removeClass('hidden').addClass('unselected');
                }
            });
        }
    });
}


// disables show-area function when activating the hide-area tool
function disableShowArea() {
    var showCheckBox = document.getElementById('showSlider');
    showCheckBox.checked = false;
}

// disables hide-area function when activating the show-area tool
function disableHideArea() {
    var hideCheckBox = document.getElementById('hideSlider');
    hideCheckBox.checked = false;
}

// changes the grid width
function changeGridWidth() {
    var $gwidth = document.getElementById('gridWidth').value;
    document.documentElement.style.setProperty('--grid-width', $gwidth+"px");
}









// sleeps for (ms * 1000) seconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// table to array test
async function test() {
    await sleep(4000);
    $(document).ready(function() {
        if (document.contains(document.getElementById("grid-overlay"))) {
            var table = document.getElementById("tbl");
            var tr = table.getElementsByTagName("tr");

            var x = 1;
            var y = 1;
            let td = tr[x].getElementsByTagName("td")[y];
            //$(td).removeClass('unselected').addClass('selected');
            //$(td).innerHTML = '<img src="images/npc_token.png" width="32" height="32" />';
            //$(td).append('<img src="images/npc_token.png" width="20" height="20" />');
            /*for(j = 0; j < 10; j++) {
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[j];
                    if (td) {
                        $(td).removeClass('unselected').addClass('selected');
                        await sleep(250);
                    }
                }
            }*/
        }
        else {
            ;
        }
    });
}

//test();
