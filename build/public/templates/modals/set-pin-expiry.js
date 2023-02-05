
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"form-group\">\n\t<label for=\"expiry\">[[topic:pin-modal-expiry]]</label>\n\t<input id=\"expiry\" type=\"date\" class=\"form-control\" />\n\t<p class=\"help-block\">[[topic:pin-modal-help]]</p>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
