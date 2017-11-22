import "./../../frontend/vendor/select2.min.js";
import "./../../frontend/vendor/select2.min.css";
import es6bindall from "es6bindall";

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
    }).addClass("stylee");
  }
}

$(".js-drop-down__select").each(function () {
  const currentDropDown = this;
  const el = new DropDown(currentDropDown);
});
