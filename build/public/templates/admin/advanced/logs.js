
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
    return "<div class=\"row logs\">\n\t<div class=\"col-lg-9\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\"><i class=\"fa fa-file-text-o\"></i> [[admin/advanced/logs:logs]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<pre>" + 
      __escape(guard((context != null) ? context['data'] : null)) + 
      "</pre>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-3 acp-sidebar\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/advanced/logs:control-panel]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<button class=\"btn btn-primary\" data-action=\"reload\">\n\t\t\t\t\t<i class=\"fa fa-refresh\"></i> [[admin/advanced/logs:reload]]\n\t\t\t\t</button>\n\t\t\t\t<button class=\"btn btn-warning\" data-action=\"clear\">\n\t\t\t\t\t<i class=\"fa fa-eraser\"></i> [[admin/advanced/logs:clear]]\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
