import es6bindall from "es6bindall";
import "./../../frontend/vendor/select2.full.min";
import "./../../frontend/vendor/select2.min.css";

class DropDown {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initDropDown"];
    es6bindall(this, this.bindMethods);
    this.initDropDown();
  }
  initDropDown() {
    $(this.domEl).select2({
      placeholder: "Choose An Option",
    }).data("select2").$dropdown.addClass("drop-down");
  }
}

$(".js-drop-down__select").each(function () {
  const currentDropDown = this;
  const el = new DropDown(currentDropDown);
});
