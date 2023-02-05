
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
    return "<div class=\"topic-thumbs-modal\">\n\t" + 
      (guard((context != null && context['thumbs'] != null) ? context['thumbs']['length'] : null) ?
        "" :
        "\n\t<div class=\"alert alert-info\">[[modules:thumbs.modal.no-thumbs]]</div>\n\t") + 
      "\n\t" + 
      compiled.blocks['thumbs'](helpers, context, guard, iter, helper) + 
      "\n\t<hr />\n\t<p class=\"help-block\">[[modules:thumbs.modal.resize-note, " + 
      __escape(guard((context != null && context['config'] != null && context['config']['thumbs'] != null) ? context['config']['thumbs']['size'] : null)) + 
      "]]</p>\n</div>";
  }

  compiled.blocks = {
    'thumbs': function thumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<div class=\"media\" data-id=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['id'] : null)) + 
          "\" data-path=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['url'] : null)) + 
          "\">\n\t\t<div class=\"media-left\">\n\t\t\t<img class=\"media-object\" src=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['url'] : null)) + 
          "\" alt=\"\" />\n\t\t</div>\n\t\t<div class=\"media-body\">\n\t\t\t<p>\n\t\t\t\t<code>" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['name'] : null)) + 
          "</code>\n\t\t\t</p>\n\t\t\t<button class=\"btn btn-danger\" data-action=\"remove\"><i class=\"fa fa-times\"></i> [[modules:thumbs.modal.remove]]</button>\n\t\t</div>\n\t</div>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
