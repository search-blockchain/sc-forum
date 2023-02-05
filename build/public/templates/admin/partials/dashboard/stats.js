
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
    return "<div class=\"table-responsive\">\n\t<table class=\"table table-striped\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.yesterday]]</th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.today]]</th>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.last-week]]</th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.this-week]]</th>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.last-month]]</th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.this-month]]</th>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.all]]</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t" + 
      compiled.blocks['stats'](helpers, context, guard, iter, helper) + 
      "\n\t\t</tbody>\n\t</table>\n</div>";
  }

  compiled.blocks = {
    'stats': function stats(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['stats'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t" + 
          (guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null) ?
            "\n\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "</a>\n\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t</strong>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['yesterday'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['today'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayIncrease'] : null)) + 
          "%</small></td>\n\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastweek'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thisweek'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekIncrease'] : null)) + 
          "%</small></td>\n\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastmonth'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thismonth'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthIncrease'] : null)) + 
          "%</small></td>\n\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['alltime'] : null)) + 
          "</td>\n\t\t\t</tr>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
