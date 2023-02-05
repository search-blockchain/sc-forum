
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
    return "<div class=\"persona-usercard\">\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\">\n\t\t" + 
      (guard((context != null) ? context['picture'] : null) ?
        "\n\t\t<div class=\"usercard-picture\" style=\"background-image:url(" + 
          __escape(guard((context != null) ? context['picture'] : null)) + 
          ")\"></div>\n\t\t" :
        "\n\t\t<div class=\"usercard-picture\" style=\"background-color: " + 
          __escape(guard((context != null) ? context['icon:bgColor'] : null)) + 
          ";\">" + 
          __escape(guard((context != null) ? context['icon:text'] : null)) + 
          "</div>\n\t\t") + 
      "\n\t</a>\n\t<div class=\"usercard-body\">\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\">\n\t\t\t<span class=\"usercard-name\">" + 
      (guard((context != null) ? context['fullname'] : null) ?
        __escape(guard((context != null) ? context['fullname'] : null)) :
        __escape(guard((context != null) ? context['username'] : null))) + 
      "</span><br />\n\t\t\t<span class=\"usercard-username\">" + 
      (guard((context != null) ? context['banned'] : null) ?
        "[[user:banned]]" :
        "@" + 
          __escape(guard((context != null) ? context['username'] : null))) + 
      "</span>\n\t\t\t" + 
      (guard((context != null) ? context['banned'] : null) ?
        "" :
        "\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard((context != null) ? context['status'] : null)) + 
          "\" title=\"[[global:" + 
          __escape(guard((context != null) ? context['status'] : null)) + 
          "]]\"></i>\n\t\t\t") + 
      "\n\t\t</a>\n\n\t\t<div class=\"row usercard-info\">\n\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t<small>[[global:posts]]</small>\n\t\t\t\t<span class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t<small>[[global:reputation]]</small>\n\t\t\t\t<span class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['reputation'] : null)) + 
      "</span>\n\t\t\t</div>\n\n\t\t\t<button class=\"btn-morph persona-fab " + 
      (guard((context != null) ? context['banned'] : null) ?
        " hide" :
        "") + 
      "\">\n\t\t\t\t<span>\n\t\t\t\t\t<span class=\"s1\"></span>\n\t\t\t\t\t<span class=\"s2\"></span>\n\t\t\t\t\t<span class=\"s3\"></span>\n\t\t\t\t</span>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
