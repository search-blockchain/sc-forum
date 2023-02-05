
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
    return "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"[[flags:modal-title]]\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-lg\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t\t<h4 class=\"modal-title\">\n\t\t\t\t\t[[flags:modal-title]]\n\t\t\t\t</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<p class=\"lead\">\n\t\t\t\t\t[[flags:modal-body, " + 
      __escape(guard((context != null) ? context['type'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "]]\n\t\t\t\t</p>\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t<label for=\"flag-reason-spam\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-spam\" value=\"[[flags:modal-reason-spam]]\">\n\t\t\t\t\t\t\t[[flags:modal-reason-spam]]\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t<label for=\"flag-reason-offensive\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-offensive\" value=\"[[flags:modal-reason-offensive]]\">\n\t\t\t\t\t\t\t[[flags:modal-reason-offensive]]\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t<label for=\"flag-reason-other\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-other\" value=\"[[flags:modal-reason-other]]\">\n\t\t\t\t\t\t\t[[flags:modal-reason-other]]\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<textarea class=\"form-control\" id=\"flag-reason-custom\" placeholder=\"[[flags:modal-reason-custom]]\" disabled=\"disabled\"></textarea>\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary pull-right\" id=\"flag-post-commit\" disabled>[[flags:modal-submit]]</button>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
