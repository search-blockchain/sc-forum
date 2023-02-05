
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n<div class=\"row post-cache\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"row\">\n\t\t\t" + 
      compiled.blocks['caches'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\n\t\t</div>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n\n";
  }

  compiled.blocks = {
    'caches': function caches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['caches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">[[admin/advanced/cache:" + 
          __escape(key) + 
          "-cache]]</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"checkbox\" data-name=\"" + 
          __escape(key) + 
          "\">\n\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" " + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['enabled'] : null) ?
            "checked" :
            "") + 
          ">\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<span>" + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['length'] : null) ?
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['length'] : null)) :
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['itemCount'] : null))) + 
          " / " + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['max'] : null) ?
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['max'] : null)) :
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['maxSize'] : null))) + 
          "</span><br/>\n\n\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "%;\">\n\t\t\t\t\t\t\t\t[[admin/advanced/cache:percent-full, " + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<label>Hits:</label> <span>" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['hits'] : null)) + 
          "</span><br/>\n\t\t\t\t\t\t<label>Misses:</label> <span>" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['misses'] : null)) + 
          "</span><br/>\n\t\t\t\t\t\t<label>Hit Ratio:</label> <span>" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['hitRatio'] : null)) + 
          "</span><br/>\n\t\t\t\t\t\t" + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['ttl'] : null) ?
            "<label>TTL:</label> <span>" + 
              __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['ttl'] : null)) + 
              "</span></br>" :
            "") + 
          "\n\t\t\t\t\t\t" + 
          ((key == "post") ?
            "\n\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"postCacheSize\">[[admin/advanced/cache:post-cache-size]]</label>\n\t\t\t\t\t\t\t<input id=\"postCacheSize\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"postCacheSize\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/api/admin/advanced/cache/dump?name=" + 
          __escape(key) + 
          "\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-download\"></i></a>\n\t\t\t\t\t\t<a class=\"btn btn-sm btn-danger clear\" data-name=\"" + 
          __escape(key) + 
          "\"><i class=\"fa fa-trash\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
