require('jquery');
require('jquery-ui');
import "jquery-ui/ui/widgets/datepicker"
import "jquery-ui/themes/base/datepicker.css"
require("./calendar.less");

$('.calendar__header').each(function(i){
	var currentDay = $.datepicker.formatDate('d', new Date());
	var headerBlock = $(this).html(currentDay);
});
$('.calendar__bottom').each(function(i){
	var currentDay = $.datepicker.formatDate('d', new Date());
	var bottomBlock = $(this).html('Today');
});
$('.calendar__datepicker').each(function(i){
	var currentDay = $.datepicker.formatDate('d', new Date());
	$(this).datepicker({
		showOtherMonths: true,
		firstDay: 1,
		dayNamesMin: ["SUN","MON","TUE","WED","THU","FRD","SAT"],
		dateFormat: 'd',
		onSelect: function(selectedDate) {
			var headerBlock = $('.calendar__header').html(selectedDate);
			if(currentDay==selectedDate) {
				var bottomBlock = $('.calendar__bottom').html('Today');
			}else {
				var bottomBlock = $('.calendar__bottom').html('Another day');
			}
		}
	});
});


