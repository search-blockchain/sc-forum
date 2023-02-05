
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
    return "<div class=\"hooks-list panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\t" + 
      compiled.blocks['hooks'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'hooks': function hooks(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['hooks'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<div class=\"panel panel-default\">\n\t\t<div class=\"panel-heading\" role=\"tab\">\n\t\t<div class=\"panel-title\">\n\t\t\t<a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\" aria-expanded=\"true\" aria-controls=\"" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\">\n\t\t\t" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['hookName'] : null)) + 
          "\n\t\t\t</a>\n\t\t\t<span class=\"pull-right\">" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['count'] : null)) + 
          " hooks</span>\n\t\t</div>\n\t\t</div>\n\t\t<div id=\"" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\" class=\"panel-collapse collapse\" role=\"tabpanel\">\n\t\t<div class=\"panel-body clearfix\">\n\t\t\t" + 
          iter(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['methods'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t<div class=\"clearfix\">\n\t\t\t\t<strong>" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['id'] : null)) + 
              "</strong>\n\t\t\t\tPriority: " + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['priority'] : null)) + 
              "\n\n\t\t\t\t<button class=\"btn btn-primary btn-sm pull-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\" aria-expanded=\"false\" aria-controls=\"" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\">\n\t\t\t\t\tShow Code <i class=\"fa fa-eye\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"collapse\" id=\"" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\">\n\t\t\t\t<pre>" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['method'] : null)) + 
              "</pre>\n\t\t\t</div>\n\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t</div>\n\t\t</div>\n\t</div>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
