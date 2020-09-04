

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




    $('#grid-overlay td').hover(function() {
        $(this).toggleClass('hover');
    });

    $('#grid-overlay td').one('mousedown', function() {
        var checkBox = document.getElementById('hideSlider');
        if (checkBox.checked == false) {
            $(this).addClass('selected').toggleClass('unselected');
        }
        else {
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
    });
}


function hideArea() {

    var checkBox = document.getElementById('hideSlider');

    var isDown = false;
    $(document).mousedown(function() {
        isDown = true;
    })
    .mouseup(function() {
        isDown = false;
    });

    /*$('#grid-overlay td').click(function() {
        $(this).toggleClass('hidden').toggleClass('unselected').removeClass('selected');
        console.log(1);
    });*/

    $('#grid-overlay td').mouseover(function() {
        if(isDown) {
            $(this).toggleClass('hidden').toggleClass('unselected');
        }
    }).preventDefault();

    $('#grid-overlay td').mousedown(function() {
        $(this).removeClass().toggleClass('hidden');
    }).preventDefault();
}


function changeGridWidth() {
    var $gwidth = document.getElementById('gridWidth').value;
    document.documentElement.style.setProperty('--grid-width', $gwidth+"px");
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
    await sleep(2000);
    if (document.contains(document.getElementById("grid-overlay"))) {
        var table = document.getElementById("tbl");
        var tr = table.getElementsByTagName("tr");
        
        var x = 3;
        var y = 7;
        let td = tr[x].getElementsByTagName("td")[y];
        $(td).removeClass('unselected').addClass('selected');
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
}