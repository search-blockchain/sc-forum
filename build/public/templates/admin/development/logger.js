
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n<div class=\"row logger\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/development/logger:logger-settings]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/development/logger:description]]\n\t\t\t\t</p>\n\t\t\t\t<br/>\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/development/logger:explanation]]\n\t\t\t\t</p>\n\t\t\t\t<br/>\n\n\t\t\t\t<form>\n\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type=\"checkbox\" data-field=\"loggerStatus\"> <strong>[[admin/development/logger:enable-http]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<br/>\n\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type=\"checkbox\" data-field=\"loggerIOStatus\"> <strong>[[admin/development/logger:enable-socket]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<br/>\n\n\t\t\t\t\t<label for=\"loggerPath\">[[admin/development/logger:file-path]]</label>\n\t\t\t\t\t<input id=\"loggerPath\" class=\"form-control\" type=\"text\" placeholder=\"[[admin/development/logger:file-path-placeholder]]\" data-field=\"loggerPath\" />\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
