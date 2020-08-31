

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
    var $tbl = $('<table></table>');
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

    $('#grid-overlay td').click(function() {
        $(this).toggleClass('selected');
    });

}

function hideArea() {

    var isDown = false;

    $(document).mousedown(function() {
        isDown = true;
    })
    .mouseup(function() {
        isDown = false;
    });

    $('#grid-overlay td').click(function() {
        $(this).toggleClass('hidden').toggleClass('unselected');
    });
    $('#grid-overlay td').mouseover(function() {
        if(isDown) {
            $(this).toggleClass('hidden').toggleClass('unselected');
        }
    });

}





function changeGridWidth() {
    var $gwidth = document.getElementById('gridWidth').value;
    document.documentElement.style.setProperty('--grid-width', $gwidth+"px");
}


