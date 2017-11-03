import "jquery-ui/ui/widgets/datepicker";
import "jquery-ui/themes/base/datepicker.css";

$('.js-calendar__header').each(function(i){
    var $currentDay = $.datepicker.formatDate('d', new Date());
    $(this).html($currentDay);
});
$('.js-calendar__datepicker').each(function(i){
    $(this).datepicker({
        showOtherMonths: true,
        firstDay: 1,
        dayNamesMin: ["SUN","MON","TUE","WED","THU","FRD","SAT"],
        dateFormat: 'd',
        showButtonPanel: true,
        onSelect: function(selectedDate) {
            $('.js-calendar__header').html(selectedDate);
        }
    });
});
$.datepicker._gotoToday = function(id) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
            inst.selectedDay = inst.currentDay;
            inst.drawMonth = inst.selectedMonth = inst.currentMonth;
            inst.drawYear = inst.selectedYear = inst.currentYear;
    }
    else {
            var date = new Date();
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            // the below two lines are new
		    var $currentDay = $.datepicker.formatDate('d', new Date());
		    $('.js-calendar__header').html($currentDay);            
    }
    this._notifyChange(inst);
    this._adjustDate(target);
}