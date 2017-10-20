require("jquery");

$('.js-drop-down__select').each(function(i){
    $(this).select2({
        placeholder: "Choose An Option"
    }).addClass('stylee');
});
