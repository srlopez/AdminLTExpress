$(function() {
    "use strict";
    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue'
    });
    //When unchecking the checkbox
    $("#check-all").on('ifUnchecked', function(event) {
        //Uncheck all checkboxes
        $("input[type='checkbox']", ".table-mailbox").iCheck("uncheck");
    });
    //When checking the checkbox
    $("#check-all").on('ifChecked', function(event) {
        //Check all checkboxes
        $("input[type='checkbox']", ".table-mailbox").iCheck("check");
    });
    //Handle starring for glyphicon and font awesome
    $(".fa-star, .fa-star-o, .glyphicon-star, .glyphicon-star-empty").click(function(e) {
        e.preventDefault();
        //detect type
        var glyph = $(this).hasClass("glyphicon");
        var fa = $(this).hasClass("fa");
        //Switch states
        if (glyph) {
            $(this).toggleClass("glyphicon-star");
            $(this).toggleClass("glyphicon-star-empty");
        }
        if (fa) {
            $(this).toggleClass("fa-star");
            $(this).toggleClass("fa-star-o");
        }
    });
    //Initialize WYSIHTML5 - text editor
    $("#email_message").wysihtml5();
});

