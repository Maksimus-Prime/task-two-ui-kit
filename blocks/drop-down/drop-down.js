require("jquery");
require("./drop-down.less");

$('.drop-down-main').each(function(i){
	$(this).select2({
		placeholder: "Choose An Option"
	}).addClass('stylee');
});
