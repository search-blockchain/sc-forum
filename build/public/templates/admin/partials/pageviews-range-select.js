
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
    return "<form role=\"form\">\n\t<fieldset>\n\t\t<div class=\"alert alert-danger hidden\">[[admin/dashboard:page-views-custom-error]]</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"startRange\">[[admin/dashboard:page-views-custom-start]]</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"date\" id=\"startRange\" name=\"startRange\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"endRange\">[[admin/dashboard:page-views-custom-end]]</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"date\" id=\"endRange\" name=\"endRange\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<p class=\"help-block\">[[admin/dashboard:page-views-custom-help]]</p>\n\t</fieldset>\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
