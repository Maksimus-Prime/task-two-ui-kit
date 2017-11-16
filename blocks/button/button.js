import es6bindall from "es6bindall";

class Button {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initEventHandlers"];
    es6bindall(this, this.bindMethods);
    this.initEventHandlers();
  }
  initEventHandlers() {
    $(this.domEl).click(function(e) {
      const ripple = $(this);
      if(ripple.find(".effect").length == 0) {
        ripple.append("<span class='effect'></span>");
      }
      const efekt = ripple.find(".effect");
      efekt.removeClass("replay");
      if(!efekt.height() && !efekt.width())
      {
        const d = Math.max(ripple.outerWidth(), ripple.outerHeight());
        efekt.css({height: d/4, width: d/4});
      }
      const x = e.pageX - ripple.offset().left - efekt.width()/2;
      const y = e.pageY - ripple.offset().top - efekt.height()/2;
      efekt.css({
        top: y + "px",
        left: x + "px"
      }).addClass("replay");
    });
  }
}

$(".js-button").each(function() {
  const currentButton = $(this)[0];
  const el = new Button(currentButton);
});