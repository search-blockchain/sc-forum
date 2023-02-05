
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
    return "<div class=\"social\">\n\t<form role=\"form\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/social:post-sharing]]</div>\n\t\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t\t<div class=\"form-group\" id=\"postSharingNetworks\">\n\t\t\t\t\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t<small>[[admin/settings/social:info-plugins-additional]]</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label for=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" data-field=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" name=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['activated'] : null) ?
            "checked" :
            "") + 
          " />\n\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><i class=\"fa " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['class'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['name'] : null)) + 
          "</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
