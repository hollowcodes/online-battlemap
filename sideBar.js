

function minMaxSidebar() {
    $("#button").click(function(){
        if($(this).html() == "-"){
            $(this).html("+");
        }
        else{
            $(this).html("-");
        }
        $("#sideBar").slideToggle();
    });
}
