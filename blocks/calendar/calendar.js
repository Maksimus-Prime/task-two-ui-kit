require('jquery');
require('jquery-ui');
import "jquery-ui/ui/widgets/datepicker"
import "jquery-ui/themes/base/datepicker.css"
require("./calendar.less");


var currentDay = $.datepicker.formatDate('d', new Date());
var headerBlock = $('.calendar__header').html(currentDay);
var bottomBlock = $('.calendar__bottom').html('Today');;

$('.calendar__datepicker').datepicker({
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