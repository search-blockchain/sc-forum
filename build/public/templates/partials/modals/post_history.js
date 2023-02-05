
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
    return "<p class=\"number-of-diffs\">\n\t" + 
      (guard((context != null) ? context['numDiffs'] : null) ?
        "\n\t[[topic:diffs.description, " + 
          __escape(guard((context != null) ? context['numDiffs'] : null)) + 
          "]]\n\t" :
        "\n\t[[topic:diffs.no-revisions-description, " + 
          __escape(guard((context != null) ? context['numDiffs'] : null)) + 
          "]]\n\t") + 
      "\n</p>\n" + 
      (guard((context != null) ? context['numDiffs'] : null) ?
        "\n<div class=\"form-group\">\n\t<select class=\"form-control\">\n\t\t" + 
          compiled.blocks['diffs'](helpers, context, guard, iter, helper) + 
          "\n\t</select>\n\n\t<hr />\n\n\t<ul class=\"posts-list diffs\"></ul>\n\n\t" + 
          (guard((context != null) ? context['editable'] : null) ?
            "\n\t<button class=\"btn btn-primary\" data-action=\"restore\">[[topic:diffs.restore]]</button>\n\t" :
            "") + 
          "\n\t" + 
          (guard((context != null) ? context['deletable'] : null) ?
            "\n\t<button class=\"btn btn-danger\" data-action=\"delete\">[[topic:diffs.delete]]</button>\n\t" :
            "") + 
          "\n\t" + 
          (guard((context != null) ? context['editable'] : null) ?
            "\n\t<p class=\"help-block\">[[topic:diffs.restore-description]]</p>\n\t" :
            "") + 
          "\n\n</div>\n" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    'diffs': function diffs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['diffs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<option value=\"" + 
          __escape(guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['timestamp'] : null)) + 
          "\">\n\t\t\t" + 
          __escape(guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['pretty'] : null)) + 
          "\n\t\t\t" + 
          (guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['username'] : null) ?
            "[" + 
              __escape(guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['username'] : null)) + 
              "]" :
            "") + 
          "\n\t\t\t" + 
          (index === 0 ?
            "([[topic:diffs.current-revision]])" :
            "") + 
          "\n\t\t\t" + 
          (index === length - 1 ?
            "([[topic:diffs.original-revision]])" :
            "") + 
          "\n\t\t</option>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
