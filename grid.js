

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
        var npcCheckBox = document.getElementById('npcSlider');

        // normals map click
        if (hideCheckBox.checked == false && showCheckBox.checked == false && npcCheckBox.checked == false) {
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
        else if(npcCheckBox.checked == true) {
            var file = document.getElementById('tokenChooser').files[0];

            $(this).removeClass('selected');
            //$(this).append('<img src="' + filePath + '" width="20" height="20" />');
            var img = document.createElement("img");
            img.style.width = $gsize - 5 + 'px'
            img.style.height = $gsize - 5 + 'px'
            var reader = new FileReader();
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(file);
            $(this).append(img);
        }
        else {
            ;
        }
    });

    /*function readURL(input, td) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
          
            reader.onload = function(e) {
                $(td).append('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
        else {
            console.log(2);
        }
    }
      
    $("#tokenChooser").change(function() {
        $('#grid-overlay td').one('mousedown', function() {        
            readURL("#tokenChooser", '#grid-overlay td');
            console.log(1);
        });
    });

    $('#tokenChooser').change(function(){
        var frm = new FormData();
        frm.append('tokenChooser', input.files[0]);
        $.ajax({
            method: 'POST',
            address: 'images/image',
            data: frm,
            contentType: false,
            processData: false,
            cache: false
        });
    });*/
    
    //if(document.getElementById('npcSlider').checked == true) {

    /*$('#tokenChooser').on('change',function () {
        //FIX 
        $('#grid-overlay td').one('mousedown', function() {
            var file = document.getElementById('tokenChooser').files[0];

            $(this).removeClass('hidden').removeClass('selected');
            //$(this).append('<img src="' + filePath + '" width="20" height="20" />');
            var img = document.createElement("img");
            img.style.width = '25px'
            img.style.height = '25px'
            var reader = new FileReader();
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(file);
            $(this).append(img);
        });
    });*/
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
