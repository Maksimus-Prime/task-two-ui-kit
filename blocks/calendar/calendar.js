import "jquery-ui/ui/widgets/datepicker";
import "jquery-ui/themes/base/datepicker.css";
import es6bindall from "es6bindall";

class Calendar {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["findInnerCalendarElements", "changeDatepickerFunc", "initCalendar"];
    es6bindall(this, this.bindMethods);
    this.findInnerCalendarElements();
    this.initCalendar();
  }
  findInnerCalendarElements() {
    this.calendarHeader = $(this.domEl).find(".js-calendar__header");
    this.calendarDatePicker = $(this.domEl).find(".js-calendar__datepicker");
  }
  initCalendar() {
    this.$currentDay = $.datepicker.formatDate("d", new Date());
    $(this.calendarHeader).html(this.$currentDay);
    $(this.calendarDatePicker).datepicker({
      showOtherMonths: true,
      firstDay: 1,
      dayNamesMin: ["SUN", "MON", "TUE", "WED", "THU", "FRD", "SAT"],
      dateFormat: "d",
      showButtonPanel: true,
      onSelect(selectedDate) {
        $(".js-calendar__header").html(selectedDate);
      },
    });
  }
  changeDatepickerFunc() {
    const { calendarHeader } = this;
    /* eslint-disable no-unused-vars, func-names, no-underscore-dangle, no-multi-assign */
    $.datepicker._gotoToday = function (id) {
      const target = $(id);
      const inst = this._getInst(target[0]);
      if (this._get(inst, "gotoCurrent") && inst.currentDay) {
        inst.selectedDay = inst.currentDay;
        inst.drawMonth = inst.selectedMonth = inst.currentMonth;
        inst.drawYear = inst.selectedYear = inst.currentYear;
      } else {
        const date = new Date();
        inst.selectedDay = date.getDate();
        inst.drawMonth = inst.selectedMonth = date.getMonth();
        inst.drawYear = inst.selectedYear = date.getFullYear();
        // the below two lines are new
        const $currentDay = $.datepicker.formatDate("d", new Date());
        $(calendarHeader).html($currentDay);
      }
      this._notifyChange(inst);
      this._adjustDate(target);
    };
    /* eslint-disable no-unused-vars, func-names, no-underscore-dangle, no-multi-assign */
  }
}

$(".js-calendar").each(function () {
  const currentCalendar = this;
  const el = new Calendar(currentCalendar);
});
