
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
    return "<div class=\"form-group\">\n\t<input class=\"form-control\" type=\"text\" placeholder=\"[[global:user-search-prompt]]\" />\n\t<p class=\"text-danger\"></p>\n\t<p class=\"help-block\">[[modules:chat.add-user-help]]</p>\n\n\t<hr />\n\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\"><i class=\"fa fa-spinner fa-spin\"></i> [[modules:chat.retrieving-users]]</li>\n\t</ul>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
