
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
    return "<div class=\"form-group\">\n\t<label for=\"agree-terms\">[[register:terms_of_use]]</label>\n\t<div class=\"tos\">" + 
      __escape(guard((context != null) ? context['termsOfUse'] : null)) + 
      "</div>\n\t<div class=\"checkbox\">\n\t\t<label>\n\t\t\t<input type=\"checkbox\" name=\"agree-terms\" id=\"agree-terms\"> [[register:agree_to_terms_of_use]]\n\t\t</label>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
