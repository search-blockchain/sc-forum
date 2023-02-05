
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
