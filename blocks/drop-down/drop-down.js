import "./../../frontend/vendor/select2.min.js";
import "./../../frontend/vendor/select2.min.css";

$(".js-drop-down__select").each(function(){
  $(this).select2({
    placeholder: "Choose An Option"
  }).addClass("stylee");
});
