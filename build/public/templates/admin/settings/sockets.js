
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/sockets:reconnection]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"maxReconnectionAttempts\">[[admin/settings/sockets:max-attempts]]</label>\n\t\t\t\t<input class=\"form-control\" id=\"maxReconnectionAttempts\" type=\"text\" value=\"5\" placeholder=\"[[admin/settings/sockets:default-placeholder, 5]]\" data-field=\"maxReconnectionAttempts\" />\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"reconnectionDelay\">[[admin/settings/sockets:delay]]</label>\n\t\t\t\t<input class=\"form-control\" id=\"reconnectionDelay\" type=\"text\" value=\"1500\" placeholder=\"[[admin/settings/sockets:default-placeholder, 1500]]\" data-field=\"reconnectionDelay\" />\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
