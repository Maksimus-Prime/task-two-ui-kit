import "jquery-ui/ui/widgets/datepicker";
import "jquery-ui/themes/base/datepicker.css";
import es6bindall from "es6bindall";

class Calendar {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initCanendarElements", "initCalendar"];
    es6bindall(this, this.bindMethods);
    this.initCanendarElements();
    this.initCalendar();
  }
  initCanendarElements() {
    this.calendarHeader = $(this.domEl).find(".js-calendar__header");
    this.calendarDatePicker = $(this.domEl).find(".js-calendar__datepicker");
    this.$currentDay = $.datepicker.formatDate("d", new Date());
  }
  initCalendar() {
    $(this.calendarHeader).html(this.$currentDay);
    $(this.calendarDatePicker).datepicker({
      showOtherMonths: true,
      firstDay: 1,
      dayNamesMin: ["SUN","MON","TUE","WED","THU","FRD","SAT"],
      dateFormat: "d",
      showButtonPanel: true,
      onSelect: function(selectedDate) {
        $(".js-calendar__header").html(selectedDate);
      }
    });
    const calendarHeader = this.calendarHeader;
    $.datepicker._gotoToday = function(id) {
      var target = $(id);
      var inst = this._getInst(target[0]);
      if (this._get(inst, "gotoCurrent") && inst.currentDay) {
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
        var $currentDay = $.datepicker.formatDate("d", new Date());
        $(calendarHeader).html($currentDay);
      }
      this._notifyChange(inst);
      this._adjustDate(target);
    };
  }
}

$(".js-calendar").each(function() {
  const currentCalendar = $(this)[0];
  const el = new Calendar(currentCalendar);
});