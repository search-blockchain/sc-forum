
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
    return "<div class=\"panel panel-default\" id=\"analytics-panel\">\n\t<div class=\"panel-heading\">\n\t\t[[admin/dashboard:forum-traffic]]\n\t\t<div class=\"pull-right\">\n\t\t\t<a href=\"#\"><i class=\"fa fa-fw fa-expand\"></i></a>\n\t\t</div>\n\t\t<div class=\"pull-right\">\n\t\t\t<a target=\"_blank\" id=\"view-as-json\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/v3/admin/analytics/" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "?type=hourly\"><i class=\"fa fa-fw fa-terminal\"></i></a>\n\t\t</div>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div class=\"graph-container\" id=\"analytics-traffic-container\">\n\t\t\t<canvas id=\"analytics-traffic\" width=\"100%\" height=\"400\"></canvas>\n\t\t</div>\n\t\t<hr/>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n\t\t\t\t<div><strong id=\"pageViewsThirty\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['month'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['month'] : null)) :
        "0") + 
      "</strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"30\">[[admin/dashboard:page-views-thirty]]</a></div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\n\t\t\t\t<div><strong id=\"pageViewsSeven\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['week'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['week'] : null)) :
        "0") + 
      "</strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"7\">[[admin/dashboard:page-views-seven]]</a></div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n\t\t\t\t<div><strong id=\"pageViewsPastDay\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['day'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['day'] : null)) :
        "0") + 
      "</strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"hours\" data-amount=\"24\">[[admin/dashboard:page-views-last-day]]</a></div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\n\t\t\t\t<div><strong><i class=\"fa fa-clock-o\"></i></strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"custom\">[[admin/dashboard:page-views-custom]]</a></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
