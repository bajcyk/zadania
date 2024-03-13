$(function () {
    $('ul#menu li:even').addClass('tlo1');
    $('ul#menu li:odd').addClass('tlo2');
    
    $('ul#menu li').hover(
        function() {
            $(this).addClass('wybor');
        },

        function() {
            $(this).removeClass('wybor');
        }
    );
});