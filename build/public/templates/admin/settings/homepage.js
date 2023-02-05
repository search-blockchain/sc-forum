
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/homepage:home-page]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<p>\n\t\t\t[[admin/settings/homepage:description]]\n\t\t</p>\n\t\t<form class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<label for=\"homePageRoute\">[[admin/settings/homepage:home-page-route]]</label>\n\t\t\t\t<select id=\"homePageRoute\" class=\"form-control\" data-field=\"homePageRoute\">\n\t\t\t\t\t" + 
      compiled.blocks['routes'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</select>\n\t\t\t\t<div id=\"homePageCustom\" style=\"display: none;\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for=\"homePageCustomInput\">[[admin/settings/homepage:custom-route]]</label>\n\t\t\t\t\t<input id=\"homePageCustomInput\" type=\"text\" class=\"form-control\" data-field=\"homePageCustom\"/>\n\t\t\t\t\t<p class=\"help-block\">[[user:custom_route_help]]</p>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowUserHomePage\">\n\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/homepage:allow-user-home-pages]]</strong></span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<label for=\"homePageTitle\">[[admin/settings/homepage:home-page-title]]</label>\n\t\t\t\t<input id=\"homePageTitle\" class=\"form-control\" type=\"text\" data-field=\"homePageTitle\" placeholder=\"[[pages:home]]\">\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n\n";
  }

  compiled.blocks = {
    'routes': function routes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['routes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['routes'] != null && context['routes'][key0] != null) ? context['routes'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['routes'] != null && context['routes'][key0] != null) ? context['routes'][key0]['name'] : null)) + 
          "</option>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
