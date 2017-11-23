import es6bindall from "es6bindall";

class Button {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initClickHandler", "addRipleEffect", "findInnerElements"];
    es6bindall(this, this.bindMethods);
    this.findInnerElements();
    this.initClickHandler();
  }
  initClickHandler() {
    $(this.domEl).on("click", this.addRipleEffect);
  }
  addRipleEffect(event) {
    const $ripple = $(this.domEl);
    let $effect = $(this.effect);
    if ($effect.length === 0) {
      $ripple.append("<span class='effect js-effect'></span>");
    }
    this.findInnerElements();
    $effect = $(this.effect);
    $effect.removeClass("replay");
    if (!$effect.height() && !$effect.width()) {
      const d = Math.max($ripple.outerWidth(), $ripple.outerHeight());
      $effect.css({ height: d / 4, width: d / 4 });
    }
    const x = event.pageX - $ripple.offset().left - ($effect.width() / 2);
    const y = event.pageY - $ripple.offset().top - ($effect.height() / 2);
    $(this.effect).css({
      top: `${y}px`,
      left: `${x}px`,
    }).addClass("replay");
  }
  findInnerElements() {
    this.effect = $(this.domEl).find(".js-effect");
  }
}

$(".js-button").each(function () {
  const currentButton = this;
  const el = new Button(currentButton);
});
