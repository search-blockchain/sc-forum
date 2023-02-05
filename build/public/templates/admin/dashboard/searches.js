
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
    return "<div class=\"row dashboard\">\n\t<div class=\"col-xs-12\">\n\t\t<a class=\"btn btn-link\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/dashboard\">\n\t\t\t<i class=\"fa fa-chevron-left\"></i>\n\t\t\t[[admin/dashboard:back-to-dashboard]]\n\t\t</a>\n\n\n\t\t<table class=\"table table-striped search-list\">\n\t\t\t<tbody>\n\t\t\t\t" + 
      (guard((context != null && context['searches'] != null) ? context['searches']['length'] : null) ?
        "" :
        "\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=4\" class=\"text-center\"><em>[[admin/dashboard:details.no-searches]]</em></td>\n\t\t\t\t</tr>\n\t\t\t\t") + 
      "\n\t\t\t\t" + 
      compiled.blocks['searches'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'searches': function searches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['searches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<tr>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['searches'] != null && context['searches'][key0] != null) ? context['searches'][key0]['value'] : null)) + 
          "</a></td>\n\t\t\t\t\t<td class=\"text-right\">" + 
          __escape(guard((context != null && context['searches'] != null && context['searches'][key0] != null) ? context['searches'][key0]['score'] : null)) + 
          "</td>\n\t\t\t\t</tr>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
